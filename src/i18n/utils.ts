export type Lang = 'es' | 'en';
export const defaultLang: Lang = 'es';

const ui = {
  es: {
    /* nav */
    'nav.home':      'Inicio',
    'nav.speakers':  'Ponentes',
    'nav.agenda':    'Agenda',
    'nav.manifesto': 'Manifesto',
    'nav.contact':   'Contacto',
    'nav.tickets':   'Entradas',
    'nav.lang':      'EN',
    'nav.langUrl':   '/en/',

    /* hero */
    'hero.congress':    'XIX Congreso Mundial de la Calidad del Azulejo y del Pavimento Cerámico',
    'hero.headline1':   'Now,',
    'hero.headline2':   'the full view',
    'hero.desc':        'El foro internacional donde innovación cerámica, calidad\ny transformación se entienden en todas sus dimensiones',
    'hero.date':        '10 — 11 junio\n2026',
    'hero.venue':       'Auditorio y Palacio\nde Congresos',
    'hero.city':        'Castellón,\nEspaña',
    'hero.organizers':  'Organizadores:',
    'hero.program':     'Ver programa',
    'hero.tickets':     'Conseguir entradas',

    /* datos */
    'datos.title':       'El foro en datos',
    'datos.card1.stat':  '32ª',
    'datos.card1.label': 'Congreso Mundial de la Calidad del Azulejo y del Pavimento Cerámico',
    'datos.card1.desc':  'Desde 1992, Qualicer reúne a los mejores expertos del mundo en un encuentro que define el rumbo de la industria cerámica.',
    'datos.card2.stat':  '+30',
    'datos.card2.label': 'Ponentes de Europa, América y Asia',
    'datos.card2.desc':  'Los expertos internacionales más relevantes de la cerámica, con perspectivas que van más allá de los límites del sector.',
    'datos.card3.stat':  '5',
    'datos.card3.label': 'Ejes temáticos que cubren todo el sector',
    'datos.card3.desc':  'Innovación, sostenibilidad, digitalización, normativa y tendencias: el sector cerámico en todas sus dimensiones.',
    'datos.card4.stat':  '2 Días',
    'datos.card4.label': '10 y 11 de junio',
    'datos.card4.desc':  'Dos jornadas intensivas en el Auditorio y Palacio de Congresos de Castellón para aprovechar al máximo cada momento.',

    /* bloque 3 */
    'b3.headline': 'Donde todas las voces del sector convergen',

    /* bloque 4 */
    'b4.title': 'Patrocinadores 2026',

    /* bloque 5 */
    'b5.title':       'Ejes transversales Qualicer 2026',
    'b5.card1.title': 'Calidad y excelencia',
    'b5.card1.desc':  'La cerámica española frente a los nuevos actores globales. Clústeres, mercados y estrategias para defender la calidad como ventaja competitiva.',
    'b5.card2.title': 'Instalación y futuro de la construcción',
    'b5.card2.desc':  'La cerámica española frente a los nuevos actores globales. Clústeres, mercados y estrategias para defender la calidad como ventaja competitiva.',
    'b5.card3.title': 'Estrategia y competitividad global',
    'b5.card3.desc':  'La cerámica española frente a los nuevos actores globales. Clústeres, mercados y estrategias para defender la calidad como ventaja competitiva.',
    'b5.card4.title': 'Sostenibilidad y transición energética',
    'b5.card4.desc':  'La cerámica española frente a los nuevos actores globales. Clústeres, mercados y estrategias para defender la calidad como ventaja competitiva.',
    'b5.card5.title': 'Innovación y tecnología',
    'b5.card5.desc':  'La cerámica española frente a los nuevos actores globales. Clústeres, mercados y estrategias para defender la calidad como ventaja competitiva.',

    /* ejes */
    'eje.construccion':   'Construcción',
    'eje.sostenibilidad': 'Sostenibilidad',
    'eje.estrategia':     'Estrategia',

    /* agenda días */
    'agenda.dia.miercoles': 'Miércoles 10 Junio',
    'agenda.dia.jueves':    'Jueves 11 Junio',
    'agenda.dia.viernes':   'Viernes 12 Junio',

    /* página ponentes */
    'ponentes.headline':    'Las personas que dan forma al debate',
    'ponentes.desc':        'Investigadores, directivos y técnicos de referencia internacional que aportan su perspectiva al panorama cerámico global.',
    'ponentes.label':       'Ponentes',
    'ponentes.filtro.eje':  'Por eje:',
    'ponentes.filtro.dia':  'Por día:',
    'ponentes.explorar':    'Explorar',

    /* bloque 6 */
    'b6.title':            'Quienes dan forma al debate',
    'b6.cta':              'Ver todos los ponentes',
    'b6.explorar':         'Explorar',
    'b6.agenda':           'Ver en agenda',
    'b6.tickets.headline': 'Consigue tu entrada y forma parte del congreso',
    'b6.tickets.cta':      'Conseguir entradas',

    /* bloque 7 */
    'b7.title':  'Las temáticas más actuales como vértebras',
    'b7.topic1': 'Hoja de ruta 2030: cogeneración, atomización, autoconsumo y hornos eléctricos',
    'b7.topic2': 'Defendiendo la calidad en el mercado norteamericano',
    'b7.topic3': 'Mala aplicación sistémica: consecuencias reputacionales del mal uso del producto y los fallos de diseño en la industria del azulejo',
    'b7.topic4': 'Construcción off-site y avance de los sistemas modulares, ¡el futuro es brillante!',
    'b7.topic5': 'Coexistencia de tecnologías — vías futuras hacia fábricas descarbonizadas (panel)',
    'b7.topic6': 'Mineralización de cal agotada de filtros de la industria cerámica — Proyecto CCS4CER',
    'b7.cta':    'Ver agenda completa',

    /* bloque 8 */
    'b8.date':     '10 — 11 junio\n2026',
    'b8.venue':    'Auditorio y Palacio\nde Congresos',
    'b8.city':     'Castellón,\nEspaña',
    'b8.headline': '¿Listo para ver otra nueva dimensión?',
    'b8.cta':      'Conseguir entradas',

    /* footer */
    'footer.organiza':    'Organiza:',
    'footer.visit':       'Visítanos',
    'footer.address':     'Auditorio y Palacio de Congresos\n\nAv. de la Mare de Déu del Lledó, 50,\n12004 Castelló de la Plana, Castellón, España',
    'footer.follow':      'Síguenos',
    'footer.contact':     'Contacta',
    'footer.email':       'qualicer@qualicer.org',
    'footer.phone':       '+34 964 356 500',
    'footer.legal':       'Legales',
    'footer.legal1':      'Aviso legal',
    'footer.legal2':      'Política de privacidad',
    'footer.legal3':      'Política de cookies',
    'footer.copyright':   '©2026 Qualicer – Todos los derechos reservados',
    'footer.cta':         'Conseguir entradas',
  },
  en: {
    /* nav */
    'nav.home':      'Home',
    'nav.speakers':  'Speakers',
    'nav.agenda':    'Agenda',
    'nav.manifesto': 'Manifesto',
    'nav.contact':   'Contact',
    'nav.tickets':   'Tickets',
    'nav.lang':      'ES',
    'nav.langUrl':   '/',

    /* hero */
    'hero.congress':    'XIX World Congress on Ceramic Tile and Flooring Quality',
    'hero.headline1':   'Now,',
    'hero.headline2':   'the full view',
    'hero.desc':        'The international forum where ceramic innovation, quality\nand transformation are understood in all their dimensions',
    'hero.date':        'June 10 — 11\n2026',
    'hero.venue':       'Auditorium and\nCongress Centre',
    'hero.city':        'Castellón,\nSpain',
    'hero.organizers':  'Organizers:',
    'hero.program':     'View programme',
    'hero.tickets':     'Get tickets',

    /* datos */
    'datos.title':       'The forum in numbers',
    'datos.card1.stat':  '32nd',
    'datos.card1.label': 'World Congress on Ceramic Tile and Flooring Quality',
    'datos.card1.desc':  'Since 1992, Qualicer has brought together the world\'s leading experts in an event that shapes the direction of the ceramic industry.',
    'datos.card2.stat':  '+30',
    'datos.card2.label': 'Speakers from Europe, America and Asia',
    'datos.card2.desc':  'The most relevant international voices in ceramics, with perspectives that go beyond the boundaries of the sector.',
    'datos.card3.stat':  '5',
    'datos.card3.label': 'Thematic areas covering the entire sector',
    'datos.card3.desc':  'Innovation, sustainability, digitalisation, regulation and market trends: the ceramic sector in all its dimensions.',
    'datos.card4.stat':  '2 Days',
    'datos.card4.label': '10 and 11 June',
    'datos.card4.desc':  'Two intensive days at the Auditorium and Congress Centre of Castellón to make the most of every moment.',

    /* bloque 3 */
    'b3.headline': "Where all the sector's voices converge",

    /* bloque 4 */
    'b4.title': 'Sponsors 2026',

    /* bloque 5 */
    'b5.title':       'Qualicer 2026 transversal themes',
    'b5.card1.title': 'Quality and excellence',
    'b5.card1.desc':  'Spanish ceramics facing new global players. Clusters, markets and strategies to defend quality as a competitive advantage.',
    'b5.card2.title': 'Installation and the future of construction',
    'b5.card2.desc':  'Spanish ceramics facing new global players. Clusters, markets and strategies to defend quality as a competitive advantage.',
    'b5.card3.title': 'Strategy and global competitiveness',
    'b5.card3.desc':  'Spanish ceramics facing new global players. Clusters, markets and strategies to defend quality as a competitive advantage.',
    'b5.card4.title': 'Sustainability and energy transition',
    'b5.card4.desc':  'Spanish ceramics facing new global players. Clusters, markets and strategies to defend quality as a competitive advantage.',
    'b5.card5.title': 'Innovation and technology',
    'b5.card5.desc':  'Spanish ceramics facing new global players. Clusters, markets and strategies to defend quality as a competitive advantage.',

    /* ejes */
    'eje.construccion':   'Construction',
    'eje.sostenibilidad': 'Sustainability',
    'eje.estrategia':     'Strategy',

    /* página ponentes */
    'ponentes.headline':    'The people who shape the debate',
    'ponentes.desc':        'International researchers, executives and technical experts who bring their perspective to the global ceramics landscape.',
    'ponentes.label':       'Speakers',
    'ponentes.filtro.eje':  'By topic:',
    'ponentes.filtro.dia':  'By day:',
    'ponentes.explorar':    'Explore',

    /* agenda días */
    'agenda.dia.miercoles': 'Wednesday June 10',
    'agenda.dia.jueves':    'Thursday June 11',
    'agenda.dia.viernes':   'Friday June 12',

    /* bloque 6 */
    'b6.title':            'Who shapes the debate',
    'b6.cta':              'View all speakers',
    'b6.explorar':         'Explore',
    'b6.agenda':           'View in agenda',
    'b6.tickets.headline': 'Get your ticket and be part of the congress',
    'b6.tickets.cta':      'Get tickets',

    /* bloque 7 */
    'b7.title':  'The most current topics, the backbone of the programme',
    'b7.topic1': 'Possible roadmap 2030: cogeneration, spray drying, self-consumption and electric kilns',
    'b7.topic2': 'Defending quality in the North American market',
    'b7.topic3': 'Systemic misapplication: the reputational consequences of product misuse and design failure on the tiling industry',
    'b7.topic4': 'Off-site construction and pod advancement, the future is bright!',
    'b7.topic5': 'Coexistence of technologies — future pathways for decarbonized factories (panel)',
    'b7.topic6': 'Mineralization of exhausted lime from ceramic tile industry filters — Project CCS4CER',
    'b7.cta':    'View full agenda',

    /* bloque 8 */
    'b8.date':     'June 10 — 11\n2026',
    'b8.venue':    'Auditorium and\nCongress Centre',
    'b8.city':     'Castellón,\nSpain',
    'b8.headline': 'Ready to see a whole new dimension?',
    'b8.cta':      'Get tickets',

    /* footer */
    'footer.organiza':    'Organises:',
    'footer.visit':       'Visit us',
    'footer.address':     'Auditorium and Congress Centre\n\nAv. de la Mare de Déu del Lledó, 50,\n12004 Castelló de la Plana, Castellón, Spain',
    'footer.follow':      'Follow us',
    'footer.contact':     'Contact',
    'footer.email':       'qualicer@qualicer.org',
    'footer.phone':       '+34 964 356 500',
    'footer.legal':       'Legal',
    'footer.legal1':      'Legal notice',
    'footer.legal2':      'Privacy policy',
    'footer.legal3':      'Cookie policy',
    'footer.copyright':   '©2026 Qualicer – All rights reserved',
    'footer.cta':         'Get tickets',
  },
} as const;

export type TranslationKey = keyof typeof ui[typeof defaultLang];

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first === 'en' ? 'en' : 'es';
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return (ui[lang] as Record<string, string>)[key]
      ?? (ui[defaultLang] as Record<string, string>)[key];
  };
}
