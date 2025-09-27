import React from "react";
import { assets } from "../assets/assets/assets";

const Footer = () => {
  return (
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
      <div>
        <img src={assets.logo} className="mb-5 w-32" />
        <p className="w-full md:w-2/3 text-gray-600">
          The best choice for buying clothes of unparalleled quality
        </p>
      </div>
    </div>
  );
};

export default Footer;
