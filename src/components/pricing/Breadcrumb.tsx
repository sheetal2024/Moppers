import React from "react";
import pricingHeader from "@/assets/moppers-pricing-header-1.jpg";
import curveborder from "@/assets/shapeOne.webp";
import { Check } from "lucide-react";

export default function Breadcrumb() {
  return (
    <div className="bg-white">
      <section className="relative w-full h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${pricingHeader.src})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950 to-transparent opacity-90 z-10"></div>
        <img
          src={curveborder.src}
          className="absolute z-20 bottom-0 left-0 right-0 w-full"
          alt="Curved border"
        />
        <div className="container mx-auto px-4 h-full flex py-20 justify-center relative z-30">
          <div className="w-full max-w-md space-y-5 text-center">
            <div className="flex items-center justify-center gap-5">
              <span className="h-px w-12 bg-gray-400"></span>
              <div className="uppercase text-white font-semibold text-sm">
                PRICING
              </div>
              <span className="h-px w-12 bg-gray-400"></span>
            </div>
            <h1 className="text-3xl md:text-5xl text-white font-bold">
              Our Pricing is Simple
            </h1>
            <p className="text-base md:text-lg text-gray-300">
              We offer simple and flexible pricing for all types of cleaning,
              whether it is residential or industrial.
            </p>
          </div>
        </div>
      </section>

      <div className="relative lg:main-container px-4 z-20 max-w-6xl flex flex-col md:flex-row justify-center items-center mx-auto -mt-72">
        <div className="bg-white p-10 w-full max-w-xs rounded-lg space-y-10 shadow-xl text-center flex flex-col mb-10 md:mb-0">
          <span className="text-navy-900 text-5xl md:text-6xl font-bold">
            $95
          </span>
          <span className="text-2xl md:text-3xl font-semibold">
            Basic Home Plan
          </span>
          <span className="text-gray-600 text-sm">
            per clean / billed weekly
          </span>
          <button className="bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition duration-300 text-xs font-semibold">
            GET THIS PLAN
          </button>
        </div>

        <div className="bg-[#60CACA] p-4 w-full max-w-xs lg:rounded-r-lg  space-y-10 shadow-xl flex flex-col">
          <h2 className="text-white text-xl md:text-2xl font-bold leading-tight">
            Get 30% Discount on Your First Month
          </h2>

          <ul className="space-y-2">
            {[
              "Custom schedules every day.",
              "Carpet Cleaning.",
              "Windows Cleaning.",
              "Floor Vacuum Clean.",
              "Bathrooms Cleaning.",
              "Kitchen Cleaning.",
            ].map((item, index) => (
              <li key={index} className="flex items-center text-white">
                <Check className="mr-2" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
