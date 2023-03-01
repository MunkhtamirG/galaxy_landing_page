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
      className="flex flex-col md:flex-row justify-center items-center h-screen gap-2 md:gap-10 lg:gap-40 px-10 py-20 xl:px-0 xl:py-0"
    >
      <div data-aos="fade-right">
        <Image
          src={BG1}
          alt="image"
          className="xl:w-[500px] md:w-[400px] w-[280px]"
        />
      </div>
      <div className="h-[500px] flex flex-col justify-between font-thin uppercase xl:text-2xl text-lg">
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
          className="bg-[rgba(255,255,255,0.1)] py-5 px-10 rounded-xl mt-2 md:m-0"
        >
          Lorem ipsum dolor sit
        </p>
        <p
          data-aos="fade-left"
          data-aos-delay="300"
          className="bg-[rgba(255,255,255,0.1)] py-5 px-10 rounded-xl mt-2 md:m-0"
        >
          Lorem ipsum dolor sit
        </p>
        <p
          data-aos="fade-left"
          data-aos-delay="400"
          className="bg-[rgba(255,255,255,0.1)] py-5 px-10 rounded-xl mt-2 md:m-0"
        >
          Lorem ipsum dolor sit
        </p>
      </div>
    </div>
  );
};

export default Career;
