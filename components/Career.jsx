import React, { useEffect } from "react";
import Image from "next/image";
import BG1 from "../public/bg1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Career = () => {
  useEffect(() => {
    AOS.init({ offset: 200, easing: "ease-in-out", once: true });
  }, []);
  return (
    <div
      id="career"
      className="flex justify-center items-center h-screen gap-40"
    >
      <div data-aos="fade-right">
        <Image src={BG1} height={500} />
      </div>
      <div className="h-[500px] flex flex-col justify-between font-thin uppercase text-2xl">
        <p
          data-aos="fade-left"
          data-aos-delay="100"
          className="bg-[rgba(255,255,255,0.1)] py-5 px-10 rounded-xl"
        >
          Lorem ipsum dolor sit
        </p>
        <p
          data-aos="fade-left"
          data-aos-delay="200"
          className="bg-[rgba(255,255,255,0.1)] py-5 px-10 rounded-xl"
        >
          Lorem ipsum dolor sit
        </p>
        <p
          data-aos="fade-left"
          data-aos-delay="300"
          className="bg-[rgba(255,255,255,0.1)] py-5 px-10 rounded-xl"
        >
          Lorem ipsum dolor sit
        </p>
        <p
          data-aos="fade-left"
          data-aos-delay="400"
          className="bg-[rgba(255,255,255,0.1)] py-5 px-10 rounded-xl"
        >
          Lorem ipsum dolor sit
        </p>
      </div>
    </div>
  );
};

export default Career;
