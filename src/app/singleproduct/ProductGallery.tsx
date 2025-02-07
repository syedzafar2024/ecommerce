"use client"
import React, { useState } from "react";

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex">
      {/* Thumbnails */}
      <div className="flex flex-col gap-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={images[index]}
            alt={`Thumbnail ${index + 1}`}
            className={`w-16 h-16 border ${selectedImage === image ? "border-black" : "border-gray-200"} cursor-pointer`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      {/* Main Image */}
      <div className="ml-4">
        <img src={selectedImage} alt="Selected" className="w-96 h-96 object-cover" />
      </div>
    </div>
  );
};

export default ProductGallery;
