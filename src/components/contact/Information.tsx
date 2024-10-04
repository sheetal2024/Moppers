import React from "react";

export default function Information() {
  return (
    <div className="lg:main-container w-full h-fit px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2 w-full lg:pr-8 space-y-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-950">
            You're always welcome
          </h2>
          <p className="text-gray-600">
            Shall under in yielding saying given dominion don't of two god which
            said. Creature dominion was the good creepeth to give bring doesn't
            first shall two signs.
          </p>
          <div className="h-px w-full bg-gray-400"></div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            {[
              {
                city: "New York",
                address: "2333 Michael Street",
                location: "Houston, NY 77074",
                phone: "+1 806-350-7213",
              },
              {
                city: "San Francisco",
                address: "2934 Jerry Dove Drive",
                location: "Florence, SF 29501",
                phone: "+1 717-594-8131",
              },
              {
                city: "Chicago",
                address: "2168 Griffin Street",
                location: "Phoenix, AZ 85012",
                phone: "+1 989-213-2974",
              },
              {
                city: "Washington DC",
                address: "632 Wood Street",
                location: "Saginaw, WD 48607",
                phone: "+1 740-584-3040",
              },
            ].map((office, index) => (
              <div key={index} className="mb-6">
                <h3 className="font-bold text-blue-950">{office.city}</h3>
                <p className="text-gray-600">{office.address}</p>
                <p className="text-gray-600">{office.location}</p>
                <a
                  href={`tel:${office.phone}`}
                  className="text-blue-500 hover:underline"
                >
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 w-full z-40 lg:-mt-56 ">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="">
              <h2 className="text-2xl font-bold text-blue-950 mb-6">
                Send your Queries
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Residential Cleaning</option>
                </select>
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-300"
                >
                  SUBMIT DETAILS
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
