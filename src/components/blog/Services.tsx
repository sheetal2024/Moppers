import { blogSection } from "@/utils/blog";
import React from "react";

export default function Services() {
  return (
    <div className="w-full h-full bg-white">
      <div className="lg:main-container px-4 flex flex-col lg:flex-row gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-20 w-full">
          {blogSection.map((post) => (
            <div
              key={post.id}
              className="bg-white w-fit h-fit rounded-lg shadow-md overflow-hidden"
            >
              <img
                className="w-full h-48 object-cover"
                src={post.image}
                alt={post.title}
              />
              <div className="p-6">
                <p className="text-gray-500 text-sm">
                  {post.category} • {post.readTime}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mt-2">
                  {post.title}
                </h3>
                <div className="mt-4 text-gray-600 flex items-center">
                  <img
                    src={post.avatar}
                    alt="Admin"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <p className="text-sm">
                    {post.author} • {post.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col py-20 gap-10 max-w-xs mx-auto">
          <div className="w-full border border-gray-300 space-y-5 items-center py-10 px-5 rounded-lg">
            <div className="flex items-center gap-5">
              <span className="w-12 h-px bg-black"></span>
              <h1 className="text-sm font-bold">SEARCH</h1>
            </div>
            <div>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="w-full border border-gray-300 space-y-5 items-center py-10 px-5 rounded-lg">
            <div className="flex items-center gap-5">
              <span className="w-12 h-px bg-black"></span>
              <h1 className="text-sm font-bold">RECENT POSTS</h1>
            </div>
            <div className="space-y-5 [&>*]:transition-colors [&>*]:duration-300 [&>*]:cursor-pointer hover:[&>*]:text-blue-500">
              <p>Things to know choosing a cleaning service.</p>
              <p>Things to know choosing a cleaning service.</p>
              <p>Things to know choosing a cleaning service.</p>
            </div>
          </div>

          <div className="w-full border border-gray-300 space-y-5 items-center py-10 px-5 rounded-lg">
            <div className="flex items-center gap-5">
              <span className="w-12 h-px bg-black"></span>
              <h1 className="text-sm font-bold">RECENT COMMENTS</h1>
            </div>
            <div className="space-y-5 [&>*]:transition-colors [&>*]:duration-300 [&>*]:cursor-pointer hover:[&>*]:text-blue-500">
              <p>No recent comments available.</p>
            </div>
          </div>

          <div className="w-full border border-gray-300 space-y-5 items-center py-10 px-5 rounded-lg">
            <div className="flex items-center gap-5">
              <span className="w-12 h-px bg-black"></span>
              <h1 className="text-sm font-bold">ARCHIVES</h1>
            </div>
            <div className="space-y-5 [&>*]:transition-colors [&>*]:duration-300 [&>*]:cursor-pointer hover:[&>*]:text-blue-500">
              <p>May, 2019</p>
            </div>
          </div>

          <div className="w-full border border-gray-300 space-y-5 items-center py-10 px-5 rounded-lg">
            <div className="flex items-center gap-5">
              <span className="w-12 h-px bg-black"></span>
              <h1 className="text-sm font-bold">CATEGORIES</h1>
            </div>
            <div className="space-y-5 [&>*]:transition-colors [&>*]:duration-300 [&>*]:cursor-pointer hover:[&>*]:text-blue-500">
              <p>Cleaning Tips</p>
              <p>Residential</p>
              <p>Services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
