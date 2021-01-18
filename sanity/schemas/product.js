export default {
  name: 'product',
  title: 'Produits',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom du produit',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description du produit',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: "Produit par défaut",
      name: "defaultProductVariant",
      type: "productVariant",
    },
    {
      title: "Variantes",
      name: "variants",
      type: "array",
      of: [
        {
          title: "Variant",
          type: "productVariant",
        },
      ],
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "subcategory" },
        },
      ],
    },
    {
      name: 'isavailable',
      title: 'Produit disponible',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },

  ],
};
