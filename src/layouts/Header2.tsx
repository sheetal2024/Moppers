import React from "react";
import logo from "@/assets/Logonew.png";
import { navBar } from "@/utils/navbar";
import Link from "next/link";

export default function Header2() {
  return (
    <header className="w-auto h-auto lg:flex justify-between px-36 py-5 hidden">
      <div className="flex justify-between gap-10">
        <div>
          <img src={logo.src} />
        </div>
        <div className="flex items-center gap-4">
          {navBar.map((navItem) => (
            <Link key={navItem.id} href={navItem.path}>
              <div className="capitalize hover:text-blue-500 transition duration-300 font-semibold">
                {navItem.title}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-between uppercase items-center gap-4 text-sm font-semibold">
        <div className="border-2 border-gray-100 text-[#6382F7] p-4 rounded-lg hover:border-[#6382F7] cursor-pointer">
          get quote
        </div>
        <div className="bg-[#6382F7] rounded-lg p-4 text-white cursor-pointer">
          Contact Us
        </div>
      </div>
    </header>
  );
}
