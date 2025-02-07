import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import React from "react";
import ProductDetailsTabs from "../singleproduct/ProductDetailsTabs";
import ProductGrid from "@/components/ProductGrid";
import ProductPage from "@/pages/ProductPage";
import CartPage from "@/pages/cart";
const cartsidebar = () => {
  return (
    <div className="gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-mygray w-{1440px} h{3107px}">
      <Navbar />
      <CartPage />
      <ProductPage />
      <ProductDetailsTabs />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default cartsidebar;
