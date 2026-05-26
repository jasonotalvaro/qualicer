export default {
  name:  'autor',
  title: 'Autores',
  type:  'document',
  fields: [
    {
      name:       'nombre',
      title:      'Nombre',
      type:       'string',
      validation: (R: any) => R.required(),
    },
    {
      name:       'apellido',
      title:      'Apellido',
      type:       'string',
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
  ],
  preview: {
    select: {
      title:    'apellido',
      subtitle: 'nombre',
    },
    prepare({ title, subtitle }: any) {
      return { title: `${subtitle ?? ''} ${title ?? ''}`.trim() };
    },
  },
};
