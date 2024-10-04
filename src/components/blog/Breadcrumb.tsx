import React from "react";

export default function Breadcrumb() {
  return (
    <section className="w-full bg-[#7B7B7B] h-[40vh] lg:h-[65vh]  flex flex-col justify-center">
      <div className="flex flex-col items-center justify-center h-full text-center lg:main-container px-4 space-y-5">
        <h1 className="text-4xl md:text-5xl text-white font-bold">Blog</h1>
        <div className="flex justify-center gap-5 text-white text-sm md:text-base">
          <a href="/" className="flex items-center gap-1">
            <p className="!text-white">Home</p>
            <span>{">"}</span>
          </a>
          <p className="text-gray-400">Blog</p>
        </div>
      </div>
    </section>
  );
}
