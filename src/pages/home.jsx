import React, { useState } from "react";
import { RocketIcon, MenuIcon, XIcon, BookOpen } from "lucide-react";
import Navbar from "../shared/Navbar";
import Header from "../components/home-components/Header";
import Features from "../components/home-components/Features";
import Pricing from "../components/home-components/Pricing";
import Footer from "../shared/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen pt-[8vh] flex flex-col">
      {/* Header */}
      <Header />

      {/* Features section */}
      <Features />

      {/* Pricing */}
      <Pricing />
    </div>
  );
}
