// File: components/Toolbar.tsx
"use client"
import React, { useState } from "react";
import FilterButton from "./FilterButton";
import ViewSwitcher from "./ViewSwitcher";
import ResultsInfo from "./ResultsInfo";
import PageSettings from "./PageSettings";

const Toolbar: React.FC = () => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [itemsPerPage, setItemsPerPage] = useState<number>(16);
  const [sortBy, setSortBy] = useState<string>("default");
  const [currentRange] = useState<string>("1–16");
  const [totalResults] = useState<number>(32); // Example total results

  const handleFilterClick = () => {
    console.log("Filter button clicked");
    // Open filter modal or sidebar
  };

  return (
    <div className="flex items-center justify-between gap-4 p-2.5 bg-gray-50 rounded-md text-sm">
      <FilterButton onClick={handleFilterClick} />
      <ViewSwitcher view={view} onViewChange={setView} />
      <ResultsInfo currentRange={currentRange} totalResults={totalResults} />
      <PageSettings
        itemsPerPage={itemsPerPage}
        sortBy={sortBy}
        onItemsPerPageChange={setItemsPerPage}
        onSortByChange={setSortBy}
      />
    </div>
  );
};

export default Toolbar;
