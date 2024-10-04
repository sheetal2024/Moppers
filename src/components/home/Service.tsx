"use client";
import React from "react";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Service() {
  const logos = [
    "https://www.slashcreative.co/themes/moppers-version-2/wp-content/uploads/2020/03/logo-large-1.jpg",
    "https://www.slashcreative.co/themes/moppers-version-2/wp-content/uploads/2020/03/logo-large-2.jpg",
    "https://www.slashcreative.co/themes/moppers-version-2/wp-content/uploads/2020/03/logo-large-3.jpg",
    "https://www.slashcreative.co/themes/moppers-version-2/wp-content/uploads/2020/03/logo-large-4.jpg",
    "https://www.slashcreative.co/themes/moppers-version-2/wp-content/uploads/2020/03/logo-large-5.jpg",
  ];

  const settings2 = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <section className="bg-[#F7F7F7] p-20 w-full h-fit space-y-10">
      <div className="text-center space-y-5">
        <h1 className="font-semibold text-sm text-[#B6B6B6]">
          TRUSTED BY THOUSANDS OF ORGANIZATIONS
        </h1>
        <div className="h-px w-full bg-[#EEEEEE]"></div>
      </div>

      <div className="main-container cursor-pointer">
        <div className="slider-container">
          <div>
            <Slider {...settings2}>
              {logos.map((logo, index) => (
                <div key={index} className=" items-center">
                  <img src={logo} className="h-14" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
