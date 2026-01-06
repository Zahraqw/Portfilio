import { Skills } from "components/index.js";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import PersonalAvatar from "../assets/images/myAvatar.jpg";
import STRINGS from "constants/string.js";

const About = () => {
  return (
    <div
      className="min-h-screen w-full px-6 md:px-20 
      pt-40 md:pt-48 pb-20 
      bg-gradient-to-b from-indigo-50 to-white 
      flex flex-col gap-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-between gap-12"
      >
        <div className="md:w-1/2 text-gray-700 text-lg md:text-xl leading-relaxed">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {STRINGS.GET_TO}{" "}
            <span className="text-indigo-600">{STRINGS.KNOW}</span> {STRINGS.ME}
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: STRINGS.ABOUT_ME }}
            className="mb-4 mt-4"
          />
          <div
            dangerouslySetInnerHTML={{ __html: STRINGS.SKILLES_HEADING }}
            className="mb-4 mt-4"
          />
          <div
            dangerouslySetInnerHTML={{ __html: STRINGS.SKILLES_BODY }}
            className="mb-4 mt-4"
          />
        </div>

        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-64 md:w-80 rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src={PersonalAvatar}
              alt="Zahraa Qawariq"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </Tilt>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          {STRINGS.PRFFISIONAL}
          <span className="text-indigo-600"> {STRINGS.SKILLSET}</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 w-full">
          <Skills skill="React" />
          <Skills skill="Next.js" />
          <Skills skill="Redux" />
          <Skills skill="JavaScript" />
          <Skills skill="HTML" />
          <Skills skill="CSS/SASS" />
          <Skills skill="Bootstrap" />
          <Skills skill="Tailwind" />
          <Skills skill="Material UI" />
          <Skills skill="Git" />
          <Skills skill="GitHub" />
          <Skills skill="Bitbuket" />
          <Skills skill="Figma" />
          <Skills skill="Axios" />
          <Skills skill="RESTful APIs" />
          <Skills skill="Postman" />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
