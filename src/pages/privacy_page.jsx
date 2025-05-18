import React from "react";
import { Shield, Lock, Mail, FileText, RefreshCw, Globe } from "lucide-react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const PrivacyPolicy = () => {
  useDocumentTitle("Privacy Policy - Web2Docx");
  const sections = [
    {
      icon: <FileText className="w-6 h-6 text-indigo-600" />,
      title: "Information We Collect",
      content:
        "We may collect minimal technical information necessary to provide our services, such as API usage data and logs. We do not collect personal information unless you voluntarily provide it to us.",
    },
    {
      icon: <Globe className="w-6 h-6 text-indigo-600" />,
      title: "How We Use Information",
      content:
        "Information collected is used solely to operate, maintain, and improve the Web2Docx services.",
    },
    {
      icon: <Lock className="w-6 h-6 text-indigo-600" />,
      title: "Document Storage",
      content:
        "We do not store any documents that you convert through our service. All conversions are processed securely and temporarily.",
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-600" />,
      title: "Data Security",
      content:
        "We implement security measures to protect your information. However, no method of transmission over the Internet is 100% secure.",
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-indigo-600" />,
      title: "Changes to This Policy",
      content:
        "We may update this Privacy Policy from time to time. Changes will be posted on this page.",
    },
    {
      icon: <Mail className="w-6 h-6 text-indigo-600" />,
      title: "Contact Us",
      content:
        "If you have any questions about this Privacy Policy, please contact us at:",
      extra: (
        <>
          <p className="font-medium mb-1 mt-2">Email: support@web2docx.com</p>
          <p className="text-sm text-gray-600">
            Address: Patna, Bihar, 803212 - India
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-[8vh] bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-indigo-100 rounded-full mb-6">
            <Shield className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Privacy Policy
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy matters to us. Here's how we protect your information.
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-indigo-50 rounded-lg mt-1">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                    {section.title}
                  </h2>
                  <p className="text-gray-600">{section.content}</p>
                  {section.extra && section.extra}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
