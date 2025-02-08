import React from "react";

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex justify-center space-x-2 mt-4">
      <button
        className="px-3 py-1 bg-indigo-500 text-white rounded cursor-pointer"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
      {[...Array(totalPages).keys()].map((page) => (
        <button
          key={page}
          className={`px-3 py-1 cursor-pointer ${
            currentPage === page + 1
              ? "bg-indigo-700 text-white"
              : "bg-gray-200 text-black"
          } rounded`}
          onClick={() => onPageChange(page + 1)}
        >
          {page + 1}
        </button>
      ))}
      <button
        className="px-3 py-1 bg-indigo-500 text-white rounded cursor-pointer"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
