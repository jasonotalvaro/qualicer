export type Lang = 'es' | 'en';
export const defaultLang: Lang = 'es';

const ui = {
  es: {
    /* nav */
    'nav.home':      'Home',
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
