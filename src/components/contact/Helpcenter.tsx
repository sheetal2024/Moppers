import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";

export default function HelpCenter() {
  return (
    <div className="lg:main-container mx-auto px-4 py-16 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <LocationOnIcon className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Office Address</h3>
          <p className="text-gray-600 text-sm">
            D-2/9, Madhusudan Samabaya Nagar, Dumduma, Khandagiri, Bhubaneswar,
            Odisha, 751019
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <CallIcon className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Mobile Number</h3>
          <p className="text-gray-600 text-sm">
            +91 83277 59341 <br /> +91 98279 41449
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <EmailIcon className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Mail Address</h3>
          <p className="text-gray-600 text-sm">
            info@mrcorporate.in <br /> admin@mrcorporate.in
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <LanguageIcon className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Website Address</h3>
          <p className="text-gray-600 text-sm">www.mrcorporate.in</p>
        </div>
      </div>
    </div>
  );
}
