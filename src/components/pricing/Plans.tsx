import { Check } from "lucide-react";
import React from "react";

export default function Plans() {
  return (
    <section className="w-full lg:main-container px-4 p-10 md:p-20">
      <div className="space-y-5 text-center">
        <div className="flex items-center gap-5 uppercase font-semibold text-sm justify-center">
          <span className="h-px w-12 bg-gray-400"></span>
          <div className="text-[#001837]">Plans</div>
          <span className="h-px w-12 bg-gray-400"></span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold">
          Simple and Affordable
          <br /> Plans for Everyone
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-5 mx-auto">
          <div className="bg-[#F7F7F7] rounded-lg p-8 max-w-sm shadow-md flex flex-col">
            <h3 className="text-2xl font-bold text-navy-900">Small Business</h3>

            <div className="mt-6">
              <span className="text-navy-900 text-6xl font-bold">$199</span>
              <span className="text-gray-600 text-sm ml-2">
                per clean / billed weekly
              </span>
            </div>

            <p className="mt-4 text-gray-700">
              This plan is suitable for small businesses and offices. Simply
              send us the size of your company, and we will get back to you with
              the plan.
            </p>

            <ul className="mt-6 space-y-2">
              {[
                "Custom schedules every day.",
                "Desks and workstations cleaning.",
                "Washrooms cleaning.",
                "Floor cleaning.",
                "Waiting area cleaning.",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-blue-500 mr-2" size={20} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-blue-500 text-white py-3 rounded-md mt-8 font-semibold hover:bg-blue-600 transition-colors">
              GET THIS PLAN
            </button>
          </div>

          <div className="bg-[#F7F7F7] rounded-lg p-8 max-w-sm shadow-md flex flex-col">
            <h3 className="text-2xl font-bold text-navy-900">Large Business</h3>

            <div className="mt-6">
              <span className="text-navy-900 text-6xl font-bold">$399</span>
              <span className="text-gray-600 text-sm ml-2">
                per clean / billed weekly
              </span>
            </div>

            <p className="mt-4 text-gray-700">
              This plan is suitable for larger businesses and offices. Simply
              send us the size of your company, and we will get back to you with
              the plan.
            </p>

            <ul className="mt-6 space-y-2">
              {[
                "Custom schedules every day.",
                "Desks and workstations cleaning.",
                "Washrooms cleaning.",
                "Floor cleaning.",
                "Waiting area cleaning.",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-blue-500 mr-2" size={20} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-blue-500 text-white py-3 rounded-md mt-8 font-semibold hover:bg-blue-600 transition-colors">
              GET THIS PLAN
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
