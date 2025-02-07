import React from "react";

interface ColorSelectorProps {
  colors: string[];
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ colors }) => {
  return (
    <div className="mt-4">
      <h4 className="font-semibold">Color</h4>
      <div className="flex gap-2 mt-2">
        {colors.map((color, index) => (
          <button
            key={index}
            style={{ backgroundColor: color }}
            className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer"
          > </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
