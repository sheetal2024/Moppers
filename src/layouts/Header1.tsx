import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Header1() {
  return (
    <header className="bg-[#F7F7F7] w-auto h-12 lg:flex  justify-between px-36 hidden">
      <div className="flex items-center gap-5 text-xs font-semibold">
        <div className="gap-2 flex">
          <LocalPhoneIcon className="text-[#6382F7] text-xl" />
          <span>+91-8327759341</span>
        </div>
        <div className="gap-2 flex">
          <EmailIcon className="text-[#6382F7] text-xl" />
          <span>info@mrcorporate.in</span>
        </div>
        <div className="gap-2 flex">
          <LocationOnIcon className="text-[#6382F7] text-xl" />
          <span>Bhubneshwar</span>
        </div>
      </div>

      <div className="flex items-center gap-4 text-slate-500">
        <FacebookIcon className="hover:text-black text-2xl" />
        <TwitterIcon className="hover:text-black text-2xl" />
        <InstagramIcon className="hover:text-black text-2xl" />
      </div>
    </header>
  );
}
