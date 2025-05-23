import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { RocketIcon, MenuIcon, XIcon, BookOpen } from "lucide-react";
import Header from "../components/home-components/Header";
import Features from "../components/home-components/Features";
import Pricing from "../components/home-components/Pricing";
import CodeSamples from "../components/home-components/CodeSamples";
import FaqSection from "../components/home-components/FaqSection";
import EarlyAccessModal from "../components/home-components/EarlyAcessModal";
import ProductHuntEmbed from "../components/productHunt";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function HomePage() {
  useDocumentTitle("Web2Docx");
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
    <>
      <Helmet>
        <title>Web2Docx – Convert HTML to PDF, DOCX, PNG via API</title>
        <meta
          name="description"
          content="Web2Docx is a powerful API that converts HTML or URLs to high-quality PDF, DOCX, and PNG. Ideal for developers needing scalable document generation."
        />
        <meta
          name="keywords"
          content="HTML to PDF, HTML to DOCX, HTML to PNG, API, document conversion, Web2Docx"
        />
        <meta name="author" content="Web2Docx Team" />
        <meta
          property="og:title"
          content="Web2Docx – Convert HTML to Documents via API"
        />
        <meta
          property="og:description"
          content="Instantly convert HTML or webpages to PDF, DOCX, or PNG using our developer-friendly API. Try Web2Docx now."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://web2docx.com" />
        <meta property="og:image" content="https://web2docx.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Web2Docx – HTML to PDF, DOCX, PNG API"
        />
        <meta
          name="twitter:description"
          content="Developer API to convert HTML to high-quality PDF, DOCX, and PNG documents. Fast and reliable."
        />
        <meta
          name="twitter:image"
          content="https://web2docx.com/og-image.png"
        />
        <link rel="canonical" href="https://web2docx.com/" />
      </Helmet>

      <div className="min-h-screen pt-[8vh] flex flex-col">
        {/* Header */}
        <section id="header">
          <Header />
        </section>

        {/* Early access modal */}
        {/* <EarlyAccessModal /> */}

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
    </>
  );
}
