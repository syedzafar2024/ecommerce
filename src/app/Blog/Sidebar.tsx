// File: components/Sidebar.tsx
import React from "react";
// import Image from "next/image";
// import pic004 from "../../../public/img/Rectangle 14.png"
// import pic005 from "../../../public/img/Rectangl 15.png"
// import pic006 from "../../../public/img/Rectangle 13.png"
// import pic007 from "../../../public/img/Rectangle 14.png"
// import pic008 from "../../../public/img/Rectangle 15.png"

interface SidebarProps {
  categories: string[];
  recentPosts: { title: string; link: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ }) => {
  return (
    <div className="sidebar">
      <div className="right side">
        <div className=" flex h-12">
          <input className="border border-gray-500 px-10 border-r-0 rounded-l-[10px]"></input>
        </div>
      </div>
      <p className="text-[24px] font-medium leading-[36px] ml-10 my-10">
        Categories
      </p>
      <div className="flex gap-40 ml-10">
        <div className=" space-y-10">
          <p className="text-base leading-[24px] text-[#9f9f9f]">Crafts</p>
          <p className="text-base leading-[24px] text-[#9f9f9f]">Designs</p>
          <p className="text-base leading-[24px] text-[#9f9f9f]">Homemade</p>
          <p className="text-base leading-[24px] text-[#9f9f9f]">Interior</p>
          <p className="text-base leading-[24px] text-[#9f9f9f]">Wood</p>
        </div>
        <div className="space-y-10">
          <p className="text-base leading-[24px] text-[#9f9f9f]">2</p>
          <p className="text-base leading-[24px] text-[#9f9f9f]">8</p>
          <p className="text-base leading-[24px] text-[#9f9f9f]">7</p>
          <p className="text-base leading-[24px] text-[#9f9f9f]">1</p>
          <p className="text-base leading-[24px] text-[#9f9f9f]">6</p>
        </div>
      </div>
      <p className="ml-10 mt-36 text-[24px] font-medium leading-[36px] ">
        Recent Posts
      </p>

      <div className="ml-10 space-y-10 mt-10">
        <div className="flex gap-2 items-center">
          {/* <Image src={pic004} alt=""/> */}
          <div className="">
            <p className="text-[14px] leading-[21px]">Going all-in with </p>
            <p className="text-[14px] leading-[21px]">millennial design</p>
            <p className="text-[12px] leading-[18px] text-[#9f9f9f] mt-2">
              03 Aug 2022
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          {/* <Image src={pic005} alt=""/> */}
          <div className="">
            <p className="text-[14px] leading-[21px]">Exploring new ways </p>
            <p className="text-[14px] leading-[21px]">of decorating</p>
            <p className="text-[12px] leading-[18px] text-[#9f9f9f] mt-2">
              03 Aug 2022
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          {/* <Image src={pic006} alt=""/> */}
          <div className="">
            <p className="text-[14px] leading-[21px]">Handmade pieces</p>
            <p className="text-[14px] leading-[21px]">that took time to make</p>
            <p className="text-[12px] leading-[18px] text-[#9f9f9f] mt-2">
              03 Aug 2022
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          {/* <Image src={pic007} alt=""/> */}
          <div className="">
            <p className="text-[14px] leading-[21px]">Modern home in </p>
            <p className="text-[14px] leading-[21px]">Milan</p>
            <p className="text-[12px] leading-[18px] text-[#9f9f9f] mt-2">
              03 Aug 2022
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          {/* <Image src={pic008} alt=""/> */}
          <div className="">
            <p className="text-[14px] leading-[21px]">Colorful office</p>
            <p className="text-[14px] leading-[21px]">redesign</p>
            <p className="text-[12px] leading-[18px] text-[#9f9f9f] mt-2">
              03 Aug 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
