import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-down"
      className="flex justify-between m-auto items-center py-10 fixed max-w-[1280px] w-full z-10"
    >
      <Link href={"/"} className="text-3xl font-medium">
        Galaxy
      </Link>
      <ul className="flex gap-10">
        <li>
          <Link href={"#career"} className="uppercase">
            career
          </Link>
        </li>
        <li>
          <Link href={"#contact"} className="uppercase">
            contact us
          </Link>
        </li>
        <li>
          <Link href={"#about"} className="uppercase">
            about
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
