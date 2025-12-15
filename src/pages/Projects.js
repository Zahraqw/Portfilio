import NewsletterImage from "../images/NewsletterImage.png";
import RogfreeImage from "../images/RogfreeImage.png";
import TindogImage from "../images/TindogImage.png";
import WigglesImage from "../images/WigglesImage.png";
import ProjectBox from "../components/ProjectBox";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      className="min-h-screen w-full px-6 md:px-20 pt-40 pb-20 
                    bg-gradient-to-b from-white to-indigo-50"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-16"
      >
        My <span className="text-indigo-600">Projects</span>
      </motion.h1>

      {/* Projects Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                      gap-10 place-items-center"
      >
        <ProjectBox projectPhoto={WigglesImage} projectName="Wiggles" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="Newsletter" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="RogFree" />
        <ProjectBox projectPhoto={TindogImage} projectName="Tindog" />
      </div>
    </div>
  );
};

export default Projects;
