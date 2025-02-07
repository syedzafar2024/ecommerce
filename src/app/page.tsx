import React from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosecction";
import CardList from "@/components/CardList";
import SectionHeader from "@/components/SectionHeader";
import ProductGrid from "@/components/ProductGrid";
import HeroBanner from "@/components/HeroBanner";
import BlogList from "@/components/BlogList";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";
import { client } from "../sanity/lib/sanity";

export default async function Home() {
  // Fetch data directly in the Server Component
  const products = await client.fetch(`
    *[_type == "product"] {
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
  `);

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-mygray">
      <Navbar />
      <HeroSection />
      <CardList />
      <div>
        <h1>Products</h1>
        <ul>
          {products.map((product:any) => (
            <li key={product._id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <img src={product.imageUrl} alt={product.name} />
              <p>Category: {product.category}</p>
            </li>
          ))}
        </ul>
      </div>

      <SectionHeader />
      <ProductGrid />
      <div className="text-center mt-8">
        <a href="#" className="text-gray-600 underline hover:text-black">
          View More
        </a>
        <div className="min-h-screen">
          <HeroBanner />
          <div className="min-h-screen bg-mywite">
            <BlogList />
          </div>
          <InstagramSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
