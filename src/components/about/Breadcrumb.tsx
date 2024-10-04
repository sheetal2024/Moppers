import React from "react";
import aboutHeader from "@/assets/about.jpg";
import curveborder from "@/assets/shapeOne.webp";

export default function Breadcrumb() {
  return (
    <div className="bg-white">
      <section className="relative w-full h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutHeader.src})` }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950 to-transparent opacity-90"></div>

        <img
          src={curveborder.src}
          className="absolute z-20 bottom-0 left-0 right-0 w-full"
          alt="Curved border"
        />

        <div className="lg:main-container px-4 h-full flex items-center relative z-30">
          <div className="w-full space-y-5">
            <div className="flex items-center gap-5"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">
              About Us
            </h1>
            <p className="text-base md:text-lg text-white">Home . About Us</p>
          </div>
        </div>
      </section>
    </div>
  );
}
