import React from "react";
import { motion } from "framer-motion";
import { CgCPlusPlus } from "react-icons/cg";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiVercel } from "react-icons/si";

const Skills = ({ skill, color = "text-indigo-700" }) => {
  const icon = {
    "C++": <CgCPlusPlus />,
    Postman: <SiPostman />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Figma: <FaFigma />,
    Bootstrap: <FaBootstrap />,
    Vercel: <SiVercel />,
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
        flex items-center justify-center 
        w-32 h-32 md:w-36 md:h-36 
        border border-indigo-500 rounded-xl 
        bg-white/80 backdrop-blur-lg
        shadow-sm
        transition-all duration-300
      "
    >
      <div className={`text-4xl md:text-5xl ${color}`}>{icon[skill]}</div>
    </motion.div>
  );
};

export default Skills;
