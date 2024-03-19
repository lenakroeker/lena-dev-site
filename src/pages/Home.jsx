import React from "react";
import LogoDiv from "../Components/Logo";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Techs from "../Components/Techs";
import Work from "../Components/Work";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Socials from "../Components/Socials";
import Header from "../Components/Header";
import styled from "styled-components";

export default function Home() {
  return (
    <Div>
      <Header />

      <LogoDiv />

      <About />

      <Hero />

      <Projects />
      <Techs />

      <Work />

      <Contact />
      <Socials />
      <Footer />
    </Div>
  );
}
const Div = styled.div``;
