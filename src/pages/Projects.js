import ProjectBox from "components/ProjectBox";
import Images from "assets/images";
import { motion } from "framer-motion";
import STRINGS from "constants/string.js";

const Projects = () => {
  return (
    <div
      className="min-h-screen w-full px-6 md:px-20 pt-40 pb-20 
                    bg-gradient-to-b from-white to-indigo-50"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-16"
      >
        {STRINGS.MY} <span className="text-indigo-600">{STRINGS.PROJECTS}</span>
      </motion.h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                      gap-10 place-items-center"
      >
        <ProjectBox
          projectPhoto={Images.Product_list}
          projectName="ProductList"
        />
        <ProjectBox projectPhoto={Images.sign_in} projectName="SignIn" />
        <ProjectBox projectPhoto={Images.sign_up} projectName="SignUp" />
        <ProjectBox
          projectPhoto={Images.qurany_app}
          projectName="QuranyMobileApp"
        />
      </div>
    </div>
  );
};

export default Projects;
