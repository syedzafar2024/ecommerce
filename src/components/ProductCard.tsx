import React from "react";

interface ProductCardProps {
  image: string; // Product image URL
  title: string; // Product title
  price: string; // Product price
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
  return (
    <div className="">
    <div className="bg-mywite border border-green-500 rounded-2xl p-4 flex flex-col items-center">
      <img src={image} alt={title} className="w-[287px] h-[287px] object-contain mb-4" />
      </div>
      <h2 className="text-md font-semibold text-black">{title}</h2>
      <p className="text-md font-bold text-gray-800 mt-2">{price}</p>
    
    </div>
  );
};

export default ProductCard;
