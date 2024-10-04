import React from "react";
import aboutHeader from "@/assets/moppers-header.jpg";
import border from "@/assets/shapeOne.webp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Breadcrumb() {
  return (
    <div className="bg-white">
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutHeader.src})` }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950 to-transparent opacity-90"></div>

        <img
          src={border.src}
          className="absolute z-20 bottom-0 left-0 right-0 w-full"
          alt="Curved border"
        />

        <div className="relative lg:main-container px-4 h-full flex items-center z-30">
          <div className="w-full space-y-5">
            <div className="flex items-center gap-5">
              <div className="uppercase text-white font-semibold text-sm">
                Welcome to MR Corporate
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-light">
              Professional Facility
              <br />
              Management <br />
              Solutions
            </h1>

            <p className="text-sm md:text-base lg:text-lg text-[#9492B0]">
              Top Notch, Quality Facility Management Solutions to government &
              <br /> Private Sectors in various domains.
            </p>

            <div className="bg-[#d07e2c] w-fit text-white uppercase font-semibold text-xs md:text-sm lg:text-base p-3 lg:p-4 rounded-lg cursor-pointer flex items-center gap-2">
              <div className="text-xs font-bolds">Contact Us</div>
              <ArrowForwardIcon className="text-lg lg:text-xl text-white" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
