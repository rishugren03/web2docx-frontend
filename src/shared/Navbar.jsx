import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Menu, X, LogIn, User, Zap, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/userContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const user = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    {
      name: "Documentation",
      href: "https://www.npmjs.com/package/@web2docx/web2docx-sdk?activeTab=readme",
    },
    // { name: "Contact", href: "#contact" },
  ];

  const handleLogout = () => {
    console.log("loggedout");
  };

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 ${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-lg" : "bg-white"
      } transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 cursor-pointer">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Zap className="w-5 h-5 text-indigo-600" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Web2Docx
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2, color: "#4f46e5" }}
                className="text-gray-700 font-medium transition-colors">
                {item.name}
              </motion.a>
            ))}

            <div className="flex items-center space-x-4 ml-4">
              {!user ? (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/signin"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg text-indigo-600 hover:bg-indigo-50 transition-colors">
                    <LogIn className="w-5 h-5" />
                    <span>Sign In</span>
                  </Link>
                </motion.div>
              ) : (
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/user/dashboard"
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md hover:shadow-lg transition-all">
                      <User className="w-5 h-5" />
                      <span>Dashboard</span>
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg text-indigo-600 hover:bg-indigo-50 transition-colors">
                      <LogOut className="w-5 h-5" />
                      <span>Sign out</span>
                    </button>
                  </motion.div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-md text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu">
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-xl px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                whileTap={{ scale: 0.95 }}
                className="block w-full text-center px-4 py-3 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                {item.name}
              </motion.a>
            ))}

            <div className="pt-4 border-t border-gray-200 space-y-2">
              {!user ? (
                <Link
                  to="/signin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                  <LogIn className="w-5 h-5" />
                  <span>Sign In</span>
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-center space-x-2 w-full px-4 py-3 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                    <LogOut className="w-5 h-5" />
                    <span>Sign out</span>
                  </button>

                  <Link
                    to="/user/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center space-x-2 w-full px-4 py-3 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                    <User className="w-5 h-5" />
                    <span>Dashboard</span>
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
