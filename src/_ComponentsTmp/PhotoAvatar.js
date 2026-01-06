import { motion } from "framer-motion";
import AvatarPhoto from "assets/images/labtopAvatar.png";
import STRINGS from "constants/string.js";

const PhotoAvatar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-20 blur-3xl rounded-3xl" />

      <motion.div
        className="relative bg-white rounded-3xl p-6 shadow-2xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-64 h-64 rounded-2xl overflow-hidden bg-gray-100">
          <img
            src={AvatarPhoto}
            alt="Zahraa Qawariq"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-4 text-center">
          <p className="font-semibold text-gray-800">{STRINGS.FULL_NAME}</p>
          <p className="text-sm text-gray-500">{STRINGS.DESCRIPTION}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PhotoAvatar;
