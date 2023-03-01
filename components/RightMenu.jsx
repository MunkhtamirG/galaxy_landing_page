import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const RightMenu = ({ setOpenRightMenu }) => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-in" });
  }, []);
  return (
    <div className="h-screen w-full absolute top-0 left-0 bg-black -z-10 flex flex-col items-center justify-center uppercase text-2xl font-thin">
      <Link
        data-aos="fade-left"
        href={"/"}
        onClick={() => setOpenRightMenu(false)}
      >
        Galaxy
      </Link>
      <Link
        data-aos="fade-left"
        data-aos-delay="50"
        onClick={() => setOpenRightMenu(false)}
        href={"#career"}
      >
        Career
      </Link>
      <Link
        data-aos="fade-left"
        data-aos-delay="100"
        onClick={() => setOpenRightMenu(false)}
        href={"#contact"}
      >
        Contact
      </Link>
      <Link
        data-aos="fade-left"
        data-aos-delay="150"
        onClick={() => setOpenRightMenu(false)}
        href={"#about"}
      >
        About
      </Link>
    </div>
  );
};

export default RightMenu;
