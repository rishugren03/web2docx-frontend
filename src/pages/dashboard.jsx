import React, { useEffect, useState } from "react";
import {
  RefreshCwIcon,
  Zap,
  Shield,
  Rocket,
  Infinity,
  Eye,
  EyeOff,
  Copy,
} from "lucide-react";
import { motion } from "framer-motion";
import { useUserData } from "../context/userDataContext";
import Loading from "../components/loading";
import ErrorMessage from "../components/Error";
import { getIdToken } from "firebase/auth";
import { auth } from "../../config/firebase";
import { toast, ToastContainer } from "react-toastify";
import { generateNewApiKey } from "../utils/api";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Dashboard() {
  useDocumentTitle("Dashboard - Web2Docx");
  const [isRotating, setIsRotating] = useState(false);
  const { userData, loadingUser } = useUserData();
  const [timeoutError, setTimeoutError] = useState(false);
  const [isKeyVisible, setIsKeyVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Calculate progress percentages
  const planLimit = userData?.apiKey?.planLimit || 0;
  const usedCount = userData?.apiKey?.usageCount || 0;
  const remaining = planLimit - usedCount;
  const usedPercentage = Math.min(
    100,
    Math.round((usedCount / planLimit) * 100)
  );
  const remainingPercentage = 100 - usedPercentage;

  const generateNewKey = async () => {
    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false);
    }, 800);

    try {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        toast.error("User not authenticated");
        return;
      }
      const idToken = await getIdToken(currentUser, true);
      await generateNewApiKey(idToken);
      window.location.reload();
    } catch (error) {
      console.error("Error generating new API key:", error.message);
      toast.error("Failed to generate a new key");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(userData?.apiKey?.apiKey || "");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  useEffect(() => {
    if (loadingUser) {
      const timer = setTimeout(() => {
        setTimeoutError(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [loadingUser]);

  if (timeoutError) {
    return (
      <ErrorMessage
        message="Failed to load dashboard"
        description="We couldn't load your dashboard in time. Please check your connection and try again."
        retryFunction={() => window.location.reload()}
      />
    );
  }

  if (loadingUser) {
    return <Loading message="Fetching your dashboard..." size="w-16 h-16" />;
  }

  return (
    <div className="min-h-screen pt-[8vh] bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="pt-[8vh] pb-[4vh] px-6 py-10">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Welcome Header (unchanged) */}
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

          {/* Updated API Key Section */}
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
                <div className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 font-mono shadow-sm flex items-center">
                  {isKeyVisible ? (
                    userData?.apiKey?.apiKey || "sk-XXXXXX...abcd"
                  ) : (
                    <span className="text-gray-400">
                      •••••••••••••••••••••••••••••••
                    </span>
                  )}
                  <div className="absolute right-3 top-3 flex gap-2">
                    <button
                      onClick={() => setIsKeyVisible(!isKeyVisible)}
                      className="text-gray-400 hover:text-indigo-600 transition">
                      {isKeyVisible ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                    <button
                      onClick={copyToClipboard}
                      className="text-gray-400 hover:text-indigo-600 transition">
                      <Copy className="w-5 h-5 cursor-pointer" />
                    </button>
                  </div>
                </div>
                {isCopied && (
                  <p className="mt-1 text-sm text-green-600">
                    Copied to clipboard!
                  </p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={generateNewKey}
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer">
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

          {/* Updated Plan Details with Dynamic Progress Bars */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 space-y-6 shadow-xl border border-white">
            {/* ... (previous heading code) */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Current Plan */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-5 border border-gray-100 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-md transition">
                <h3 className="text-gray-500 text-sm font-medium">
                  Current Plan
                </h3>
                <p className="text-2xl font-bold text-indigo-600 mt-2">
                  {userData?.plan?.charAt(0).toUpperCase() +
                    userData?.plan?.slice(1) || "Free"}
                </p>
                <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-200 rounded-full"
                    style={{ width: "100%" }}></div>
                </div>
              </motion.div>

              {/* Monthly Limit */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-5 border border-gray-100 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-md transition">
                <h3 className="text-gray-500 text-sm font-medium">
                  Monthly Limit
                </h3>
                <p className="text-2xl font-bold text-indigo-600 mt-2">
                  {planLimit}
                </p>
                <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-200 rounded-full"
                    style={{ width: "100%" }}></div>
                </div>
              </motion.div>

              {/* Requests Used */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-5 border border-gray-100 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-md transition">
                <h3 className="text-gray-500 text-sm font-medium">
                  Requests Used
                </h3>
                <p className="text-2xl font-bold text-indigo-600 mt-2">
                  {usedCount}
                </p>
                <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-400 rounded-full"
                    style={{ width: `${usedPercentage}%` }}></div>
                </div>
              </motion.div>

              {/* Remaining */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-5 border border-gray-100 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-md transition">
                <h3 className="text-gray-500 text-sm font-medium">Remaining</h3>
                <p className="text-2xl font-bold text-indigo-600 mt-2">
                  {remaining}
                </p>
                <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-300 rounded-full"
                    style={{ width: `${remainingPercentage}%` }}></div>
                </div>
              </motion.div>
            </div>

            {userData.plan === "free" && (
              <div className="pt-4 text-center">
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    window.open(
                      // "http://localhost:5173/#pricing",
                      "https://web2docx.com/#pricing",
                      "_blank",
                      "noopener"
                    );
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-medium flex items-center gap-2 mx-auto">
                  <Infinity className="w-5 h-5" />
                  Upgrade to Pro Plan
                </motion.button>
                <p className="text-gray-500 text-sm mt-3">
                  Need higher limits? Custom enterprise plans available.
                </p>
              </div>
            )}
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
      <ToastContainer />
    </div>
  );
}
