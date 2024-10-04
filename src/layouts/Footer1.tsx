import React from "react";

export default function Footer1() {
  return (
    <div className="bg-gradient-to-r from-[#1d2243] to-[#6483F6] w-full h-auto py-12 px-6 lg:py-24">
      <div className="main-container flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto gap-8">
        <div className=" lg:text-left">
          <div className="flex gap-2 text-white uppercase items-center text-xs font-semibold mb-5 lg:justify-start">
            <span className="h-px w-12 bg-gray-400"></span>subscribe
          </div>
          <h2 className="text-white text-2xl md:text-4xl">
            Join our subscription and <br /> get instant{" "}
            <span className="font-bold">updates</span> about <br />
            <span className="font-bold">offers</span> and{" "}
            <span className="font-bold">discounts.</span>
          </h2>
        </div>

        <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email address to subscribe"
            className="p-4 text-sm rounded-lg sm:rounded-l-lg sm:rounded-none outline-none w-full lg:w-80"
          />
          <button className="bg-[#fbbf24] text-white font-bold text-sm px-6 py-4 rounded-lg sm:rounded-r-lg sm:rounded-none w-full sm:w-auto">
            Go
          </button>
        </div>
      </div>
    </div>
  );
}
