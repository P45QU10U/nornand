export default {
  name: 'category',
  title: 'Catégories',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom catégorie',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subcat',
      title: 'Sous-catégorie',
      type: "array",
      of: [
        {
          type: "reference",
          to: {type: "subcategory"},
        },
      ],
    }
  ],
};
