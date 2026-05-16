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
