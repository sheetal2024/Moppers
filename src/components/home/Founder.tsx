import React from "react";
import founder from "@/assets/founder.png";

export default function Founder() {
  return (
    <section className="relative bg-white w-full h-[500px] lg:h-[600px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${founder.src})` }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-l from-blue-950 via-blue-950 to-transparent opacity-95"></div>

      <div className="relative lg:main-container px-4 z-10 flex flex-col lg:flex-row justify-between items-center h-full text-white py-10 lg:py-0">
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end items-center mb-8 lg:mb-0">
          <button className="flex items-center justify-center w-24 h-24 lg:w-40 lg:h-40 bg-white bg-opacity-20 rounded-full">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center">
              <span className="text-3xl lg:text-4xl text-[#1C1959]">▶️</span>
            </div>
          </button>
        </div>

        <div className="lg:w-1/2 w-full space-y-6 text-center lg:text-left">
          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="h-px w-12 bg-gray-400"></span>
              <h2 className="text-sm font-semibold uppercase tracking-wide">
                Founder’s Message
              </h2>
            </div>

            <p className="text-lg lg:text-2xl italic">
              “As people are getting busy in their work life, it is so difficult
              for them to manage time for cleaning their spaces by themselves.
              So here we understand people’s problems and help them with
              cleanings.”
            </p>

            <div>
              <p className="font-bold mt-4">Christopher Duncan</p>
              <p className="text-sm">Founder, Moppers</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start space-x-8 lg:space-x-12 text-2xl lg:text-4xl font-bold">
            <div className="flex flex-col items-center">
              <span>450</span>
              <span className="text-xs lg:text-base font-normal">Projects</span>
            </div>
            <div className="flex flex-col items-center">
              <span>3k</span>
              <span className="text-xs lg:text-base font-normal">Clients</span>
            </div>
            <div className="flex flex-col items-center">
              <span>1k</span>
              <span className="text-xs lg:text-base font-normal">
                Employees
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span>26</span>
              <span className="text-xs lg:text-base font-normal">Awards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
