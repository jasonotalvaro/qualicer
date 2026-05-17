const EJES = [
  { title: 'Construcción',   value: 'construccion'   },
  { title: 'Sostenibilidad', value: 'sostenibilidad' },
  { title: 'Estrategia',     value: 'estrategia'     },
];

function horasList() {
  const list = [];
  for (let h = 8; h <= 22; h++) {
    for (const m of [0, 15, 30, 45]) {
      if (h === 22 && m > 0) break;
      const hh = String(h).padStart(2, '0');
      const mm = String(m).padStart(2, '0');
      const label = `${hh}:${mm} h`;
      list.push({ title: label, value: label });
    }
  }
  return list;
}

export default {
  name:  'agenda',
  title: 'Agenda',
  type:  'document',
  fields: [
    {
      name:    'dia',
      title:   'Día',
      type:    'string',
      options: {
        list: [
          { title: 'Miércoles 10 Junio', value: 'miercoles' },
          { title: 'Jueves 11 Junio',    value: 'jueves'    },
        ],
        layout: 'radio',
      },
      validation: (R: any) => R.required(),
    },
    {
      name:    'hora',
      title:   'Hora',
      type:    'string',
      options: { list: horasList() },
      validation: (R: any) => R.required(),
    },
    {
      name:  'titulo',
      title: 'Título de la sesión',
      type:  'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
      validation: (R: any) => R.required(),
    },
    {
      name:    'eje',
      title:   'Eje temático',
      type:    'string',
      options: { list: EJES },
    },
    {
      name:  'participantes',
      title: 'Participantes',
      type:  'array',
      of: [
        {
          type:   'object',
          fields: [
            { name: 'nombre',  title: 'Nombre',  type: 'string' },
            { name: 'empresa', title: 'Empresa', type: 'string' },
          ],
          preview: {
            select: { title: 'nombre', subtitle: 'empresa' },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title:    'titulo.es',
      subtitle: 'hora',
      dia:      'dia',
    },
    prepare({ title, subtitle, dia }: any) {
      const diaLabel = dia === 'miercoles' ? 'Mié 10' : 'Jue 11';
      return { title: title ?? '—', subtitle: `${diaLabel} · ${subtitle ?? ''}` };
    },
  },
};
