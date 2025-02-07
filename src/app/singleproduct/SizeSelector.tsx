import React from "react";

interface SizeSelectorProps {
  sizes: string[];
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes }) => {
  return (
    <div className="mt-4">
      <h4 className="font-semibold">Size</h4>
      <div className="flex gap-2 mt-2">
        {sizes.map((size:any, index:number) => (
          <button
            key={index}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
