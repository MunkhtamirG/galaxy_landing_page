import { RiInstagramLine, RiTwitterLine, RiYoutubeLine } from "react-icons/ri";
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row w-full py-5 border-t border-[rgba(255,255,255,0.5)]  font-thin px-10 xl:px-0">
      <p>All rights reserved ©</p>
      <p>Ozy</p>
      <div className="flex items-centers gap-2">
        <RiInstagramLine />
        <RiYoutubeLine />
        <RiFacebookLine />
        <RiTwitterLine />
        <RiLinkedinLine />
      </div>
    </div>
  );
};

export default Footer;
