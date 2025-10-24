"use client";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Preloader = ({ onFinish }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
        onFinish && onFinish(); // Notify App that loading is done
      }, 1000);
    };

    if (document.readyState === "complete") handleLoad();
    else window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isLoading && (
        <Motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-[9999]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          {/* Spinning amber ring */}
          <Motion.div
            className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "linear",
            }}
          />

          {/* Text */}
          <Motion.p
            className="text-amber-500 mt-6 text-lg font-semibold tracking-wider"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Loading...
          </Motion.p>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
