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
    <div className="h-screen flex flex-col justify-end gap-32 py-32 transition-all">
      <div data-aos="fade-up" className="text-[180px] font-medium w-full text">
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
      <p data-aos="fade-left" className="text-4xl font-medium">
        Zero-Loss future <br /> through Lifestyle engineering
      </p>
    </div>
  );
};

export default Hero;
