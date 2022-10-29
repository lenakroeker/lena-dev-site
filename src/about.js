import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

export default function about() {
  return (
    <Container id="about">
      <ScrollAnimation animateIn="fadeIn">
        <TextArea>
          <H3>
            I'm a web developer based in Montreal, Canada. Over the past several
            years my backround in art and and music has evolved into programming
            (and occasionally designing) projects including custom Shopify
            Themes, React apps, and working with a whole gamut of other
            technologies. My passion for Craftsmanship, finely-tuned details,
            and always picking up new tools is a thread which runs through my
            work in both digital and manual creative spheres [She / Her]
          </H3>
        </TextArea>
      </ScrollAnimation>
    </Container>
  );
}

const Container = styled.div`
  background: black;
  color: #fff0f5;
  margin: 0;
  height: auto;
`;

const TextArea = styled.div`
  width: 60vw;
  margin: auto;
  padding: 50px 0;
  text-align: center;
  @media (max-width: 768px) {
    width: 75vw;
  }
`;

const H3 = styled.h2`
  color: white;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
