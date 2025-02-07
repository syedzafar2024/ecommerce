import Navbar from "@/components/navbar";
import React from "react";
import Image from "next/image";
import HeaderBanner from "../myaccount/HeaderBanner";
import HomePage from "@/pages/home";
import Footer from "@/components/Footer";
import Toolbar from "./Toolbar";
import pic01 from "../../../public/img/Mask group.png";
import pic02 from "../../../public/img/Mask group (1).png";
import pic03 from "../../../public/img/Mask group (2).png";
import pic04 from "../../../public/img/Mask group (3).png";
import pic05 from "../../../public/img/Mask group (4).png";
import pic06 from "../../../public/img/Mask.png";
import pic07 from "../../../public/img/Mask group (5).png";
import pic08 from "../../../public/img/Mask group (6).png";
import pic09 from "../../../public/img/Mask group (7).png";
import pic10 from "../../../public/img/Mask group (8).png";
import pic11 from "../../../public/img/Mask group (9).png";
import pic12 from "../../../public/img/Mask group (10).png";
import pic13 from "../../../public/img/Mask group (11).png";
import pic14 from "../../../public/img/Mask group (12).png";
import pic15 from "../../../public/img/Mask group (13).png";
import pic16 from "../../../public/img/Mask group (14).png";

export default function Shop() {
  const breadcrumbs = [{ name: "Home", link: "/" }, { name: "Shop" }];

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-mygray">
      <Navbar />
      <HeaderBanner title="Shop" breadcrumbs={breadcrumbs} />
      <Toolbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6 mt-6 sm:mt-10 mx-2 sm:mx-4">
        <div className="space-y-4 border border-green-500 rounded-2xl">
          <Image src={pic01} alt="" />
          <p className="text-base leading-[24px]">Trenton modular sofa_3</p>
          <p className="text-[24px] leading-[36px]">Rs. 25,000.00</p>
        </div>
        <div className="space-y-4 border border-green-500 rounded-2xl">
          <Image src={pic02} alt="" />
          <p>Granite dining table with dining chair</p>
          <p className="text-[24px] leading-[36px]">Rs. 25,000.00</p>
        </div>
        <div className="space-y-4 border border-green-500 rounded-2xl">
          <Image src={pic03} alt="" />
          <p>Outdoor bar table and stool</p>
          <p className="text-[24px] leading-[36px]">Rs. 25,000.00</p>
        </div>
        <div className="space-y-4 border border-green-500 rounded-2xl">
          <Image src={pic04} alt="" />
          <p>Plain console with teak mirror</p>
          <p className="text-[24px] leading-[36px]">Rs. 25,000.00</p>
        </div>
        <div className="space-y-4 border border-green-500">
          <Image src={pic05} alt="" />
          <p>Grain coffee table</p>
          <p className="text-[24px] leading-[36px]">Rs. 15,000.00</p>
        </div>
        <div className="space-y-4 border border-green-500">
          <Image src={pic06} alt="" />
          <p>Grain coffee table</p>
          <p className="text-[24px] leading-[36px]">Rs. 225,000.00</p>
        </div>
        <div className="space-y-4 border border-green-500">
          <Image src={pic07} alt="" />
          <p>Round coffee table_color 2</p>
          <p className="text-[24px] leading-[36px]">Rs. 251,000.00</p>
        </div>
        <div className="space-y-4 border border-green-500">
          <Image src={pic08} alt="" />
          <p>Reclaimed teak coffee table</p>
          <p className="text-[24px] leading-[36px]">Rs. 25,200.00</p>
        </div>
        <div className="space-y-4 border border-green-500">
          <Image src={pic09} alt="" />
          <p>Plain console_</p>
          <p className="text-[24px] leading-[36px]">Rs. 258,200.00</p>
        </div>
        <div className="space-y-4 border border-green-500">
          <Image src={pic10} alt="" />
          <p>Reclaimed teak Sideboard</p>
          <p className="text-[24px] leading-[36px]">Rs. 20,000.00</p>
        </div>
        <div className="space-y-4 border border-green-500">
          <Image src={pic11} alt="" />
          <p>SJP_0825 </p>
          <p className="text-[24px] leading-[36px]">Rs. 200,000.00</p>
        </div>
        <div className="space-y-4 border border-green-500">
          <Image src={pic12} alt="" />
          <p>Bella chair and table</p>
          <p className="text-[24px] leading-[36px]">Rs. 100,000.00</p>
        </div>
        <div className="space-y-4 border border-green-500">
          <Image src={pic13} alt="" />
          <p>Granite square side table</p>
          <p className="text-[24px] leading-[36px]">Rs. 258,800.00</p>
        </div>
        <div className="space-y-4 border border-green-500">
          <Image src={pic14} alt="" />
          <p>Asgaard sofa</p>
          <p className="text-[24px] leading-[36px]">Rs. 250,000.00</p>
        </div>
        <div className="space-y-4 border border-green-500">
          <Image src={pic15} alt="" />
          <p>Maya sofa three seater</p>
          <p className="text-[24px] leading-[36px]">Rs. 115,000.00</p>
        </div>
        <div className="space-y-4 border border-green-500">
          <Image src={pic16} alt="" />
          <p>Outdoor sofa set</p>
          <p className="text-[24px] leading-[36px]">Rs. 244,000.00</p>
        </div>
      </div>
      <HomePage />
      <Footer />
    </div>
  );
}
