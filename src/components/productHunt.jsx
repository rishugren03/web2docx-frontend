import React from "react";
import { motion } from "framer-motion";

const ProductHuntEmbed = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-16 px-4 bg-gradient-to-b from-indigo-50 to-transparent my-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <motion.h2
            whileHover={{ scale: 1.02 }}
            className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
            🚀 Featured on Product Hunt
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our community of early adopters and see why developers love our
            product!
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl aspect-[500/250] bg-white rounded-xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300">
            <iframe
              style={{ border: "none" }}
              src="https://cards.producthunt.com/cards/posts/965081?v=1"
              className="w-full h-full"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              title="Product Hunt Embed"
            />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <motion.a
            href="https://www.producthunt.com/posts/web2docx"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-all duration-300 flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.604 8.4h-3.405V12h3.405c.995 0 1.801-.806 1.801-1.801 0-.993-.805-1.799-1.801-1.799zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.405V18H7.808V6h5.796c2.319 0 4.2 1.88 4.2 4.199 0 2.321-1.881 4.201-4.2 4.201z" />
            </svg>
            Upvote on Product Hunt
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductHuntEmbed;
