const EJES = [
  { title: 'Construcción',   value: 'construccion'   },
  { title: 'Sostenibilidad', value: 'sostenibilidad' },
  { title: 'Estrategia',     value: 'estrategia'     },
];

export default {
  name:  'ponente',
  title: 'Ponentes',
  type:  'document',
  fields: [
    {
      name:  'nombre',
      title: 'Nombre',
      type:  'string',
      validation: (R: any) => R.required(),
    },
    {
      name:  'apellido',
      title: 'Apellido',
      type:  'string',
      validation: (R: any) => R.required(),
    },
    {
      name:    'eje',
      title:   'Eje temático',
      type:    'string',
      options: { list: EJES },
      validation: (R: any) => R.required(),
    },
    {
      name:  'cargo',
      title: 'Cargo',
      type:  'object',
      fields: [
        { name: 'es', title: 'Español', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
      ],
    },
    {
      name:  'descripcion',
      title: 'Descripción',
      type:  'object',
      fields: [
        { name: 'es', title: 'Español', type: 'text', rows: 4 },
        { name: 'en', title: 'English', type: 'text', rows: 4 },
      ],
    },
    {
      name:        'linkedin',
      title:       'LinkedIn',
      type:        'url',
      description: 'URL del perfil de LinkedIn',
    },
    {
      name:        'imagenHorizontal',
      title:       'Imagen',
      type:        'image',
      options:     { hotspot: true },
      description: 'Formato paisaje 430×270',
    },
  ],
  preview: {
    select: {
      title:    'apellido',
      subtitle: 'nombre',
      media:    'imagenHorizontal',
    },
    prepare({ title, subtitle, media }: any) {
      return { title: `${subtitle} ${title}`, media };
    },
  },
};
