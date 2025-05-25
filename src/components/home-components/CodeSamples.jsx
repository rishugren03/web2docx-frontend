import React, { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const codeSamples = {
  "HTML to PDF": `const { Web2DocxClient } = require("@web2docx/web2docx-sdk");

const client = new Web2DocxClient("YOUR_API_KEY");

async function htmlToPdfExample() {
  const html = "<h1>Hello World</h1>";
  const pdfBuffer = await client.htmlToPdf(html);
  require("fs").writeFileSync("output.pdf", pdfBuffer);
}

htmlToPdfExample();`,

  "HTML Batch to PDF (ZIP)": `const { Web2DocxClient } = require("@web2docx/web2docx-sdk");

const client = new Web2DocxClient("YOUR_API_KEY");

async function htmlBatchToPdfExample() {
  const htmlList = ["<h1>First</h1>", "<h1>Second</h1>"];
  const zipBuffer = await client.htmlBatchToPdf(htmlList);
  require("fs").writeFileSync("batch-output.zip", zipBuffer);
}

htmlBatchToPdfExample();`,

  "HTML to Image": `const { Web2DocxClient } = require("@web2docx/web2docx-sdk");

const client = new Web2DocxClient("YOUR_API_KEY");

async function htmlToImageExample() {
  const html = "<h1>Hello Image</h1>";
  const imageBuffer = await client.htmlToImage(html);
  require("fs").writeFileSync("output.png", imageBuffer);
}

htmlToImageExample();`,

  "HTML Batch to Image (ZIP)": `const { Web2DocxClient } = require("@web2docx/web2docx-sdk");

const client = new Web2DocxClient("YOUR_API_KEY");

async function htmlBatchToImageExample() {
  const htmlList = ["<h1>First</h1>", "<h1>Second</h1>"];
  const zipBuffer = await client.htmlBatchToImage(htmlList);
  require("fs").writeFileSync("batch-output.zip", zipBuffer);
}

htmlBatchToImageExample();`,

  "HTML to Docx": `const { Web2DocxClient } = require("@web2docx/web2docx-sdk");

const client = new Web2DocxClient("YOUR_API_KEY");

async function htmlToDocxExample() {
  const html = "<h1>Hello Docx</h1>";
  const docxBuffer = await client.htmlToDocx(html);
  require("fs").writeFileSync("output.docx", docxBuffer);
}

htmlToDocxExample();`,

  "HTML Batch to Docx (ZIP)": `const { Web2DocxClient } = require("@web2docx/web2docx-sdk");

const client = new Web2DocxClient("YOUR_API_KEY");

async function htmlBatchToDocxExample() {
  const htmlList = ["<h1>First</h1>", "<h1>Second</h1>"];
  const zipBuffer = await client.htmlBatchToDocx(htmlList);
  require("fs").writeFileSync("batch-output.zip", zipBuffer);
}

htmlBatchToDocxExample();`,
};

const tabs = Object.keys(codeSamples);

const GridBackground = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #4f46e511 1px, transparent 1px),
            linear-gradient(to bottom, #4f46e511 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          transform: `translate(${mousePosition.x * 0.02}px, ${
            mousePosition.y * 0.02
          }px)`,
        }}></div>
    </div>
  );
};

const CodeSamples = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSamples[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-16 px-4 sm:px-8 lg:px-12">
      <GridBackground />

      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="hidden sm:block absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-purple-500/20 blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="hidden sm:block absolute bottom-1/4 right-1/4 w-28 h-28 rounded-full bg-indigo-500/20 blur-2xl"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Developer Experience
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Super easy integration with our SDK, featuring 99.9% uptime,
            blazing-fast API responses, and seamless scaling for any workload.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/90 backdrop-blur-xl rounded-xl shadow-2xl border border-white/30 overflow-hidden">
          <div className="flex overflow-x-auto border-b border-gray-200/50 text-sm font-medium">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap px-5 py-2 transition-all ${
                  activeTab === tab
                    ? "text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/20"
                    : "text-gray-500 hover:text-indigo-500"
                }`}>
                {tab}
              </button>
            ))}
          </div>

          <div className="relative">
            <button
              onClick={copyToClipboard}
              className="absolute top-3 right-3 z-10 flex items-center gap-2 px-3 py-1.5 bg-gray-800/90 text-gray-100 text-xs rounded-md hover:bg-gray-700 transition-all">
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy
                </>
              )}
            </button>

            <SyntaxHighlighter
              language="javascript"
              style={atomDark}
              customStyle={{
                margin: 0,
                padding: "1.5rem",
                fontSize: "0.85rem",
                background: "#0f172a",
                borderRadius: "0 0 0.75rem 0.75rem",
              }}
              wrapLongLines>
              {codeSamples[activeTab]}
            </SyntaxHighlighter>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeSamples;
