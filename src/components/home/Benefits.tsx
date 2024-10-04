import React from "react";
import benefits from "@/assets/benefits.png";
import wipingHand from "@/assets/wiping-gloves-black-pair.png";

export default function Benefits() {
  return (
    <div className="lg:main-container px-4 py-12 flex flex-col lg:flex-row items-center gap-10">
      <div className="lg:w-1/2 w-full space-y-10">
        <div className="flex flex-col space-y-5">
          <div className="flex items-center gap-2 uppercase font-semibold text-xs text-[#001837]">
            <span className="h-px w-12 bg-gray-400"></span>
            Why Choose Us
          </div>
          <h2 className="text-4xl font-bold text-[#001837]">
            Amazing Benefits with us
          </h2>
          <p className="text-sm text-gray-500">
            Shall under in yielding saying given dominion don't of two god which
            said. Creature dominion was the good creepeth to give bring doesn't
            first shall two signs is a gathered set of people.
          </p>
          <button className="text-blue-500 text-left underline text-md">
            Book a Service Now
          </button>
        </div>

        <div className="h-px w-full bg-gray-500"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Experienced Staff",
              description:
                "Professional and experienced staff ready to help you anytime.",
            },
            {
              title: "Best Equipment",
              description:
                "Modern and high-quality equipment used for top-notch service.",
            },
            {
              title: "Flexible Schedule",
              description:
                "We offer flexible timing to suit your availability without hassle.",
            },
            {
              title: "Affordable Pricing",
              description:
                "Get the best services at the most competitive prices in the market.",
            },
          ].map((item, index) => (
            <div key={index} className="flex gap-5 items-start">
              <div className="p-3 bg-[#FBBF24] h-fit w-fit rounded-full">
                <img
                  src={wipingHand.src}
                  alt="Wiping Hand"
                  className="size-6 filter invert brightness-0"
                />
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-[#001837]">{item.title}</h3>
                <p className="text-sm text-[#565656]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:w-1/2 w-full flex justify-center">
        <img
          src={benefits.src}
          alt="Benefits"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
}
