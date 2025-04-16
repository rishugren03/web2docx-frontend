import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const Loading = ({ message = "Loading...", size = "w-16 h-16" }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const circleVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const pulseVariants = {
    hidden: { opacity: 0.5, scale: 0.8 },
    visible: {
      opacity: [0.5, 1, 0.5],
      scale: [0.8, 1, 0.8],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}>
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Animated circles background */}
        <div className="relative">
          <motion.div
            className={`absolute inset-0 rounded-full bg-indigo-100/50 blur-md`}
            variants={pulseVariants}
          />

          {/* Main spinner */}
          <motion.div
            className={`${size} relative flex items-center justify-center`}
            variants={circleVariants}>
            <motion.div
              className={`absolute inset-0 border-4 border-t-transparent border-indigo-600 rounded-full`}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Center icon */}
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
              }}>
              <Zap className="w-6 h-6 text-indigo-600 fill-current" />
            </motion.div>
          </motion.div>
        </div>

        {/* Text with staggered animation */}
        <motion.div variants={textVariants} className="text-center">
          <motion.p
            className="text-xl font-medium text-gray-700"
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}>
            {message}
          </motion.p>
          <motion.p
            className="text-sm text-gray-500 mt-2"
            animate={{
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 0.5,
            }}>
            Please wait while we process your request
          </motion.p>
        </motion.div>

        {/* Progress indicator */}
        <motion.div
          className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden mt-4"
          initial={{ width: 0 }}
          animate={{ width: "8rem" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}>
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-400 to-purple-500"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loading;
