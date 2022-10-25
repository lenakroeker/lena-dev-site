import React from "react";
import Hero from "./hero";
import About from "./about";
import Projects from "./projects";
import Techs from "./techs";
import Work from "./work";
import Contact from "./contact";
import Footer from "./footer";
import Socials from "./Socials";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Techs />
      <Work />
      <Contact />
      <Socials />
      <Footer />
    </div>
  );
}
