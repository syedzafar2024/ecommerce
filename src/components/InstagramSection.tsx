import React from "react";
import Button from "./Button";

const InstagramSection: React.FC = () => {
  return (
    <div
      className="relative bg-[#FAF4F4] w-[1440px] h-[450px] text-center py-32"
      style={{
        backgroundImage: `url('/img/instagram-bg.png')`, // Replace with the actual background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for contrast */}
     

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-4">Our Instagram</h2>
        <p className="text-gray-600 mb-6">Follow our store on Instagram</p>
        <Button text="Follow Us" />
      </div>
    </div>
  );
};

export default InstagramSection;
