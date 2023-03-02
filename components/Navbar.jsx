import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CgMenuGridR } from "react-icons/cg";
import RightMenu from "./RightMenu";
import Head from "next/head";

const Navbar = () => {
  const [openRightMenu, setOpenRightMenu] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-down"
      className="flex justify-between m-auto items-center py-10 fixed max-w-[1280px] w-full z-20 px-10 xl:px-0"
    >
      <Head>
        <title>Galaxy</title>
        <link rel="icon" href="black-hole.png" />
      </Head>
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
        <button onClick={() => setOpenRightMenu(!openRightMenu)}>
          <CgMenuGridR />
        </button>
      </div>
      {openRightMenu ? <RightMenu setOpenRightMenu={setOpenRightMenu} /> : null}
    </div>
  );
};

export default Navbar;
