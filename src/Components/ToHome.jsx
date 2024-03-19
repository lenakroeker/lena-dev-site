import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export default function ToHome() {
  return <LinkB to="/"> Home</LinkB>;
}

const LinkB = styled(Link)`
  right: 10px;
  position: fixed;
  top: 5px;
  color: black;
  text-decoration: none;
  width: 20vw;
  z-index: 300;

  @media (max-width: 768px) {
    left: 10px;
  }
`;
