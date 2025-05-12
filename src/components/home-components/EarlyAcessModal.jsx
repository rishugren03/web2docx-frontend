import React, { useEffect, useState } from "react";

const EarlyAccessModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("web2docx_early_notice_seen");
    if (!seen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000); // 30 seconds delay

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("web2docx_early_notice_seen", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">🚀 Web2Docx Early Access</h3>
        <p className="text-sm mb-2">
          We're in public testing. Pricing is <strong>under review</strong>{" "}
          while our payment partner finalizes approval.
        </p>
        <p className="text-sm mb-2">
          You get <strong>50 free conversions</strong> — no payment required!
        </p>
        <p className="text-sm mb-4">
          Help us improve by submitting your feedback.
        </p>
        <div className="flex justify-between items-center mt-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfHY0g6tq2GD5X4eiOi7UYXJI0pqKX6O0XBKcG4TQbdPLkhmQ/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm">
            💬 Give Feedback
          </a>
          <button
            onClick={handleClose}
            className="text-gray-600 hover:text-black text-sm">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EarlyAccessModal;
