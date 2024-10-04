"use client";
import React from "react";
import dynamic from "next/dynamic";
import img1 from "@/assets/testimonial-1.jpg";
import img2 from "@/assets/testimonial-2.jpg";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Testimonial() {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      img: img1.src,
      name: "Chi R. Quinlan",
      location: "New York",
      testimonial:
        "Male saw behold saw darkness were our you'll without day air above lights, god you heaven moving you're yielding place second, it face it day sea whose heaven moving you're yielding place second, it face it day sea whose moving.",
    },
    {
      img: img2.src,
      name: "Donald Slade",
      location: "Chicago",
      testimonial:
        "To us man seasons moveth the air two whales image is unto face moveth beginning brought years over, form fish called, rule one stars together Shall under In yielding saying given dominion don't of two people.",
    },
  ];
  return (
    <section className="bg-[#F7F7F7] p-10 md:p-20 w-full space-y-10">
      <div className="lg:main-contianer px-4">
        <div className="text-center space-y-5">
          <div className="flex items-center justify-center gap-5 uppercase font-semibold text-sm">
            <span className="h-px w-12 bg-gray-400"></span>
            <div className="text-[#001837]">Testimonial</div>
            <span className="h-px w-12 bg-gray-400"></span>
          </div>
          <h2 className="text-[#001837] text-center text-3xl md:text-4xl font-semibold">
            Trusted by thousands of
            <br /> people & companies.
          </h2>
        </div>

        <div className="slider-container px-4 md:px-20">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="md:p-8 flex items-center justify-center"
              >
                <div className="bg-white p-4 shadow-lg rounded-md space-y-5 w-full max-w-md h-[40vh]">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-5">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h3 className="text-[#001837] font-semibold">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500 italic">
                          {item.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex text-yellow-500">★★★★★</div>
                  </div>
                  <p className="text-gray-600 italic">{item.testimonial}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
