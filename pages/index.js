import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function index() {
  return (
    <Layout>
      <Hero />
      <Career />
      <Contact />
      <About />
    </Layout>
  );
}
