import React from "react";
import Navbar from "@/components/navbar";
import CartPage from "@/pages/CartPage";
import HomePage from "@/pages/home";
import HeaderBanner from "../myaccount/HeaderBanner";
import Footer from "@/components/Footer";


export default function Cart() {
  const breadcrumbs = [{ name: "Home", link: "/" }, { name: "Cart" }];

  return (
    <div className="items-center w-{1440px} h-{525px} pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-mygray">
      <Navbar />
      <HeaderBanner
        title="Cart"
        breadcrumbs={breadcrumbs}
      />
      <CartPage />
      <HomePage />
      <Footer />
    </div>
  );
}
