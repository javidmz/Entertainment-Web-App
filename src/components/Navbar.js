import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.svg";
import NavBookmarkIcon from "../icons/NavBookmarkIcon";
import NavHomeIcon from "../icons/NavHomeIcon";
import NavMoviesIcon from "../icons/NavMoviesIcon";
import NavTVSeriesIcon from "../icons/NavTVSeriesIcon";
import NavUserAvatar from "../assets/image-avatar.png";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [navPage, setNavPage] = useState("");
  const [mobileNav, setMobileNav] = useState(false);
  const location = useLocation().pathname;
  const mobileNavRef = useRef(null);

  useEffect(() => {
    const locArr = location.split("/");
    const lastPart = locArr[locArr.length - 1];
    setNavPage(lastPart);
  }, [location]);

  useEffect(() => {
    const handleMobileNav = (e) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(e.target)) {
        setMobileNav(false);
      }
    };

    if (mobileNav) {
      document.addEventListener("click", handleMobileNav);
      return () => document.removeEventListener("click", handleMobileNav);
    }
  }, [mobileNav]);

  return (
    <header className="fixed w-full top-0 lg:w-auto z-20">
      <div
        className="h-20 p-4 flex justify-between rounded-xl z-10 md:m-7 lg:flex-col lg:py-10 lg:h-auto lg:w-20 lg:gap-y-24 lg:items-center"
        id="nav-container"
      >
        <Link to="/" className="flex items-center hover:opacity-75">
          <img src={Logo} alt="Home" />
        </Link>
        <nav
          className="hidden w-36 sm:flex justify-between lg:w-full lg:flex-col lg:gap-y-12 lg:items-center"
          aria-label="main"
        >
          <Link
            to="/"
            className="flex items-center hover:opacity-70 hover:scale-110"
          >
            <NavHomeIcon clicked={navPage === "" ? "true" : ""} />
          </Link>
          <Link
            to="/movie"
            className="flex items-center hover:opacity-70 hover:scale-110"
          >
            <NavMoviesIcon clicked={navPage === "movies" ? "true" : ""} />
          </Link>
          <Link
            to="/tv"
            className="flex items-center hover:opacity-70 hover:scale-110"
          >
            <NavTVSeriesIcon clicked={navPage === "tv-series" ? "true" : ""} />
          </Link>
          <Link
            to="/bookmark"
            className="flex items-center hover:opacity-70 hover:scale-110"
          >
            <NavBookmarkIcon clicked={navPage === "bookmarks" ? "true" : ""} />
          </Link>
        </nav>
        <Link to="/" className="flex items-center hover:opacity-75">
          <img src={NavUserAvatar} alt="Avatar" className="w-8" />
        </Link>
        <div
          className={`${
            mobileNav ? "toggle-btn" : ""
          } w-6 h-auto relative sm:hidden`}
        >
          <div
            className="w-6 h-0.5 absolute top-5 bg-slate-50 transition-all duration-500 before:absolute before:w-6 before:h-0.5 before:-translate-y-2 before:bg-slate-50 before:transition-all before:duration-500 before:content-[''] after:content-[''] after:absolute after:w-6 after:h-0.5 after:translate-y-2 after:bg-slate-50 after:transition-all after:duration-500 sm:hidden"
            onClick={() => setMobileNav(!mobileNav)}
            ref={mobileNavRef}
          ></div>
        </div>
      </div>
      <nav
        className={`min-h-screen py-8 space-y-3 ${
          mobileNav ? "flex" : "hidden"
        } flex-col items-center animate-open-mobile-menu origin-top`}
        id="mobile-menu"
      >
        <Link to="/" className="w-full text-center text-2xl">
          HOME
        </Link>
        <Link to="/movie" className="w-full text-center text-2xl">
          MOVIES
        </Link>
        <Link to="/tv" className="w-full text-center text-2xl">
          TV SERIES
        </Link>
        <Link to="/bookmark" className="w-full text-center text-2xl">
          BOOKMARK
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
