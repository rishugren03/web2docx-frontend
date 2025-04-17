import React from "react";

const ErrorMessage = ({ message, description, retryFunction }) => (
  <div className="text-center p-8 min-h-screen pt-[20vh]">
    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
      {/* X icon */}
      <svg
        className="h-6 w-6 text-red-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
    <h3 className="mt-3 text-lg font-medium text-gray-900">{message}</h3>
    <p className="mt-2 text-sm text-gray-500">{description}</p>
    <button
      onClick={retryFunction}
      className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 cursor-pointer">
      Retry
    </button>
  </div>
);

export default ErrorMessage;
