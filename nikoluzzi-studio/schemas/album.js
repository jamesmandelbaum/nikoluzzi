export default {
  name: 'album',
  type: 'document',
  title: 'Album',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titre',
      description: "Titre de l'album",
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      description: "Description de l'album",
    },
    {
      title: 'Photos',
      name: 'photos',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'photographie' }],
        },
      ],
    },
  ],
};
