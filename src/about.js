import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

export default function about() {
  return (
    <Container id="about">
      <ScrollAnimation animateIn="fadeIn">
        <TextArea>
          <H2>
            I'm an artist who builds websites blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah, Montreal, Canada (She / Her)
          </H2>
        </TextArea>
      </ScrollAnimation>
    </Container>
  );
}

const Container = styled.div`
  background: black;

  margin: 0;
  height: auto;
`;

const TextArea = styled.div`
  width: 60vw;
  margin: auto;
  padding: 50px 0;
  text-align: center;
`;

const H1 = styled.h1`
  color: white;
  margin-top: 0;
`;

const H2 = styled.h2`
  color: white;
  font-weight: 100;
  text-shadow: -1px 1px 1px white, 1px -1px 1px white, 1px 1px 1px white,
    0 2px #ff9e9e, 0 0 1px white, 0 0 1px white, 0 0 1px #ff9e9e,
    0 0 1px #91ffff, 0 0 2px #ff9e9e, 0 0 1px #ff9e9e, 0 0 1px #ff9e9e,
    0 0 1px #ff9e9e;
`;
