import React from "react";
import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Container>
      <TextArea style={{ right: offset * 1.5 }}>
        <H1>Lena Kroeker</H1>
        <H2>Web Development / UX</H2>
      </TextArea>
    </Container>
  );
}

const Container = styled.div`
  height: 160vh;
  width: 98vw;
  background: transparent;
  margin: 0;
  @media (max-width: 768px) {
  }
`;

const TextArea = styled.div`
  position: fixed;
  width: 50vw;

  padding-top: 40vh;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const H1 = styled.h1`
  color: black;
  margin-top: 0;
  font-size: 60px;
  font-weight: light;
  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const H2 = styled.h2`
  color: black;
  margin: -1vh auto 1vh auto;

  @media (max-width: 768px) {
    font-size: 20px;
`;
