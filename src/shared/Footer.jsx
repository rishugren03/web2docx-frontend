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
        name: "Status",
        url: "https://stats.uptimerobot.com/VboavQHUq8",
      },
      {
        name: "Documentation",
        url: "https://www.npmjs.com/package/@web2docx/web2docx-sdk?activeTab=readme",
      },
      {
        name: "Blogs",
        url: "https://web2docx.com/blogs",
      },
    ],
  };

  // Helper to determine if link is external
  const isExternal = (url) =>
    url.startsWith("http") || url.startsWith("mailto:");

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Branding + Socials */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Web2Docx</h3>
            <p className="text-sm">
              An SDK-first document conversion service built for developers and
              modern teams.
            </p>
            <p className="text-sm">
              Contact us at:{" "}
              <a
                href="mailto:hello@web2docx.com"
                className="text-grey-400 hover:underline">
                hello@web2docx.com
              </a>
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

          {/* Legal */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={link.url}
                    target={isExternal(link.url) ? "_blank" : undefined}
                    rel={
                      isExternal(link.url) ? "noopener noreferrer" : undefined
                    }
                    className="hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-3">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={link.url}
                    target={isExternal(link.url) ? "_blank" : undefined}
                    rel={
                      isExternal(link.url) ? "noopener noreferrer" : undefined
                    }
                    className="hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Web2Docx. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-6">
            {footerLinks.misc.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
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
