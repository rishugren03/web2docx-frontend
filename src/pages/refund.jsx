import React from "react";
import {
  FileText,
  ShieldAlert,
  Clock,
  AlertCircle,
  RefreshCw,
  Mail,
  DollarSign,
} from "lucide-react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const RefundPolicy = () => {
  useDocumentTitle("Refund Policy - Web2Docx");
  const sections = [
    {
      icon: <DollarSign className="w-6 h-6 text-green-600" />,
      title: "Refund Eligibility",
      content:
        "Refunds are available only for users who have faced a technical issue or error that prevented the conversion process from completing successfully.",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-green-600" />,
      title: "Non-Refundable Situations",
      content:
        "Refunds will not be issued if the issue arises due to incorrect input (e.g., broken HTML, unsupported file types) or due to failure to meet the service's minimum requirements.",
    },
    {
      icon: <FileText className="w-6 h-6 text-green-600" />,
      title: "Request Process",
      content:
        "To request a refund, please contact our support team within 7 days of the transaction. Provide a clear description of the issue and relevant details (e.g., job ID, error messages).",
    },
    {
      icon: <Clock className="w-6 h-6 text-green-600" />,
      title: "Processing Time",
      content:
        "Refund requests will be processed within 7 business days. You will be notified via email regarding the status of your refund request.",
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-green-600" />,
      title: "Limitations",
      content:
        "Refunds are limited to the amount paid for the specific job or transaction. We are not responsible for indirect or consequential damages.",
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-green-600" />,
      title: "Changes to the Refund Policy",
      content:
        "We reserve the right to modify this Refund Policy at any time. Updated policies will be posted on this page, and your continued use of the service signifies acceptance.",
    },
    {
      icon: <Mail className="w-6 h-6 text-green-600" />,
      title: "Contact Us",
      content:
        "If you have any questions regarding our Refund Policy, please contact us at:",
      extra: (
        <>
          <p className="font-medium mb-1 mt-2">Email: support@web2docx.com</p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-[8vh] bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-6">
            <DollarSign className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
              Refund Policy
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
            This Refund Policy outlines the conditions under which you may be
            eligible for a refund when using the Web2Docx service. By using our
            service, you agree to these terms.
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-50 rounded-lg mt-1">
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

export default RefundPolicy;
