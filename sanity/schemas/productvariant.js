export default {
  title: "Product variant",
  name: "productVariant",
  type: "object",
  fields: [
    {
      title: "Titre",
      name: "title",
      type: "string",
    },
    {
      title: "Poids en grammes",
      name: "grams",
      type: "number",
    },
    {
      name: 'price',
      title: 'Prix',
      type: 'number',
      description: 'Prix en centimes',
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Code-barres",
      name: "sku",
      type: "string",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};
