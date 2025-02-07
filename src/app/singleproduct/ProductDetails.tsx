import React from "react";
import SizeSelector from "./SizeSelector";
import ColorSelector from "./ColorSelector";
import QuantitySelector from "./QuantitySelector";
import SocialShare from "./SocialShare";

interface ProductDetailsProps {
  title: string;
  price: number;
  description: string;
  rating: number;
  reviews: number;
  sizes: string[ ];
  colors: string[ ];
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  title,
  price,
  description,
  rating,
  reviews,
  sizes,
  colors,
}) => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="text-xl text-gray-600 mt-2">Rs. {price.toLocaleString()}</p>

      {/* Rating */}
      <div className="flex items-center mt-2">
        <div className="flex text-yellow-400">
          {"★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating))}
        </div>
        <span className="ml-2 text-gray-500">({reviews} Customer Reviews)</span>
      </div>

      {/* Description */}
      <p className="mt-4 text-gray-700">{description}</p>

      {/* Size Selector */}
      <SizeSelector sizes={sizes} />

      {/* Color Selector */}
      <ColorSelector colors={colors} />

      {/* Quantity and Add to Cart */}
      <div className="flex items-center mt-4 gap-4">
        <QuantitySelector />
        <button className="px-6 py-2 bg-black text-white rounded">Add To Cart</button>
      </div>

      {/* Additional Info */}
      <div className="mt-6 text-gray-500">
        <p><strong>SKU:</strong> SS001</p>
        <p><strong>Category:</strong> Sofas</p>
        <p><strong>Tags:</strong> Sofa, Chair, Home, Shop</p>
      </div>

      {/* Social Share */}
      <SocialShare />
    </div>
  );
};

export default ProductDetails
