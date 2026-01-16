import React, { useState } from "react";
import moviesLogo from "../assets/moviesLogo.png";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);

  const navData = [
    { label: "Home", link: "/" },
    { label: "Popular Movies", link: "/popularmovies" },
    { label: "Watch List", link: "/watchlist" },
  ];

  return (
    <nav className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white shadow-lg">
      <div className="flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-bold yellowColor"
        >
          <img className="h-11 w-11" src={moviesLogo} alt="logo" />
          MovieTime
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl yellowColor focus:outline-none"
          aria-label="Toggle menu"
        >
          <i className={`fa ${open ? "fa-times" : "fa-bars"}`} />
        </button>
      </div>
      {/* Desktop Center Navigation */}
      <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <ul className="flex gap-10 text-lg font-medium">
          {navData.map((item) => (
            <li key={item.label} className="relative group">
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `px-2 py-2 transition ${
                    isActive ? "yellowColor" : "text-gray-300"
                  }`
                }
              >
                {item.label}
              </NavLink>
              <span className="absolute left-0 right-0 h-[2px] w-0 bg-[#ffa300] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile View */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } bg-[#0f0f0f]`}
      >
        <ul>
          {navData.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.link}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-6 py-4 text-lg transition ${
                    isActive
                      ? "yellowColor bg-yellow-500/10 border-l-4 border-[#ffa300]"
                      : "text-gray-300 hover:bg-white/5"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
