import Navbar from "@/components/navbar";
import React from "react";
import HeaderBanner from "../myaccount/HeaderBanner";
import HomePage from "@/pages/home";
import Footer from "@/components/Footer";
import BlogList from "./BlogList";
import Image from "next/image";
import Pic001 from "../../../public/img/Rectangle 13.png";
import { FaUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaTags } from "react-icons/fa6";
import pic002 from "../../../public/img/Rectangle 14.png";
import pic003 from "../../../public/img/Rectangle 15.png";


export default function Blog(): React.JSX.Element {
  const breadcrumbs = [{ name: "Home", link: "/" }, { name: "Blog" }];

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-mygray">
      <Navbar />
      <HeaderBanner
        title="Blog"
        breadcrumbs={breadcrumbs}
      />
      <div className="mt-20 flex flex-wrap lg:flex-nowrap mr-10">
        <div className="left side ">
          <div className="max-w-full">
            <Image src={Pic001} alt="" />
            <div className="flex items-center mt-4 text-[#9F9F9F]">
              <FaUser className="text-xl" />
              <span className="ml-2 text-base leading-[24px]">Admin</span>
              <MdDateRange className="ml-6 text-2xl" />
              <span className="ml-2 text-base leading-[24px]">
                14 August 2022
              </span>
              <FaTags className="ml-6 text-2xl" />
              <span className="ml-2 text-base leading-[24px]">Wood</span>
            </div>
            <h1 className="text-[30px] font-medium leading-[45px] my-8">
              Going all-in with millennial design
            </h1>
            <p className="w-[80%] text-justify text-[15px] font-medium leading-[22.5px] text-[#9F9F9F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <button className="text-[16px] leading-[24px] underline underline-offset-8 my-8">
              Read More
            </button>
          </div>

          <div className="mt-4">
            <Image src={pic003} alt="" />
            <div className="flex items-center mt-4 text-[#9F9F9F]">
              <FaUser className="text-xl" />
              <span className="ml-2 text-base leading-[24px]">Admin</span>
              <MdDateRange className="ml-6 text-2xl" />
              <span className="ml-2 text-base leading-[24px]">
                14 August 2022
              </span>
              <FaTags className="ml-6 text-2xl" />
              <span className="ml-2 text-base leading-[24px]">Wood</span>
            </div>
            <h1 className="text-[30px] font-medium leading-[45px] my-8">
              Going all-in with millennial design
            </h1>
            <p className="w-[80%] text-justify text-[15px] font-medium leading-[22.5px] text-[#9F9F9F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <button className="text-[16px] leading-[24px] underline underline-offset-8 my-8">
              Read More
            </button>
          </div>

          <div className="mt-4">
            <Image src={pic002} alt="" />
            <div className="flex items-center mt-4 text-[#9F9F9F]">
              <FaUser className="text-xl" />
              <span className="ml-2 text-base leading-[24px]">Admin</span>
              <MdDateRange className="ml-6 text-2xl" />
              <span className="ml-2 text-base leading-[24px]">
                14 August 2022
              </span>
              <FaTags className="ml-6 text-2xl" />
              <span className="ml-2 text-base leading-[24px]">Wood</span>
            </div>
            <h1 className="text-[30px] font-medium leading-[45px] my-8">
              Going all-in with millennial design
            </h1>
            <p className="w-[80%] text-justify text-[15px] font-medium leading-[22.5px] text-[#9F9F9F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <button className="text-[16px] leading-[24px] underline underline-offset-8 my-8">
              Read More
            </button>
          </div>
        </div>
      </div>
      <BlogList />
      <HomePage />
      <Footer />
    </div>
  );
}
