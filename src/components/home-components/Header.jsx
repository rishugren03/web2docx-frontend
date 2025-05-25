import React from "react";
import { RocketIcon, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const naviate = useNavigate();
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-1 flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white px-6 py-24">
      <div className="max-w-3xl text-center">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-bold text-gray-900 mb-6">
          Convert HTML to PDF, Images, Docx & More — Instantly.
        </motion.h1>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-gray-600 mb-8">
          Web2Docx lets developers convert their HTML into professional
          documents using powerful APIs.
        </motion.p>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center gap-6 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              naviate("/user/dashboard");
            }}
            className="bg-indigo-600 text-white px-6 py-3 text-lg rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-indigo-500/20 flex items-center cursor-pointer">
            Get Started <RocketIcon className="ml-2 w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.open("https://docs.web2docx.com", "_blank");
            }}
            className="bg-emerald-600 text-white px-6 py-3 text-lg rounded-lg hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-emerald-500/20 flex items-center cursor-pointer">
            See Docs <BookOpen className="ml-2 w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
