import React, { useState, useEffect } from "react";
import { RocketIcon, MenuIcon, XIcon, BookOpen } from "lucide-react";
import Navbar from "../shared/Navbar";
import Header from "../components/home-components/Header";
import Features from "../components/home-components/Features";
import Pricing from "../components/home-components/Pricing";
import Footer from "../shared/Footer";
import CodeSamples from "../components/home-components/CodeSamples";
import FaqSection from "../components/home-components/FaqSection";
import EarlyAccessModal from "../components/home-components/EarlyAcessModal";
import ProductHuntEmbed from "../components/productHunt";

export default function HomePage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // 100ms delay to ensure components are rendered
    }
  }, []);

  return (
    <div className="min-h-screen pt-[8vh] flex flex-col">
      {/* Header */}
      <section id="header">
        <Header />
      </section>

      {/* Early access modal */}
      <EarlyAccessModal />

      {/* Code samples */}
      <section id="code-samples">
        <CodeSamples />
      </section>

      {/* Product Hunt */}
      <section id="product-hunt">
        <ProductHuntEmbed />
      </section>

      {/* Features section */}
      <section id="features">
        <Features />
      </section>

      {/* Pricing */}
      <section id="pricing">
        <Pricing />
      </section>

      {/* FAQs */}
      <section id="faqs">
        <FaqSection />
      </section>
    </div>
  );
}
