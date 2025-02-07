import React from "react";
import ProductGallery from "../app/singleproduct/ProductGallery";
import ProductDetails from "../app/singleproduct/ProductDetails";

const ProductPage: React.FC = () => {
  const images = ["/img/Group 94.png", "/img/Group 98.png", "/img/Group 97.png","/img/Group 96.png"];
  const colors = ["#000000", "#FFD700", "#800080"];
  const sizes = ["L", "XL", "XS"];

  return (
    <div className="flex gap-8 p-8">
      {/* Left: Product Gallery */}
      <ProductGallery images={images} />
      
      {/* Right: Product Details */}
      <ProductDetails
        title="Asgaard Sofa"
        price={250000}
        description="Setting the bar as one of the loudest speakers in its class, 
        the Kilburn is a compact, stout-hearted hero with a well-balanced audio 
        which boasts a clear midrange and extended highs for a sound."
        rating={4.5}
        reviews={5}
        sizes={["L", "XL", "XXL"]}
        colors={["Red", "Blue", "Green"]}
      />
    </div>
  );
};

export default ProductPage;
