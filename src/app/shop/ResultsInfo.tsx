// File: components/ResultsInfo.tsx
import React from "react";

interface ResultsInfoProps {
  currentRange: string;
  totalResults: number;
}

const ResultsInfo: React.FC<ResultsInfoProps> = ({ currentRange, totalResults }) => {
  return (
    <div className="results-info text-sm text-gray-500">
      Showing {currentRange} of {totalResults} results
    </div>
  );
};

export default ResultsInfo;
