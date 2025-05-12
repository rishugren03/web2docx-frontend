import React, { useState } from "react";
import { RocketIcon, MenuIcon, XIcon, BookOpen } from "lucide-react";
import Navbar from "../shared/Navbar";
import Header from "../components/home-components/Header";
import Features from "../components/home-components/Features";
import Pricing from "../components/home-components/Pricing";
import Footer from "../shared/Footer";
import CodeSamples from "../components/home-components/CodeSamples";
import FaqSection from "../components/home-components/FaqSection";
import EarlyAccessModal from "../components/home-components/EarlyAcessModal";

export default function HomePage() {
  return (
    <div className="min-h-screen pt-[8vh] flex flex-col">
      {/* Header */}
      <Header />

      {/* Early access modal */}
      <EarlyAccessModal />

      {/* Code samples */}
      <CodeSamples />

      {/* Features section */}
      <Features />

      {/* Pricing */}
      <Pricing />

      {/* FAQs */}
      <FaqSection />
    </div>
  );
}
