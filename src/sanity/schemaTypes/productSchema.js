// export type Product = {
//     _id: string
//     _createdAt: string
//     name: string
//     slug: string
//     price: number
//     description: string
//     category: {
//       _ref: string
//       _type: string
//     }
//     image: {
//       asset: {
//         url: string
//       }
//     }
//   }

// schemas/product.js
const productSchema = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "imagePath",
      type: "image",
      title: "Image",
      options: {
        hotspot: true, // Enables image cropping
      },
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "discountPercentage",
      type: "number",
      title: "Discount Percentage",
    },
    {
      name: "isFeaturedProduct",
      type: "boolean",
      title: "Is Featured Product?",
    },
    {
      name: "stockLevel",
      type: "number",
      title: "Stock Level",
    },
    {
      name: "category",
      type: "string",
      title: "Category",
      options: {
        list: [
          { title: "Chair", value: "Chair" },
          { title: "Sofa", value: "Sofa" },
          { title: "Table", value: "Table" },
          { title: "Bed", value: "Bed" },
        ],
      },
    },
  ],
};

export default productSchema;
