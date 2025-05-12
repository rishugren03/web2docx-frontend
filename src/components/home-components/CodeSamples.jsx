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
}`,
  "HTML Batch to PDF (ZIP)": `async function htmlBatchToPdfExample() {
  const htmlList = ["<h1>First</h1>", "<h1>Second</h1>"];
  const zipBuffer = await client.htmlBatchToPdf(htmlList);
  require("fs").writeFileSync("batch-output.zip", zipBuffer);
}`,
  "HTML to Image": `async function htmlToImageExample() {
  const html = "<h1>Hello Image</h1>";
  const imageBuffer = await client.htmlToImage(html);
  require("fs").writeFileSync("output.png", imageBuffer);
}`,
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
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
    <section className="relative py-12 px-6">
      <GridBackground>
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-purple-500/10 blur-xl pointer-events-none"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-indigo-500/10 blur-xl pointer-events-none"
        />
      </GridBackground>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Developer Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Super easy integration with our SDK.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="flex border-b border-gray-200/50 text-sm font-medium">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2 transition-all duration-200 ${
                  activeTab === tab
                    ? "text-indigo-600"
                    : "text-gray-500 hover:text-indigo-500"
                }`}>
                {tab}
              </motion.button>
            ))}
          </div>

          <div className="relative">
            <button
              onClick={copyToClipboard}
              className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-2 bg-gray-800/80 text-gray-200 rounded-md hover:bg-gray-700/90 transition-all">
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-xs">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span className="text-xs">Copy</span>
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
