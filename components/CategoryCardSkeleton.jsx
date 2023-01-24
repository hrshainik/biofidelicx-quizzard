import React from "react";

const CategoryCardSkeleton = () => {
  return (
    <div
      role="status"
      className="p-3 h-32 flex flex-col justify-end bg-gray-300 border border-gray-200 shadow animate-pulse dark:border-gray-700"
    >
      <div className="h-2 bg-gray-200 dark:bg-gray-700 mb-2.5 w-1/3"></div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 w-3/4"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default CategoryCardSkeleton;
