import React from "react";
import {
  FileText,
  ShieldAlert,
  Clock,
  AlertCircle,
  BookOpen,
  Mail,
  RefreshCw,
} from "lucide-react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const TermsOfService = () => {
  useDocumentTitle("Terms  - Web2Docx");
  const sections = [
    {
      icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
      title: "Use of Service",
      content:
        "Web2Docx provides an API and SDK for converting documents. You agree to use the service only for lawful purposes and in accordance with these Terms.",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-indigo-600" />,
      title: "Prohibited Activities",
      content:
        "You may not use our service to engage in any unlawful, harmful, or abusive activities. Any misuse of the platform may result in termination of your access.",
    },
    {
      icon: <FileText className="w-6 h-6 text-indigo-600" />,
      title: "Document Storage",
      content:
        "We do not store any documents that you convert through our service. All files are processed temporarily and securely.",
    },
    {
      icon: <Clock className="w-6 h-6 text-indigo-600" />,
      title: "Service Availability",
      content:
        "We strive to maintain service uptime, but we do not guarantee uninterrupted access. Service may be suspended for maintenance or upgrades.",
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-indigo-600" />,
      title: "Limitation of Liability",
      content:
        "Web2Docx shall not be held liable for any damages arising out of your use or inability to use the services, including data loss.",
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-indigo-600" />,
      title: "Changes to Terms",
      content:
        "We reserve the right to modify these Terms at any time. Updated Terms will be posted on this page and your continued use of the service signifies acceptance.",
    },
    {
      icon: <Mail className="w-6 h-6 text-indigo-600" />,
      title: "Contact Us",
      content:
        "If you have any questions regarding these Terms, please contact us at:",
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
            <FileText className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Terms of Service
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="mb-8 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-700">
            These Terms of Service ("Terms") govern your access to and use of
            the Web2Docx services. By accessing or using our service, you agree
            to be bound by these Terms.
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
      </div>
    </div>
  );
};

export default TermsOfService;
