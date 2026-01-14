import React, { useState, useRef, useEffect } from "react";
import moviesLogo from "../assets/moviesLogo.png";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const navRef = useRef([]);
  const location = useLocation();

  const navData = [
    { label: "Movies", link: "/" },
    { label: "Watch List", link: "/watchlist" },
  ];

  useEffect(() => {
    const activeIndex = navData.findIndex(
      (item) => item.link === location.pathname
    );

    if (navRef.current[activeIndex]) {
      const el = navRef.current[activeIndex];
      setUnderlineStyle({
        width: el.offsetWidth,
        transform: `translateX(${el.offsetLeft}px)`,
      });
    }
  }, [location.pathname]);

  return (
    <nav className="relative bg-black text-white">
      <div className="flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-bold yellowColor"
        >
          <img className="w-12" src={moviesLogo} alt="logo" />
          MovieTime
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden yellowColor text-2xl"
        >
          {open ? (
            <i className="fa fa-times" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-bars" aria-hidden="true"></i>
          )}
        </button>
      </div>

      {/* Desktop Center Links */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <ul className="relative flex gap-8 text-xl font-medium">
          {navData.map((data, index) => (
            <li key={data.label}>
              <Link
                to={data.link}
                ref={(el) => (navRef.current[index] = el)}
                className="px-2 py-2 hover:text-yellow-400 transition"
              >
                {data.label}
              </Link>
            </li>
          ))}

          {/* Sliding underline */}
          <span
            className="absolute -bottom-1 h-1 bg-[#ffa300] transition-all duration-300 ease-out"
            style={underlineStyle}
          />
        </ul>
      </div>

      {/* Mobile Menu (no underline animation needed) */}
      {open && (
        <ul className="md:hidden mt-4 flex flex-col gap-2 bg-[#111]">
          {navData.map((data) => (
            <li key={data.label}>
              <Link
                to={data.link}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 ${
                  location.pathname === data.link
                    ? "text-yellow-400 border-l-4 border-[#ffa300] bg-yellow-500/10"
                    : ""
                }`}
              >
                {data.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
