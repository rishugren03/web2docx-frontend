import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogins = () => {
  return (
    <div className="flex flex-col space-y-4">
      <button className="flex items-center justify-center space-x-2 w-full border border-gray-300 text-gray-900 py-3 rounded-lg hover:bg-gray-100">
        <FaGoogle className="h-5 w-5 text-indigo-600" />
        <span>Google</span>
      </button>
      <button className="flex items-center justify-center space-x-2 w-full border border-gray-300 text-gray-900 py-3 rounded-lg hover:bg-gray-100">
        <FaGithub className="h-5 w-5 text-gray-800" />
        <span>GitHub</span>
      </button>
    </div>
  );
};

export default SocialLogins;
