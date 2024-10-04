import React from "react";
import bgimg from "@/assets/cost.png";

export default function CostCalculator() {
  return (
    <div className="bg-white">
      <section className="relative w-full h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${bgimg.src})` }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950 to-transparent opacity-90 z-10"></div>

        <div className="lg:main-container mx-auto px-4 h-full flex py-20 justify-center relative z-30">
          <div className="w-full max-w-md space-y-5 text-center">
            <div className="flex gap-5 justify-center items-center">
              <span className="h-px w-12 bg-gray-400"></span>
              <h2 className="text-sm font-semibold text-gray-300">
                COST CALCULATOR
              </h2>
              <span className="h-px w-12 bg-gray-400"></span>
            </div>
            <h1 className="text-4xl font-bold text-white">
              Be a part of hundreds of happy families.
            </h1>
          </div>
        </div>
      </section>

      <div className="lg:main-container px-4 relative z-20 max-w-6xl justify-center  -mt-32">
        <div className="bg-white h-full p-10 rounded-lg shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div>
              <label className="block text-sm font-bold text-gray-700">
                Choose a Service
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Residential Cleaning</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Type of Clean
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Full Cleaning</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Total Floor Area
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="1990 sq ft"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                ZIP Code
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your area code"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your email address"
              />
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-3">
              <button className="bg-blue-500 text-white py-3 w-full rounded-md hover:bg-blue-600 transition duration-300 text-xs font-semibold">
                GET COST ESTIMATE
              </button>
              <p className="text-sm text-gray-500 italic mt-2">
                Submit this information and we will send you the cost for the
                service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
