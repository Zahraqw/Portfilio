import { Skills } from "components";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="min-h-screen w-full px-6 md:px-20 
      pt-40 md:pt-48 pb-20 
      bg-gradient-to-b from-indigo-50 to-white 
      flex flex-col gap-24"
    >
      {/* === TOP SECTION === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-between gap-12"
      >
        {/* TEXT */}
        <div className="md:w-1/2 text-gray-700 text-lg md:text-xl leading-relaxed">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get to <span className="text-indigo-600">know</span> me!
          </h1>

          <p className="mb-4">
            Hi, my name is <b>Devansh Sahni</b> from New Delhi, India. I'm a{" "}
            <b>MERN stack developer</b> and currently completing my
            <b> BTech in CSE</b>.
          </p>

          <p className="mb-4">
            I previously worked as a <b>Software Developer Intern</b> at GoalFi,
            where I built real-world fintech solutions.
          </p>

          <p className="mb-4">
            I’m <b>open to collaborations</b> or exciting job opportunities.
          </p>

          <p>
            Outside tech, I enjoy photography. Check out my work on{" "}
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="text-indigo-600 underline"
            >
              Instagram
            </a>
            .
          </p>
        </div>

        {/* ANIMATION */}
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-64 md:w-80"
          >
            <Lottie animationData={Coder} loop />
          </motion.div>
        </Tilt>
      </motion.div>

      {/* === SKILLS === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Professional <span className="text-indigo-600">Skillset</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 w-full">
          <Skills skill="React" />
          <Skills skill="Node" />
          <Skills skill="Express" />
          <Skills skill="MongoDb" />
          <Skills skill="Git" />
          <Skills skill="Github" />
          <Skills skill="Javascript" />
          <Skills skill="C++" />
          <Skills skill="Postman" />
          <Skills skill="Figma" />
          <Skills skill="Vercel" />
          <Skills skill="Npm" />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
