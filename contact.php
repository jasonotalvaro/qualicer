<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

// ── CONFIG ────────────────────────────────────────────────────────────────────
require_once dirname(__DIR__) . '/config.php';

$SUBJECT  = 'Nuevo mensaje de contacto — Qualicer 2026';
$LOG_FILE = __DIR__ . '/data/contacts.txt';
// ─────────────────────────────────────────────────────────────────────────────

function json_out(bool $ok, string $message = ''): void {
    echo json_encode(['ok' => $ok, 'message' => $message]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_out(false, 'method_not_allowed');
}

$perfil  = trim($_POST['perfil']  ?? '');
$nombre  = trim($_POST['nombre']  ?? '');
$cargo   = trim($_POST['cargo']   ?? '');
$email   = trim($_POST['email']   ?? '');
$empresa = trim($_POST['empresa'] ?? '');
$mensaje = trim($_POST['mensaje'] ?? '');
$privacy = ($_POST['privacy'] ?? '') === 'on';
$comms   = ($_POST['comms']   ?? '') === 'on' ? 1 : 0;

$nombre  = preg_replace('/\s+/', ' ', $nombre);
$mensaje = preg_replace('/\s+/', ' ', $mensaje);

if (!$privacy) {
    json_out(false, 'privacy_required');
}

if ($nombre === '' || $email === '' || $mensaje === '') {
    json_out(false, 'required_fields');
}

if (mb_strlen($nombre) > 255) {
    json_out(false, 'invalid_name');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 254) {
    json_out(false, 'invalid_email');
}

if (mb_strlen($mensaje) > 5000) {
    json_out(false, 'message_too_long');
}

$perfil_safe  = str_replace(["\r", "\n"], '', $perfil);
$nombre_safe  = str_replace(["\r", "\n"], '', $nombre);
$cargo_safe   = str_replace(["\r", "\n"], '', $cargo);
$email_safe   = str_replace(["\r", "\n"], '', $email);
$empresa_safe = str_replace(["\r", "\n"], '', $empresa);

// ── DATABASE ─────────────────────────────────────────────────────────────────
try {
    $dsn = 'mysql:host=' . DB_HOST . ';port=' . DB_PORT . ';dbname=' . DB_NAME . ';charset=utf8mb4';
    $pdo = new PDO($dsn, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ]);

    $pdo->exec("
        CREATE TABLE IF NOT EXISTS contactos (
            id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            perfil     VARCHAR(50)   NOT NULL DEFAULT '',
            nombre     VARCHAR(255)  NOT NULL,
            cargo      VARCHAR(255)  NOT NULL DEFAULT '',
            email      VARCHAR(254)  NOT NULL,
            empresa    VARCHAR(255)  NOT NULL DEFAULT '',
            mensaje    TEXT          NOT NULL,
            comms      TINYINT(1)    NOT NULL DEFAULT 0,
            created_at DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");

    $stmt = $pdo->prepare("
        INSERT INTO contactos (perfil, nombre, cargo, email, empresa, mensaje, comms)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    ");
    $stmt->execute([$perfil_safe, $nombre_safe, $cargo_safe, $email_safe, $empresa_safe, $mensaje, $comms]);

} catch (PDOException $e) {
    error_log('Qualicer contact DB error: ' . $e->getMessage());
    json_out(false, 'db_error');
}

// ── EMAIL vía PHPMailer SMTP ──────────────────────────────────────────────────
$lib = __DIR__ . '/lib/';

$body = implode("\n", [
    'Nuevo mensaje de contacto — Qualicer 2026',
    '',
    'Perfil:  ' . ($perfil_safe  ?: '—'),
    'Nombre:  ' . $nombre_safe,
    'Cargo:   ' . ($cargo_safe   ?: '—'),
    'Email:   ' . $email_safe,
    'Empresa: ' . ($empresa_safe ?: '—'),
    '',
    'Mensaje:',
    $mensaje,
    '',
    'Comunicaciones: ' . ($comms ? 'Sí' : 'No'),
    'Fecha: '          . date('Y-m-d H:i:s T'),
]);

if (file_exists($lib . 'PHPMailer.php')) {

    require $lib . 'Exception.php';
    require $lib . 'PHPMailer.php';
    require $lib . 'SMTP.php';

    try {
        $mail = new PHPMailer\PHPMailer\PHPMailer(true);
        $mail->isSMTP();
        $mail->Host       = SMTP_HOST;
        $mail->SMTPAuth   = true;
        $mail->Username   = SMTP_USER;
        $mail->Password   = SMTP_PASS;
        $mail->SMTPSecure = (SMTP_PORT === 465)
            ? PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS
            : PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = SMTP_PORT;
        $mail->CharSet    = 'UTF-8';

        $mail->setFrom(SMTP_FROM, 'Qualicer 2026');
        $mail->addAddress(ADMIN_EMAIL);
        $mail->addReplyTo($email_safe, $nombre_safe);

        $mail->Subject = $SUBJECT;
        $mail->Body    = $body;

        $mail->send();

    } catch (\Exception $e) {
        error_log('Qualicer contact mail error: ' . $e->getMessage());
    }

} else {
    $headers  = 'From: ' . SMTP_FROM . "\r\n";
    $headers .= 'Reply-To: ' . $email_safe . "\r\n";
    $headers .= 'Content-Type: text/plain; charset=utf-8' . "\r\n";
    @mail(ADMIN_EMAIL, $SUBJECT, $body, $headers);
}

// ── LOG FILE (backup) ────────────────────────────────────────────────────────
$dataDir = dirname($LOG_FILE);
if (!is_dir($dataDir)) {
    @mkdir($dataDir, 0755, true);
}
@file_put_contents(
    $LOG_FILE,
    date('Y-m-d H:i:s') . "\t{$perfil_safe}\t{$nombre_safe}\t{$email_safe}\n",
    FILE_APPEND | LOCK_EX
);

json_out(true);
