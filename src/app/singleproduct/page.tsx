import React from "react";
import Footer from "@/components/Footer";
import ProductDetailsTabs from "./ProductDetailsTabs";
import ProductGrid from "@/components/ProductGrid";
import ProductPage from "@/pages/ProductPage";

interface Props {
  params: { };
}

const SingleProductPage: React.FC<Props> = ({ params }) => {
  const { } = params;

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-mygray">
      
      <ProductPage />
      <ProductDetailsTabs />
      <ProductGrid/>
      
      <Footer />
    </div>
  );
};

export default SingleProductPage;
