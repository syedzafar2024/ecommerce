import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/home";
import React from "react";
import HeaderBanner from "../myaccount/HeaderBanner";

export default function Contact() {
  const breadcrumbs = [{ name: "Home", link: "/" }, { name: "Contact",}];

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-mygray">
      <Navbar />
      <HeaderBanner
        title="Contact"
        breadcrumbs={breadcrumbs}
        backgroundImage="/img/Rectangle 1.png"
      />
      <ContactPage />
      <HomePage />
      <Footer />
    </div>
  );
}
