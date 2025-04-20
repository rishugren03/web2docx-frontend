import React from "react";
import { motion } from "framer-motion";
import { Twitter, Github, Linkedin, Mail, Facebook } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      url: "https://twitter.com/web2docx",
      name: "Twitter",
    },
    {
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/web2docx",
      name: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/company/web2docx",
      name: "LinkedIn",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:support@web2docx.com",
      name: "Email",
    },
  ];

  const footerLinks = [
    { name: "Terms", url: "/terms" },
    { name: "Privacy", url: "/privacy" },
    { name: "Contact", url: "mailto:support@web2docx.com" },
    { name: "Documentation", url: "http://docs.localhost:3000" },
  ];

  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Web2Docx</h3>
            <p className="text-sm">
              Powerful document conversion API for developers and businesses.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, color: "#ffffff" }}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}>
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Product</h3>
            <ul className="space-y-2">
              {footerLinks.slice(0, 2).map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={link.url}
                    className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.slice(2, 4).map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={link.url}
                    className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Subscribe</h3>
            <p className="text-sm">Get the latest updates and news.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Web2Docx. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {footerLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                whileHover={{ color: "#ffffff" }}
                className="text-sm hover:text-white transition-colors">
                {link.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
