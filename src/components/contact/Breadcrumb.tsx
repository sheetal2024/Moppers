import React from "react";
import contactHeader from "@/assets/moppers-contact-header.jpg";
import border from "@/assets/shapeOne.webp";

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="relative w-full h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactHeader.src}) ` }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950 to-transparent opacity-90"></div>

        <img
          src={border.src}
          className="absolute z-20 bottom-0 left-0 right-0 w-full"
          alt="Curved border"
        />

        <div className="lg:main-container px-4 h-full flex items-center relative z-30">
          <div className="w-full space-y-5 ">
            {" "}
            <div className="flex  items-center gap-2">
              <div className="lg:main-container px-4 h-full flex items-center relative z-30">
                <div className="w-full space-y-5">
                  <div className="flex items-center gap-5"></div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">
                    Contact Us
                  </h1>
                  <p className="text-base md:text-lg text-white">
                    Home . Contact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
