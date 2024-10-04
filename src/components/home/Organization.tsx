"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick").then((mod) => mod.default), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Organization() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <section className="bg-[#F7F7F7] py-10 px-4 lg:py-20  w-full h-fit space-y-10">
      <div className="text-center space-y-5">
        <h1 className="font-semibold text-xs lg:text-sm text-[#B6B6B6]">
          TRUSTED BY THOUSANDS OF ORGANIZATIONS
        </h1>
        <div className="h-px w-full bg-[#EEEEEE]"></div>
      </div>

      <div className="lg:main-container">
        <div className="slider-container">
          {isClient && (
            <Slider {...settings2}>
              {logos.map((logo, index) => (
                <div key={index} className="flex justify-center items-center">
                  <img
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className="h-10 md:h-12 lg:h-14 object-contain"
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </section>
  );
}
