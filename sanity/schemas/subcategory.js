export default {
  name: 'subcategory',
  title: 'Sous-catégories',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom sous-catégorie',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ]
  }