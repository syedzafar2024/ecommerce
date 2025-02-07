import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import BillingPage from "@/pages/BillingPage";
import HomePage from "@/pages/home";
import React from "react";
import HeaderBanner from "../myaccount/HeaderBanner";

export default function Checkout() {
    const breadcrumbs = [{ name: "Home", link: "/" }, { name: "Checkout" }];
  
    return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-mygray">
      <Navbar />
      <HeaderBanner
        title="Checkout"
        breadcrumbs={breadcrumbs}
      />
      <BillingPage />
      <HomePage />
      <Footer />
    </div>
  );
};


