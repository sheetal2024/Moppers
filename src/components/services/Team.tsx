import { blogSection } from "@/utils/blog";
import React from "react";
import Image from "next/image";
import { services } from "@/utils/services/index2";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function Team() {
  return (
    <section className="bg-[#F7F7F7] p-10 md:p-20 w-full space-y-10">
      <div className="lg:main-contianer px-4">
        <div className="text-center space-y-5">
          <div className="flex items-center justify-center gap-5 uppercase font-semibold text-sm">
            <span className="h-px w-12 bg-gray-400"></span>
            <div className="text-[#001837]">Our services</div>
            <span className="h-px w-12 bg-gray-400"></span>
          </div>
          <h2 className="text-[#001837] text-center text-3xl md:text-4xl font-semibold">
            We are providing all kind
            <br />
            of cleaning services
          </h2>
        </div>
      </div>
      <div className="lg:main-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((serv) => (
            <div
              key={serv.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
            >
              <img
                src={serv.image}
                alt={serv.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">
                  {serv.title}
                </h3>
                <div className="flex items-center">
                  <div className="space-y-5 gap-2 items-center">
                    {/* <p className="text-gray-400 italic">Starting from</p> */}
                    <p className="text-gray-500 text-sm">{serv.description}</p>
                    <div className="flex items-center text-green-500 font-bold gap-3">
                      Read more
                      <ArrowForwardIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
