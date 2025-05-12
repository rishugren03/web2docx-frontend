import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/rishugren03/html-converter-sdk",
      name: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/rishu-kumar-68455a213/",
      name: "LinkedIn",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:support@web2docx.com",
      name: "Email",
    },
  ];

  const footerLinks = {
    legal: [
      { name: "Terms", url: "/terms" },
      { name: "Privacy", url: "/privacy" },
    ],
    support: [
      { name: "Refund Policy", url: "/refund-policy" },
      { name: "Contact", url: "mailto:support@web2docx.com" },
    ],
    misc: [
      {
        name: "Documentation",
        url: "https://www.npmjs.com/package/@web2docx/web2docx-sdk?activeTab=readme",
      },
    ],
  };

  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Web2Docx</h3>
            <p className="text-sm">
              API-first document conversion service for developers and teams.
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
            <h3 className="text-white text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
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
            <h3 className="text-white text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
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
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Web2Docx. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {footerLinks.misc.map((link, index) => (
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
