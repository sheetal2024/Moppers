import React from "react";

export default function Herosection() {
  return (
    <div className="relative flex flex-col lg:flex-row justify-between items-start lg:items-center w-full lg:main-container px-4 py-10 lg:py-20 gap-20 lg:gap-24">
      <div className="lg:w-1/2 w-full text-white flex flex-col gap-y-6">
        <div className="flex uppercase items-center gap-2 text-[#001837] font-semibold text-xs">
          <span className="h-px w-12 bg-gray-400"></span>
          About Us
        </div>
        <p className="font-bold text-[#001837] text-2xl lg:text-4xl">
          Elevating Corporate <br />
          Enviroments Through <br />
          Professional Cleaning <br />
          Solutions.
        </p>
        <div className="text-gray-600 text-sm lg:text-md">
          MR Corporate Facilities Services is an independent leader in
          delivering integrated facilities management services across India. For
          more than 12 years, MR Corporate is well acknowledged for providing
          quality services to some of the biggest regional names, including
          leading multinationals in the region.
        </div>
        <div className="bg-[#d07e2c] w-fit text-white uppercase font-semibold text-xs md:text-sm lg:text-base p-3 lg:p-4 rounded-lg cursor-pointer flex items-center gap-2">
          <div className="text-xs font-bolds">Discover More</div>
        </div>
      </div>

      <div className="lg:w-1/2 w-full gap-x-4 p-8 md:p-10 mx-auto space-y-6 bg-slate-200 shadow-lg -mt-24 lg:-mt-60 rounded-md z-20">
        <h1 className="text-[#001837] text-xl lg:text-2xl font-bold text-center">
          Book a Service
        </h1>
        <form>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm lg:text-md text-[#001837] font-semibold"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                className="block text-sm bg-[#F7F7F7] w-full p-2 lg:p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm lg:text-md font-semibold text-[#001837]"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                className="block text-sm bg-[#F7F7F7] w-full p-2 lg:p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="zip"
                className="block text-sm lg:text-md font-semibold text-[#001837]"
              >
                ZIP Code
              </label>
              <input
                id="zip"
                type="tel"
                className="block text-sm bg-[#F7F7F7] w-full p-2 lg:p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-sm lg:text-md font-semibold text-[#001837]"
              >
                Choose a Service
              </label>
              <select
                id="service"
                className="block text-sm bg-[#F7F7F7] w-full p-2 lg:p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option>Residential Cleaning</option>
                <option>Commercial Cleaning</option>
                <option>Construction Cleaning</option>
                <option>Windows Cleaning</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white py-3 lg:py-4 rounded-md hover:bg-blue-700"
          >
            Submit Details
          </button>
        </form>
      </div>
    </div>
  );
}
