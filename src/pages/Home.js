import { motion } from "framer-motion";
import { Typed } from "components";
import PhotoAvatar from "components/PhotoAvatar";
import STRINGS from "constants/string.js";

const Home = () => {
  return (
    <section className="relative min-h-screen w-full px-6 md:px-20 pt-32 pb-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#c7d2fe_1px,transparent_1px)] [background-size:26px_26px] opacity-30" />

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-20">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full">
            {STRINGS.DESCRIPTION}{" "}
          </span>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            {STRINGS.WELCOME}{" "}
            <span className="text-indigo-600">{STRINGS.FULL_NAME}</span>
          </h1>

          <div className="text-xl md:text-2xl font-medium text-gray-600 mb-6">
            <Typed />
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: STRINGS.SHORT_DESCRIPTION }}
            className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-xl mb-10 mx-auto md:mx-0"
          />

          <div
            dangerouslySetInnerHTML={{ __html: STRINGS.STRONG_SKILLS }}
            className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-xl mb-10 mx-auto md:mx-0"
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-8 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition"
            >
              {STRINGS.VIEW_PROJECTS}
            </a>
            <a
              href="/resume"
              className="px-8 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:border-indigo-500 hover:text-indigo-600 transition"
            >
              {STRINGS.VIEW_RESUME}
            </a>
          </div>
        </motion.div>
        <div className="md:w-1/2 flex justify-center">
          <PhotoAvatar />
        </div>
      </div>
    </section>
  );
};

export default Home;
