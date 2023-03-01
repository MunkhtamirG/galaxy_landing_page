import { CgArrowLongDown } from "react-icons/cg";
import React, { useEffect } from "react";
import Link from "next/link";
import "aos/dist/aos.css";
import AOS from "aos";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      offset: 200,
    });
  }, []);

  return (
    <div className="h-screen flex flex-col justify-end gap-32 py-32 px-10 xl:px-0">
      <div
        data-aos="fade-up"
        className="xl:text-[180px] md:text-[135px] text-[80px] font-medium w-full text"
      >
        <p className="m-0 text-center uppercase">Galaxy</p>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-lg text-center uppercase font-thin"
        >
          EXPLORE more
        </p>
        <Link href={"#career"} data-aos="fade-up" data-aos-delay="600">
          <CgArrowLongDown className="m-auto text-2xl mt-4" />
        </Link>
      </div>
      <p
        data-aos="fade-left"
        className="xl:text-[36px] md:text-[30px] text-[24px] font-medium"
      >
        Zero-Loss future <br /> through Lifestyle engineering
      </p>
    </div>
  );
};

export default Hero;
