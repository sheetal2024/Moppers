import React from "react";
import aboutHeader from "@/assets/about.jpg";
import curveborder from "@/assets/shapeOne.webp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
            <div className="flex items-center gap-5">
              <span className="h-px w-12 bg-gray-400"></span>
              <div className="uppercase text-white font-semibold text-sm">
                Our services
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">
              Professional cleaning
              <br />
              services for your homes
              <br />
              and offices
            </h1>
            <p className="text-base md:text-lg text-[#9492B0]">
              We are a professional cleaning company founded in 1997
              <br /> and providing leading commercial and residential cleaning
              <br /> solutions in the United States.
            </p>
            <div className="bg-[#FBA311] w-fit text-white uppercase font-semibold text-xs md:text-sm lg:text-base p-3 lg:p-4 rounded-lg cursor-pointer flex items-center gap-2">
              <div className="text-xs font-bolds">Request a demo</div>
              <ArrowForwardIcon className="text-lg lg:text-xl text-white" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
