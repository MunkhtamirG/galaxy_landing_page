import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="contact"
      className="h-screen flex justify-center items-center px-10 xl:px-0"
    >
      <div
        data-aos="fade-down"
        className="h-[50vh] md:w-[50vw] xl:w-[30vw] w-full bg-[rgba(255,255,255,0.1)] rounded-2xl flex flex-col justify-around items-center gap-5 p-5 lg:p-20"
      >
        <p className="mb-10 text-4xl">Contact us</p>
        <div className="flex flex-col gap-2 md:gap-8">
          <div className="flex items-center flex-col md:flex-row gap-1 md:gap-3 w-full">
            <p className="w-28 hidden md:flex">Email:</p>
            <input
              type="text"
              className="rounded-md p-2 w-full"
              placeholder="Email"
            />
          </div>
          <div className="flex items-center gap-3 w-full">
            <p className="w-28 hidden md:flex">Name:</p>
            <input
              type="text"
              className="rounded-md p-2 w-full"
              placeholder="Name"
            />
          </div>
          <div className="flex items-center gap-3 w-full">
            <p className="w-28 hidden md:flex">Message:</p>
            <textarea
              name=""
              id=""
              className="rounded-md p-2 w-full
              "
              placeholder="Message"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
