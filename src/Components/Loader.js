import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ZQAvatar from "assets/images/ZQAvatar.svg";

const Loader = ({ duration = 2000 }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-indigo-50 flex items-center justify-center z-50">
      <motion.div
        className="text-6xl font-extrabold text-indigo-600"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      >
        <img
          src={ZQAvatar}
          alt="Zahraa-logo"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Loader;
