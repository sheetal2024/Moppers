"use client";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import moppersLogo from "@/assets/logo.png";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import { navBar } from "@/utils/navbar";

export default function ResponsiveHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="lg:hidden">
      <header className="bg-white w-full flex items-center px-4 justify-between lg:hidden h-28 fixed top-0 left-0 right-0 z-50">
        <div>
          <img src={moppersLogo.src} alt="Moppers Logo" className="w-44" />
        </div>
        <button onClick={toggleMenu}>
          <MenuIcon />
        </button>
      </header>

      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-10 py-16 flex flex-col gap-8">
          <div className="mb-10">
            <div className="flex justify-end">
              <button onClick={toggleMenu} className="flex">
                <CloseIcon />
              </button>
            </div>

            <nav className="flex flex-col space-y-3">
              <ul className="space-y-3">
                {navBar.map((navItem) => (
                  <li key={navItem.id}>
                    <a href={navItem.path}>
                      <div className="text-2xl font-bold font-mono capitalize hover:text-blue-500 transition duration-300">
                        {navItem.title}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-2xl font-bold font-mono capitalize hover:text-blue-500 transition duration-300"
                >
                  GET QUOTE
                </a>
                <a
                  href="#"
                  className="block text-2xl font-bold font-mono capitalize hover:text-blue-500 transition duration-300"
                >
                  BOOK FREE DEMO
                </a>
              </div>
            </nav>
          </div>

          <div className=" items-center space-y-1 text-lg">
            <div className="flex gap-2 items-center">
              <PhoneIcon className="text-[#6382F7] text-2xl" />
              <span>+1 (123) 1800 567 8990</span>
            </div>
            <div className="flex gap-2 items-center">
              <AccessTimeIcon className="text-[#6382F7] text-2xl" />
              <span>Mon - Fri: 9:00 - 19:00 / Closed on Weekends</span>
            </div>
            <div className="flex gap-2 items-center">
              <EmailIcon className="text-[#6382F7] text-2xl" />
              <span>office@example.com</span>
            </div>
          </div>
          <div className=" flex gap-3 text-gray-500 [&>*]:transition-colors [&>*]:duration-300 [&>*]:cursor-pointer hover:[&>*]:text-white">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}
