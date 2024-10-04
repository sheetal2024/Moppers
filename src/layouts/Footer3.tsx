import React from "react";
import Link from "next/link";
import footerlogo from "@/assets/Logonew.png";
import { navBar } from "@/utils/navbar";
import { servicesFooter } from "@/utils/services";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { posts } from "@/utils";
import {
  companyFooter,
  importantFooter,
  quicklinksFooter,
} from "@/utils/footer";

export default function Footer2() {
  return (
    <>
      <section className="bg-[#d9d9eb] w-full h-fit py-10">
        <div className="lg:main-container px-4">
          <div className=" grid grid-cols-1 md:grid-cols-5 gap-10">
            <div className="space-y-5">
              <img src={footerlogo.src} className="w-40" alt="Moppers Logo" />
              <p className="text-gray-500">
                One stop Solutions For All Your Facility Management Needs
              </p>
              <p className="text-gray-500">Email us at: info@mrcorporate.in</p>

              <div className="flex gap-5 text-gray-500 transition-colors duration-300 cursor-pointer hover:text-gray-800">
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
              </div>
            </div>

            <div className="space-y-5">
              <h1 className="font-semibold text-gray-500">COMPANY</h1>
              <div className="flex flex-col gap-3">
                {companyFooter.map((companyItem) => (
                  <Link key={companyItem.id} href={companyItem.path}>
                    <div className="text-gray-500 capitalize hover:text-gray-800 transition duration-300">
                      {companyItem.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <h1 className="font-semibold text-gray-500">IMPORTANT</h1>
              <div className="flex flex-col gap-3">
                {importantFooter.map((importantItem) => (
                  <Link key={importantItem.id} href={importantItem.path}>
                    <div className="text-gray-500 capitalize hover:text-gray-800 transition duration-300">
                      {importantItem.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <h1 className="font-semibold text-gray-600">QUICK LINKS</h1>
              <div className="flex flex-col gap-3">
                {quicklinksFooter.map((quiclinkItem) => (
                  <Link key={quiclinkItem.id} href={quiclinkItem.path}>
                    <div className="text-gray-500 capitalize hover:text-gray-800 transition duration-300">
                      {quiclinkItem.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <h1 className="font-semibold text-gray-500">OFFICIAL INFO</h1>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 text-gray-500">
                  <LocationOnIcon />
                  <p className=" hover:text-gray-800 transition duration-300">
                    Head Office : Plot No. 42, Ground Floor, 12 Mile Stone
                    Patrapada, Bhubaneswar, Odisha, 751019
                  </p>
                </div>
                <div className="flex gap-2 text-gray-500">
                  <MailOutlineIcon />
                  <p className=" hover:text-gray-800 transition duration-300">
                    Email: info@mrcorporate.in
                  </p>
                </div>
                <div className="flex gap-2 text-gray-500">
                  <LocalPhoneIcon />
                  <p className=" hover:text-gray-800 transition duration-300">
                    Phone: +91-8327759341
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
