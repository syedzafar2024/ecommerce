// File: pages/index.tsx

import FeaturesSection from "@/app/myaccount/FeaturesSection";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="bg-mypurpel flex w-{1440px} h-72 text-center">
      <FeaturesSection />
    </div>
  );
};

export default HomePage;
