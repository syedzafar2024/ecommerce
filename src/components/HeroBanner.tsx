import React from "react";
import Button from "./Button";

const HeroBanner: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-mypink w-[1440px] h-[639px] p-8 md:p-16">
      {/* Left Section - Image */}
      <div className="flex-1">
        <img
          src="/img/Asgaard sofa 1.png"
          alt="Asgaard Sofa"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Right Section - Text */}
      <div className="flex-1 flex flex-col items-center justify-center text-left md:pl-12">
        <h4 className="text-sm font-medium text-gray-600">New Arrivals</h4>
        <h1 className="text-3xl md:text-4xl font-bold text-black mt-2 py-4">
          Asgaard sofa
        </h1>
        <Button text="Order Now " />
      </div>
    </div>
  );
};

export default HeroBanner;
