"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import mopperimg from "@/assets/moppers-home-features-1.png";
import { services } from "@/utils/services/index2";
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Information() {
  // Slider settings with responsive breakpoints
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-white">
      <section className=" w-full  lg:main-container ">
        <div className="  flex flex-col justify-center items-center px-4 py-10 lg:py-16">
          <div className="w-full max-w-4xl space-y-5 text-center mb-8">
            <div className="flex gap-5 justify-center items-center">
              <span className="h-px w-12 bg-gray-400"></span>
              <h2 className="text-xs md:text-sm font-semibold uppercase text-gray-800">
                Our Services
              </h2>
              <span className="h-px w-12 bg-gray-400"></span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
              Corporate Services
            </h1>
          </div>
        </div>
        <div className="slider-container py-8">
          <Slider {...settings}>
            {services.map((service) => (
              <div key={service.id} className="px-2">
                <div className="bg-white h-full rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 md:h-56 lg:h-64">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-navy-blue">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                    <a
                      href="#"
                      className="text-blue-500 font-semibold hover:underline"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}
