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
      name:    'imagen',
      title:   'Imagen',
      type:    'image',
      options: { hotspot: true },
      validation: (R: any) => R.required(),
    },
    {
      name:    'formato',
      title:   'Formato imagen',
      type:    'string',
      options: {
        list: [
          { title: 'Horizontal', value: 'horizontal' },
          { title: 'Vertical',   value: 'vertical'   },
        ],
        layout: 'radio',
      },
      initialValue: 'vertical',
    },
    {
      name:        'orden',
      title:       'Orden',
      type:        'number',
      description: 'Controla la posición en el home y en el listado general',
    },
  ],
  preview: {
    select: {
      title:    'apellido',
      subtitle: 'nombre',
      media:    'imagen',
    },
    prepare({ title, subtitle, media }: any) {
      return { title: `${subtitle} ${title}`, media };
    },
  },
};
