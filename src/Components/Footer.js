import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";
import STRINGS from "constants/string.js";

const Footer = () => {
  return (
    <footer
      className="w-full py-6 mt-auto flex flex-col md:flex-row items-center justify-between
                   px-6 md:px-20 bg-gradient-to-b from-indigo-50 to-white border-t border-indigo-100"
    >
      <h4 className="text-gray-700 text-lg font-medium mb-4 md:mb-0">
        {STRINGS.DEVELOPED_BY}{" "}
        <span className="text-indigo-900 transition-colors ml-2  font-smibold ">
          {STRINGS.FULL_NAME}
        </span>
      </h4>

      <div className="flex items-center gap-6 text-2xl text-indigo-700">
        <a
          href="https://github.com/Zahraqw"
          target="_blank"
          className="hover:text-indigo-900 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/zahraa-qawariq-675bba212/"
          target="_blank"
          className="hover:text-indigo-900 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:zahradeeb98@gmail.com"
          target="_blank"
          className="hover:text-indigo-900 transition-colors"
        >
          <GrMail />
        </a>
        {/* <a
          href="https://leetcode.com/sahni1403/"
          target="_blank"
          className="hover:text-indigo-900 transition-colors"
        >
          <SiLeetcode />
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
