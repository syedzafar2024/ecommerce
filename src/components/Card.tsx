import React from "react";

interface CardProps {
  image: string; // URL for the image
  title: string; // Title for the card
}

const Card: React.FC<CardProps> = ({ image, title }) => {
  return (
       <div className="border border-green-500 rounded-md p-4 flex flex-col items-center">
      <img src={image} alt={title} className="w-[605px] h-[562px] object-contain mb-4" />
      <h2 className="text-lg font-bold text-black ">{title}</h2>
      <a href="#" className="text-sm text-gray-600 underline mt-2 hover:text-black">
        View More
      </a>
    </div>
   
  );
};

export default Card;
