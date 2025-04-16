import React, { useState } from "react";
import { RefreshCwIcon, Zap, Shield, Rocket, Infinity } from "lucide-react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [apiKey, setApiKey] = useState("sk-XXXXXX...abcd");
  const [isRotating, setIsRotating] = useState(false);

  const generateNewKey = () => {
    setIsRotating(true);
    // Simulate API call
    setTimeout(() => {
      setApiKey(`sk-${Math.random().toString(36).slice(2, 18)}`);
      setIsRotating(false);
    }, 800);
  };

  return (
    <div className="min-h-screen pt-[8vh] bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="pt-[8vh] pb-[4vh] px-6 py-10">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Welcome Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Developer Dashboard
            </h1>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Manage your API keys, monitor usage, and scale your integration
              with our powerful tools.
            </p>
          </motion.div>

          {/* API Key Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 space-y-6 shadow-xl border border-white">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Zap className="w-5 h-5 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">API Key</h2>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  readOnly
                  value={apiKey}
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 font-mono shadow-sm focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition"
                />
                <div className="absolute right-3 top-3 flex gap-2">
                  <button className="text-gray-400 hover:text-indigo-600 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <rect
                        x="9"
                        y="9"
                        width="13"
                        height="13"
                        rx="2"
                        ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={generateNewKey}
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300">
                <motion.div
                  animate={{ rotate: isRotating ? 360 : 0 }}
                  transition={{
                    duration: 0.8,
                    repeat: isRotating ? Infinity : 0,
                  }}>
                  <RefreshCwIcon className="w-5 h-5 mr-2" />
                </motion.div>
                Generate New Key
              </motion.button>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Shield className="w-4 h-4" />
              <span>Keep your API key secure and don't share it publicly</span>
            </div>
          </motion.section>

          {/* Plan Details */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 space-y-6 shadow-xl border border-white">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Rocket className="w-5 h-5 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Plan Details</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-5 border border-gray-100 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-md transition">
                <h3 className="text-gray-500 text-sm font-medium">
                  Current Plan
                </h3>
                <p className="text-2xl font-bold text-indigo-600 mt-2">Free</p>
                <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-200 rounded-full"
                    style={{ width: "100%" }}></div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-5 border border-gray-100 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-md transition">
                <h3 className="text-gray-500 text-sm font-medium">
                  Monthly Limit
                </h3>
                <p className="text-2xl font-bold text-indigo-600 mt-2">300</p>
                <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-200 rounded-full"
                    style={{ width: "100%" }}></div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-5 border border-gray-100 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-md transition">
                <h3 className="text-gray-500 text-sm font-medium">
                  Requests Used
                </h3>
                <p className="text-2xl font-bold text-indigo-600 mt-2">120</p>
                <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-400 rounded-full"
                    style={{ width: "40%" }}></div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-5 border border-gray-100 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-md transition">
                <h3 className="text-gray-500 text-sm font-medium">Remaining</h3>
                <p className="text-2xl font-bold text-indigo-600 mt-2">180</p>
                <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-300 rounded-full"
                    style={{ width: "60%" }}></div>
                </div>
              </motion.div>
            </div>

            <div className="pt-4 text-center">
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-medium flex items-center gap-2 mx-auto">
                <Infinity className="w-5 h-5" />
                Upgrade to Pro Plan
              </motion.button>
              <p className="text-gray-500 text-sm mt-3">
                Need higher limits? Custom enterprise plans available.
              </p>
            </div>
          </motion.section>

          {/* Additional Stats Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
              <h3 className="text-lg font-medium">API Status</h3>
              <p className="text-3xl font-bold mt-2">Operational</p>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                <span className="text-sm">All systems normal</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl border border-white">
              <h3 className="text-lg font-medium text-gray-800">Latency</h3>
              <p className="text-3xl font-bold mt-2 text-indigo-600">142ms</p>
              <div className="flex items-center gap-2 mt-4 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
                <span className="text-sm">Global average</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl border border-white">
              <h3 className="text-lg font-medium text-gray-800">Support</h3>
              <p className="text-3xl font-bold mt-2 text-indigo-600">24/7</p>
              <div className="flex items-center gap-2 mt-4 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span className="text-sm">Priority response</span>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
