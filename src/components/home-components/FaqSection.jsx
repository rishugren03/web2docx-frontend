import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Web2Docx?",
    answer:
      "Web2Docx is a developer-focused API that converts HTML to PDFs or images in real time using WebSockets, with optional batch support.",
  },
  {
    question: "What can I convert?",
    answer:
      "You can convert single HTML documents to PDF, batch multiple HTMLs into a ZIP of PDFs, or convert HTML to high-quality images.",
  },
  {
    question: "How do I get an API key?",
    answer:
      "Sign up at web2docx.com and your dashboard will generate a unique API key for making secure requests to the Web2Docx service.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. Web2Docx offers a generous free tier for developers to test and integrate before upgrading to Pro or Pro Max plans.",
  },
  {
    question: "How fast is the conversion?",
    answer:
      "Pro and Pro Max users get access to a priority queue for faster processing. WebSocket-based job completion gives real-time updates.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left text-gray-700 font-medium hover:bg-gray-50 transition">
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-6 pb-4 text-gray-600 text-sm transition-all duration-300 ${
                  openIndex === index ? "block" : "hidden"
                }`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
