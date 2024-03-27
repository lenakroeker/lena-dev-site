import React from "react";
import styled, { keyframes } from "styled-components";
import Bg from "../assets/images/paintbg.jpg";
import { useEffect, useState } from "react";

export default function Background() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);

    // Attach event listeners
    window.addEventListener("scroll", onScroll, { passive: true });

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Div>
      <Img src={Bg} style={{ opacity: 0.45 - offset / 15000 }} />
    </Div>
  );
}

const Div = styled.div`
  width: 90vw;
  height: 100vh;
  position: fixed;
  z-index: -10;

  @media (max-width: 768px) {
  }
`;
const Img = styled.img`
  width: 99vw;
  height: auto;
  opacity: 0.45;
  background: #ffffff;
  object-fit: cover;
  @media (max-width: 768px) {
    height: 100vh;
  }
`;
