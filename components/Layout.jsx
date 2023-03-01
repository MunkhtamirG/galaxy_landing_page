import React from "react";
import Navbar from "./Navbar";
import Stars from "./Stars";

export default function Layout({ children }) {
  return (
    <div className="font-[GIP] text-white max-w-[1280px] m-auto w-full">
      <Navbar />
      <Stars />
      {children}
    </div>
  );
}
