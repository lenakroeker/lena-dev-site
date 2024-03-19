import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function About() {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    const onResize = () => setIsMobile(window.innerWidth <= 768);

    // Attach event listeners
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const calculateOpacity = () => {
    const fadeInThreshold = isMobile ? 800 : 2000; // Adjusted threshold for mobile
    const fadeOutStart = 3000;
    const fadeOutRange = 500;

    if (offset < fadeInThreshold) {
      return 0;
    } else if (offset < fadeOutStart) {
      return (offset - fadeInThreshold) / (fadeOutStart - fadeInThreshold);
    } else if (offset < fadeOutStart + fadeOutRange) {
      return 1 - (offset - fadeOutStart) / fadeOutRange;
    } else {
      return 0;
    }
  };

  return (
    <Container id="about" style={{ opacity: calculateOpacity() }}>
      <TextArea>
        <H3>
          I'm a web developer based in Montreal, Canada. Over the past several
          years my backround in art and and music has evolved into programming
          (and occasionally designing) projects including custom Shopify Themes,
          React apps, and working with a whole gamut of other technologies. My
          passion for Craftsmanship, finely-tuned details, and always picking up
          new tools is a thread which runs through my work in both digital and
          manual creative spheres [She / Her]
        </H3>
      </TextArea>
    </Container>
  );
}

const Container = styled.div`
  background: black;
  position: fixed;
  width: 100vw;
  color: #fffafc;
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 4;
  transition: opacity 0.3s ease; // Add transition for smooth fading
  @media (max-width: 768px) {
  }
`;

const TextArea = styled.div`
  width: 60vw;
  margin: auto;
  padding: 50px 0;
  text-align: center;
  z-index: 100;
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const H3 = styled.h2`
  color: #fffafc;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
