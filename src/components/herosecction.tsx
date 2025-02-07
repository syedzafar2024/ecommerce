import React from "react";

const HeroSection = () => {
  return (

    <section className="bg-mybatch w-[1440px] flex items-center px-16 justify-center">
      {/* Left Section */}
      <div className="">
        <h1 className="text-4xl font-bold text-gray-800 leading-tight">
          Rocket single <br /> seater
        </h1>
        <button className="text-sm font-semibold text-gray-800 border-b-2 border-gray-800 w-max hover:text-gray-500">
          Shop Now
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center">
        <img 
          src="/img/rocket.png" 
          alt="rocket"
          className="w-[900px] h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
