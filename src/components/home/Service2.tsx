import React from "react";

export default function Service2() {
  return (
    <div>
      <div className="space-y-8 p-20">
        <div className="flex uppercase items-center gap-2 font-semibold text-xs text-[#001837]">
          <span className="h-px w-12 bg-gray-400"></span>
          services
        </div>
        <div className="flex justify-between items-center">
          <div className="text-4xl font-bold text-[#001837]">
            Offering Best
            <br />
            Cleaning Services
          </div>

          <div className="text-md text-[#2e2b57]">
            We are providing all types of cleaning solutions for every small
            <br />
            and big businesses, organizations, and homes.
          </div>

          <button className="flex items-center bg-[#6C7EE1] text-white uppercase text-xs font-bold px-6 py-3 rounded hover:bg-blue-700 transition duration-300">
            More Services
          </button>
        </div>
      </div>
    </div>
  );
}
