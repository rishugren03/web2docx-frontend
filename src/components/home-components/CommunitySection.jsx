import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-6 h-6 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
              Community Hub
            </span>
            <Sparkles className="w-6 h-6 text-indigo-600" />
          </motion.div>

          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Join the Web2Docx Community 🚀
            </span>
          </h2>

          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
            Get early updates, share feedback, and help shape the future of
            Web2Docx with our AI-powered feedback hub — DroonAI.
          </p>

          <motion.a
            href="https://droonai.com/c/web2docx"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/40 cursor-pointer"
          >
            Join the Community
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
