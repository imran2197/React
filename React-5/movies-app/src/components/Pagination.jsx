import React from "react";

function Pagination({ pageNo, handlePrevious, handleNext }) {
  return (
    <div className="flex justify-center items-center gap-4 m-5">
      <button
        onClick={handlePrevious}
        disabled={pageNo === 1}
        className={`flex items-center justify-center w-10 h-10 rounded-full border
      ${
        pageNo === 1
          ? "border-gray-600 text-gray-600 cursor-not-allowed"
          : "border-[#ffa300] text-[#ffa300] hover:bg-[#ffa300] hover:text-black cursor-pointer"
      }
      transition-all duration-200`}
      >
        <i class="fa fa-arrow-left" aria-hidden="true"></i>
      </button>

      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ffa300] text-black font-semibold">
        {pageNo}
      </div>
      <button
        onClick={handleNext}
        className="flex items-center justify-center w-10 h-10 rounded-full border border-[#ffa300]
      text-[#ffa300] hover:bg-[#ffa300] hover:text-black
      transition-all duration-200 cursor-pointer"
      >
        <i class="fa fa-arrow-right" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default Pagination;
