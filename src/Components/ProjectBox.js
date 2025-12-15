import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { motion } from "framer-motion";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    TindogDesc:
      "This website is a landing page of Tinder but for dogs. Made to understand Bootstrap and Github Pages hosting.",
    TindogGithub: "https://github.com/DevanshSahni/tindog",
    TindogWebsite: "https://devanshsahni.github.io/tindog/",

    RogFreeDesc:
      "A yoga posture recommendation site built during Hackodisha 2.0. Shows poses for specific health issues.",
    RogFreeGithub: "https://github.com/DevanshSahni/Rog-Free",
    RogFreeWebsite: "https://devanshsahni.github.io/Rog-Free/",

    NewsletterDesc:
      "A newsletter signup app using Mailchimp API, environment variables, and Vercel deployment.",
    NewsletterGithub: "",
    NewsletterWebsite: "https://newsletter-signup-teal.vercel.app/",

    WigglesDesc:
      "A pet management app where users can generate a pet ID, store vaccination records and share custom QR profiles.",
    WigglesGithub: "https://github.com/DevanshSahni/Wiggles",
    WigglesWebsite: "https://wiggles.vercel.app/",
  };

  const hideGithub = desc[projectName + "Github"] === "";

  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="w-full max-w-sm bg-white border border-indigo-300 
                 rounded-2xl p-6 flex flex-col text-center 
                 hover:shadow-xl transition"
    >
      {/* IMAGE */}
      <img
        src={projectPhoto}
        alt={projectName}
        className="w-full rounded-lg mb-6"
      />

      {/* NAME */}
      <h3 className="text-2xl font-bold text-indigo-700 mb-3">{projectName}</h3>

      {/* DESC */}
      <p className="text-gray-700 leading-relaxed mb-6">
        {desc[projectName + "Desc"]}
      </p>

      {/* BUTTONS */}
      <div className="flex items-center justify-center gap-4">
        {!hideGithub && (
          <a
            className="flex items-center gap-2 bg-indigo-700 text-white 
                       px-4 py-2 rounded-lg hover:bg-indigo-800 
                       transition text-lg"
            href={desc[projectName + "Github"]}
            target="_blank"
          >
            <FaGithub /> Github
          </a>
        )}

        <a
          className="flex items-center gap-2 bg-indigo-600 text-white 
                     px-4 py-2 rounded-lg hover:bg-indigo-700 
                     transition text-lg"
          href={desc[projectName + "Website"]}
          target="_blank"
        >
          <CgFileDocument /> Demo
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectBox;
