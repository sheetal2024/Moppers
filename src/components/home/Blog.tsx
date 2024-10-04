import { blogSection } from "@/utils/blog";
import React from "react";
import Image from "next/image";

export default function Blog() {
  return (
    <div className="lg:main-container px-4 py-16">
      <div className="py-5 space-y-5">
        <h1 className="font-bold text-4xl text-center">HOW WE WORK</h1>
        <h2 className="font-bold text-5xl text-center">Our Working Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              number: "01",
              title: "Fill The Form",
              description:
                "Fill up the form details which will help us to know our customer.",
              color: "bg-blue-500",
            },
            {
              number: "02",
              title: "Book An Appointment",
              description:
                "Schedule a date & time for us to know the exact requirements.",
              color: "bg-orange-500",
            },
            {
              number: "03",
              title: "Site-Survey",
              description:
                "Our team will make a survey & estimate client requirements.",
              color: "bg-green-500",
            },
            {
              number: "04",
              title: "Get Services",
              description:
                "We will provide the services as per client requirements.",
              color: "bg-blue-700",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
              <div className="p-8 flex flex-col items-center text-center">
                <div
                  className={`rounded-full ${step.color} text-white flex items-center justify-center w-14 h-14 mb-6`}
                >
                  <span className="text-2xl font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
