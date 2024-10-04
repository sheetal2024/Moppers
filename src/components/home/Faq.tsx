"use client";
import React, { useState } from "react";
import Image from "next/image";
import faqImage from "@/assets/faq-img.5cd558a1.jpg";

interface FAQ {
  question: string;
  answer: string;
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQ[] = [
    {
      question: "What is Facility Management (FM)?",
      answer:
        "Facility Management involves the effective management of an organization's buildings, infrastructure, and services. It encompasses various tasks such as maintenance, security, space planning, and ensuring a conducive environment for occupants.",
    },
    {
      question: "What is Facility Management (FM)?",
      answer:
        "Facility Management involves the effective management of an organization's buildings, infrastructure, and services. It encompasses various tasks such as maintenance, security, space planning, and ensuring a conducive environment for occupants.",
    },
    {
      question: "What is Facility Management (FM)?",
      answer:
        "Facility Management involves the effective management of an organization's buildings, infrastructure, and services. It encompasses various tasks such as maintenance, security, space planning, and ensuring a conducive environment for occupants.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="lg:main-container px-4 py-12 space-y-10">
      {/* Section Title */}
      <div className="text-center space-y-3">
        <h3 className="text-orange-500 text-xl font-semibold uppercase">FAQ</h3>
        <p className="text-navy-blue text-3xl md:text-4xl font-bold">
          Frequently Asked Questions
        </p>
      </div>

      {/* FAQ and Image Container */}
      <div className="flex flex-col lg:flex-row gap-10 justify-between items-start">
        {/* FAQ List */}
        <div className="lg:w-1/2 space-y-4">
          {faqData.map((faq, index) => (
            <div key={index}>
              <button
                className="w-full text-left p-4 bg-white rounded-lg shadow-md flex justify-between items-center transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-navy-blue font-semibold">
                  {faq.question}
                </span>
                <span className="text-gray-500">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>

              {/* Expandable Answer Section */}
              {openIndex === index && (
                <div className="mt-2 p-4 bg-gray-50 rounded-lg shadow-md transition-all duration-300">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2">
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={faqImage}
              alt="Facility Management"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
