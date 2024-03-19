import React from "react";
import styled, { keyframes } from "styled-components";
import Bg from "../assets/images/bg.jpg";

export default function Background() {
  return (
    <Div>
      <Img src={Bg} />
    </Div>
  );
}

const Div = styled.div`
  width: 90vw;
  height: 100vh;
  position: fixed;
  z-index: -10;

  @media (max-width: 768px) {
    display: none;
  }
`;
const Img = styled.img`
  width: 99vw;
  height: auto;
  opacity: 0.15;
  background: #defaff;
`;
