import React from "react";
import About from "../pages/About";
import Hero from "./Hero";
import Services from "../pages/Services";
import Counter from "../pages/Counter";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Counter />
      <Portfolio />
      <Contact />
    </div>
  );
}
