import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="contact" className="h-screen flex justify-center items-center">
      <div
        data-aos="fade-down"
        className="h-[50vh] w-[30vw] bg-[rgba(255,255,255,0.1)] rounded-2xl flex flex-col justify-between items-center gap-5 p-20"
      >
        <p className="mb-10 text-4xl">Contact us</p>
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 w-full">
            <p className="w-28">Email:</p>
            <input type="text" className="rounded-md p-2" placeholder="Email" />
          </div>
          <div className="flex items-center gap-3 w-full">
            <p className="w-28">Name:</p>
            <input type="text" className="rounded-md p-2" placeholder="Name" />
          </div>
          <div className="flex items-center gap-3 w-full">
            <p className="w-28">Message:</p>
            <textarea
              name=""
              id=""
              className="rounded-md p-2"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
