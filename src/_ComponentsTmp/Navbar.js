import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { motion } from "framer-motion";
import STRINGS from "constants/string.js";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
     "backdrop-blur-xl bg-gradient-to-b from-indigo-50 to-white  shadow-md" border-b-2 border-indigo-300/70
  `}
    >
      <div className="flex items-center justify-between px-6 md:px-16 py-4 md:py-5">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-extrabold tracking-wide text-indigo-700 cursor-pointer"
        >
          <Link to="/">{STRINGS.MAIN_NAME}</Link>
        </motion.h1>

        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-1 w-7 bg-indigo-700 rounded transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-1 w-7 bg-indigo-700 rounded transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-1 w-7 bg-indigo-700 rounded transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>

        <ul className="hidden md:flex items-center gap-10 text-lg font-semibold">
          <NavItem
            to="/"
            icon={<AiOutlineHome />}
            text="Home"
            active={location.pathname === "/"}
          />
          <NavItem
            to="/About"
            icon={<BsPerson />}
            text="About"
            active={location.pathname === "/About"}
          />
          <NavItem
            to="/Projects"
            icon={<BsCodeSlash />}
            text="Projects"
            active={location.pathname === "/Project"}
          />
          <NavItem
            to="/Resume"
            icon={<CgFileDocument />}
            text="Resume"
            active={location.pathname === "/Resume"}
          />
        </ul>
      </div>

      <motion.ul
        initial={{ opacity: 0, y: -15 }}
        animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
        transition={{ duration: 0.25 }}
        className={`md:hidden bg-white/80 backdrop-blur-xl shadow-md border-t border-indigo-200
          flex flex-col px-6 py-4 gap-4 text-lg font-medium
          ${open ? "block" : "hidden"}
        `}
      >
        <NavItemMobile to="/" icon={<AiOutlineHome />} text="Home" />
        <NavItemMobile to="/About" icon={<BsPerson />} text="About" />
        <NavItemMobile to="/Project" icon={<BsCodeSlash />} text="Projects" />
        <NavItemMobile to="/Resume" icon={<CgFileDocument />} text="Resume" />
      </motion.ul>
    </nav>
  );
};

const NavItem = ({ to, icon, text, active }) => (
  <li>
    <Link
      to={to}
      className={`group flex items-center gap-2 transition relative pb-1
        ${active ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"}
      `}
    >
      {icon} {text}
      <span
        className={`absolute left-0 bottom-0 w-full h-[2px] rounded bg-indigo-600 transition-all 
          ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
        `}
      />
    </Link>
  </li>
);

const NavItemMobile = ({ to, icon, text }) => (
  <li>
    <Link
      to={to}
      className="flex items-center gap-3 py-2 text-gray-700 hover:text-indigo-700 transition"
    >
      {icon} {text}
    </Link>
  </li>
);

export default Nav;
