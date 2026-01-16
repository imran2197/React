import React from "react";

function Pagination({ pageNo, totalPages, handlePrevious, handleNext }) {
  console.log(totalPages);
  return (
    <div className="flex justify-center items-center gap-4 my-6">
      <button
        className="px-4 py-2 bg-gray-800 text-white rounded cursor-pointer disabled:opacity-50"
        disabled={pageNo == 1}
        onClick={handlePrevious}
      >
        Prev
      </button>
      <span className="font-semibold">
        Page {pageNo} of {Math.min(totalPages, 500)}
      </span>
      <button
        className="px-4 py-2 bg-gray-800 text-white rounded cursor-pointer disabled:opacity-50"
        disabled={pageNo == Math.min(totalPages, 500)}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
