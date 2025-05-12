import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home";
import SignInPage from "./pages/signin";
import Dashboard from "./pages/dashboard";
import PasswordReset from "./components/signin-components/PasswordReset";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import PrivacyPolicy from "./pages/privacy_page";
import TermsOfService from "./pages/terms";
import ProtectedRoute from "./components/ProtectedRoute";
import RefundPolicy from "./pages/refund";

const App = () => {
  return (
    <>
      <Navbar />
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfHY0g6tq2GD5X4eiOi7UYXJI0pqKX6O0XBKcG4TQbdPLkhmQ/viewform?usp=dialog"
        target="_blank"
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-md text-sm z-40">
        💬 Feedback
      </a>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route
          path="/user/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/user/reset-password" element={<PasswordReset />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
