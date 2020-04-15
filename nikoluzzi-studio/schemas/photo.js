import { format } from 'date-fns';

export default {
  name: 'photographie',
  type: 'document',
  title: 'Photo',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titre',
      description: 'Titre de la photo',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: "URL de l'image",
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      type: 'image',
      title: 'Photographie',
    },
  ],
};
