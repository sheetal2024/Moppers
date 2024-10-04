import React from "react";
import bgimg from "@/assets/career.jpg";

export default function Breadcrumb() {
  return (
    <div className="bg-white">
      <section className="relative w-full h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgimg.src})` }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950 to-transparent opacity-90"></div>

        <div className="lg:main-container px-4 h-full flex items-center relative z-30">
          <div className="w-full space-y-5">
            <div className="flex items-center gap-5"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">
              Career
            </h1>
            <p className="text-base md:text-lg text-white">Home . Career</p>
          </div>
        </div>
      </section>
    </div>
  );
}
