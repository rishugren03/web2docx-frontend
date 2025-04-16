import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home";
import SignInPage from "./pages/signin";
import Dashboard from "./pages/dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/user/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
