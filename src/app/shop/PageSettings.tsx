// File: components/PageSettings.tsx
import React from "react";

interface PageSettingsProps {
  itemsPerPage: number;
  sortBy: string;
  onItemsPerPageChange: (value: number) => void;
  onSortByChange: (value: string) => void;
}

const PageSettings: React.FC<PageSettingsProps> = ({
  itemsPerPage,
  sortBy,
  onItemsPerPageChange,
  onSortByChange,
}) => {
  return (
    <div className="page-settings flex items-center gap-4">
      <div className="items-per-page">
        Show
        <input className="px-2 py-1 border border-gray-300 rounded-md" placeholder="Search"
          type="number"
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
        />
      </div>
      <div className="sort-by">
        Sort by
        <select className="px-2 py-1 border border-gray-300 rounded-md" value={sortBy} onChange={(e) => onSortByChange(e.target.value)}>
          <option value="default">Default</option>
          <option value="price">Price</option>
          <option value="popularity">Popularity</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
};

export default PageSettings;
