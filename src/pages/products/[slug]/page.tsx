// src/app/products/[slug]/page.tsx
import { client } from '../../../sanity/lib/sanity';

export async function generateStaticParams() {
  const products = await client.fetch(`
    *[_type == "product"] {
      slug {
        current
      }
    }
  `);

  return products.map((product: any) => ({
    slug: product.slug.current,
  }));
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await client.fetch(
    `
    *[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      price,
      description,
      "imageUrl": imagePath.asset->url,
      discountPercentage,
      isFeaturedProduct,
      stockLevel,
      category
    }
  `,
    { slug: params.slug }
  );

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.imageUrl} alt={product.name} />
      <p>Category: {product.category}</p>
    </div>
  );
}



// import { useRouter } from 'next/router';
// import { getProductBySlug, getProducts } from '';

// export async function getStaticPaths() {
//   const products = await getProducts();
//   const paths = products.map((product: { slug: { current: any; }; }) => ({
//     params: { slug: product.slug.current },
//   }));
//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const product = await getProductBySlug(params.slug);
//   return { props: { product } };
// }

// const ProductPage = ({ product }) => {
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold">{product.name}</h1>
//       <img src={product.image} alt={product.name} className="w-full h-64 object-cover my-4" />
//       <p className="text-gray-700">{product.description}</p>
//       <p className="text-2xl font-bold">${product.price}</p>
//     </div>
//   );
// };

// export default ProductPage;