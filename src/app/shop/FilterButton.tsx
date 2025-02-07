// File: components/FilterButton.tsx
import React from "react";
import { FaFilter } from "react-icons/fa";

const FilterButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button className="flex items-center gap-2 px-2.5 py-1.5 bg-white border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer"  onClick={onClick}>
      <FaFilter /> Filter
    </button>
  );
};

export default FilterButton;
