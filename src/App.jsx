import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home";
import SignInPage from "./pages/signin";
import Dashboard from "./pages/dashboard";
import PasswordReset from "./components/signin-components/PasswordReset";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/user/reset-password" element={<PasswordReset />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
