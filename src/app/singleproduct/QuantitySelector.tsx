"use client"
import React, { useState } from "react";
const QuantitySelector: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center border rounded">
      <button
        className="px-3 py-1 border-r"
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
      >
        -
      </button>
      {/* <input
        type="text"
        value={quantity}
        readOnly
        className="w-12 text-center border-none"
      /> */}
      <button
        className="px-3 py-1 border-l"
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
