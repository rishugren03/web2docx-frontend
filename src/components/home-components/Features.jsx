import React from "react";
import { FileText, Image, Code, Zap, Clock, Server } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "HTML to PDF",
      description: "Convert any HTML or URL to high-quality PDFs instantly.",
      subFeatures: [
        {
          icon: <Zap className="w-4 h-4" />,
          text: "Lightning fast conversion",
        },
        { icon: <Clock className="w-4 h-4" />, text: "24/7 availability" },
      ],
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "HTML to Image",
      description:
        "Support for converting HTML to PNG, JPEG with perfect quality.",
      subFeatures: [
        {
          icon: <Server className="w-4 h-4" />,
          text: "High-resolution output",
        },
        { icon: <Code className="w-4 h-4" />, text: "CSS3 supported" },
      ],
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "HTML to Docx",
      description:
        "Convert HTML content into Docx format with rich styling and structure.",
      subFeatures: [
        {
          icon: <Server className="w-4 h-4" />,
          text: "High-quality Docx output",
        },
        {
          icon: <Code className="w-4 h-4" />,
          text: "Supports inline HTML styling",
        },
      ],
    },
  ];

  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built to scale, fast and reliable document generation for
            developers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 mb-4 bg-indigo-100 rounded-xl text-indigo-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="w-full border-t border-gray-100 my-4"></div>
                <ul className="space-y-2 text-left w-full">
                  {feature.subFeatures.map((sub, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-600">
                      <span className="text-indigo-500 mt-0.5">{sub.icon}</span>
                      <span>{sub.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
