// File: components/FeatureCard.tsx

import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="feature-card w-full max-w-[376px]">
      <h3 className="feature-title text-[24px] sm:text-[32px] leading-[36px] sm:leading-[48px]">{title}</h3>
      <p className="feature-description text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px]">{description}</p>
    </div>
  );
};

export default FeatureCard;
