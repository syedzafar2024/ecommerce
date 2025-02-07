import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid: React.FC = () => {
  const products = [
    { image: "/img/Trenton modular sofa_3.png", title: "Trenton modular sofa_3", price: "Rs. 25,000.00" },
    { image: "/img/diningTable.png", title: "Granite dining table with dining chair", price: "Rs. 25,000.00" },
    { image: "/img/table and stool.png", title: "Outdoor bar table and stool", price: "Rs. 25,000.00" },
    { image: "/img/Plain console.png", title: "Plain console with teak mirror", price: "Rs. 25,000.00" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-8 py-6">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
