import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CgMenuGridR } from "react-icons/cg";

const Navbar = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-down"
      className="flex justify-between m-auto items-center py-10 fixed max-w-[1280px] w-full z-10 px-10 xl:px-0"
    >
      <Link href={"/"} className="text-3xl font-medium">
        Galaxy
      </Link>
      <ul className="md:flex gap-10 hidden">
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
      <div className="md:hidden block text-3xl">
        <CgMenuGridR />
      </div>
    </div>
  );
};

export default Navbar;
