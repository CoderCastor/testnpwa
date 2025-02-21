"use client";

import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I become a member?",
    answer:
      "You can become a member by registering through our website or contacting our support team for further assistance.",
  },
  {
    question: "What are the benefits of joining NPWA?",
    answer:
      "As a member, you'll have access to exclusive events, discounts, and the ability to participate in our community initiatives.",
  },
  {
    question: "How do I submit my feedback?",
    answer:
      "Simply fill out the feedback form on our website, providing your name, email, rating, and feedback to help us improve our services.",
  },
  {
    question: "Can I update my membership details?",
    answer:
      "Yes, you can update your membership details through your account settings or by contacting our support team.",
  },
  {
    question: "Is there a fee for membership?",
    answer:
      "Membership is free, but certain events or services may have associated fees.",
  },
  {
    question: "How is my feedback used?",
    answer:
      "Your feedback is used to improve our services, and we take all suggestions seriously to enhance member experience.",
  },
  {
    question: "How can I contact NPWA support?",
    answer:
      "You can reach our support team via email, phone, or through our website's contact page.",
  },
  {
    question: "What events does NPWA organize?",
    answer:
      "We organize workshops, networking events, and special interest group meetings to help our members connect and grow.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="FAQs" className="min-h-screen bg-gray-100 py-12 px-6 sm:mt-2">
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-center text-blue-600">
        FAQs
      </h2>
      <p className="text-center text-gray-600 mt-2">
        Find answers to common questions about NPWA.
      </p>

      {/* FAQ List */}
      <div className="mt-10 max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-xl shadow-md bg-white">
            {/* Question */}
            <button
              className={`w-full text-left px-6 py-5 font-semibold text-lg flex justify-between items-center transition-all duration-300 ${
                openIndex === index
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 hover:bg-blue-50"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-2xl">
                {openIndex === index ? (
                  <ChevronDown className="text-white" />
                ) : (
                  <ChevronRight className="text-blue-600" />
                )}
              </span>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="px-6 py-4 bg-blue-600 text-white rounded-b-xl transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}