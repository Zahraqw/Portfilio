import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiBitbucket,
  SiAxios,
  SiExpress,
  SiPostman,
} from "react-icons/si";

const Skills = ({ skill, color = "text-indigo-700" }) => {
  const icon = {
    React: <FaReact />,
    "Next.js": <SiNextdotjs />,
    Redux: <SiRedux />,
    JavaScript: <FaReact />,
    HTML: <FaHtml5 />,
    "CSS/SASS": <FaCss3Alt />,
    Bootstrap: <FaBootstrap />,
    Tailwind: <SiTailwindcss />,
    "Material UI": <FaReact />,
    Git: <FaGitAlt />,
    GitHub: <FaGithub />,
    Bitbuket: <SiBitbucket />,
    Figma: <FaFigma />,
    Axios: <SiAxios />,
    "RESTful APIs": <SiExpress />,
    Postman: <SiPostman />,
  };

  return (
    <motion.div
      title={skill}
      whileHover={{
        scale: 1.12,
        rotate: 2,
        boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
      }}
      transition={{ type: "spring", stiffness: 240, damping: 15 }}
      className="
        flex flex-col items-center justify-center 
        w-28 h-36 sm:w-32 sm:h-40 md:w-36 md:h-44
        border border-indigo-500 rounded-xl 
        bg-white/80 backdrop-blur-lg
        shadow-sm
        transition-all duration-300
        hover:bg-indigo-50
        text-indigo-700
      "
    >
      <div className="text-4xl md:text-5xl mb-2">{icon[skill]}</div>
      <div className="text-sm md:text-base font-medium text-gray-700 text-center">
        {skill}
      </div>
    </motion.div>
  );
};

export default Skills;
