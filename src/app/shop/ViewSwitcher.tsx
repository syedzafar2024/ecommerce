// File: components/ViewSwitcher.tsx
import React from "react";
import { FaTh, FaBars } from "react-icons/fa";

interface ViewSwitcherProps {
  view: "grid" | "list";
  onViewChange: (view: "grid" | "list") => void;
}

const ViewSwitcher: React.FC<ViewSwitcherProps> = ({ view, onViewChange }) => {
  return (
    <div className="view-switcher flex gap-2">
      <button
        className={`switcher-button ${view === "grid" ? "active" : "px-2 py-1 bg-white border border-gray-300 rounded-md cursor-pointer"}`}
        onClick={() => onViewChange("grid")}
      >
        <FaTh />
      </button>
      <button
        className={`switcher-button ${view === "list" ? "active" : "px-2 py-1 bg-black text-white border border-gray-300 rounded-md cursor-pointer"}`}
        onClick={() => onViewChange("list")}
      >
        <FaBars />
      </button>
    </div>
  );
};

export default ViewSwitcher;
