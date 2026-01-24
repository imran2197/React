import React from "react";
import { useDispatch } from "react-redux";
import {
  changePageToNext,
  changePageToPrev,
} from "../features/popularmovies/popularMoviesSlice";

const Pagination = ({ pageNo }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center gap-5 mt-10">
      {/* Previous */}
      <button
        className="
      flex items-center gap-2
      px-5 py-2.5 rounded-full
      bg-white text-gray-700
      shadow-sm border border-gray-200
      hover:shadow-md hover:bg-gray-50
      active:scale-95
      disabled:opacity-40 disabled:cursor-not-allowed
      transition-all
    "
        onClick={() => dispatch(changePageToPrev())}
      >
        ←<span className="hidden sm:block">Previous</span>
      </button>

      {/* Page number */}
      <div className="px-5 py-2 rounded-full bg-black text-white font-medium shadow">
        {pageNo}
      </div>

      {/* Next */}
      <button
        className="
      flex items-center gap-2
      px-5 py-2.5 rounded-full
      bg-black text-white
      shadow-md
      hover:bg-gray-900 hover:shadow-lg
      active:scale-95
      disabled:opacity-40 disabled:cursor-not-allowed
      transition-all
    "
        onClick={() => dispatch(changePageToNext())}
      >
        <span className="hidden sm:block">Next</span>→
      </button>
    </div>
  );
};

export default Pagination;
