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

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/user/reset-password" element={<PasswordReset />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
