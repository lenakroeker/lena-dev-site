import React from "react";
import styled, { keyframes } from "styled-components";
import ContactForm from "./ContactForm";
import { useEffect, useState } from "react";

export default function Contact() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <Container
        id="contact"
        style={{
          top: offset < 5500 ? "-100vh" : offset - 6000,
        }}
      >
        <H3>Let's Work Together!</H3>
        <ContactForm />
      </Container>
      <MobileContainer
        id="contact"
        style={{
          top: offset < 6000 ? "-200vh" : offset - 7000,
        }}
      >
        <H3>Let's Work Together!</H3>
        <ContactForm />
      </MobileContainer>
    </>
  );
}

const neon = keyframes`
  0% {
    text-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white, 1px 1px 1px white,
    0 0 3px white, 0 0 1px white, 0 0 2px white,
    0 0 3px #FF9E9E, 0 0 4px #FF9E9E, 0 0 5px #FF9E9E, 0 0 20px #c896fa, 0 0 100px #FF9E9E, 0 0 200px #FF9E9E;
  }
  20% {
    text-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white, 1px 1px 1px white,
    0 0 3px white, 0 0 10px white, 0 0 20px white,
    0 0 30px #FF9E9E, 0 0 40px #FF9E9E, 0 0 50px #FF9E9E, 0 0 70px #FF9E9E, 0 0 100px #75ffca, 0 0 200px #FF9E9E;
  }
  30% {
    text-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white,
      1px 1px 1px white, 0 2px white, 0 0 3px white, 0 0 5px white,
      0 0 10px #ff9e9e, 0 0 15px #ff9e9e, 0 0 20px #c896fa, 0 0 30px #ff9e9e,
      0 0 40px #ff9e9e, 0 0 50px #75ffca;}
  35% {
    text-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white, 1px 1px 1px white,
    0 0 3px white, 0 0 10px white, 0 0 20px white,
    0 0 30px #FF9E9E, 0 0 40px #FF9E9E, 0 0 50px #FF9E9E, 0 0 70px #FF9E9E, 0 0 100px #FF9E9E, 0 0 200px #FF9E9E;
  }
45% {
    text-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white,
      1px 1px 1px white, 0 2px white, 0 0 3px white, 0 0 5px white,
      0 0 10px #75ffca, 0 0 5px #ff9e9e, 0 0 20px #c896fa, 0 0 10px #ff9e9e,
      0 0 10px #ff9e9e, 0 0 5px #91ffff;}
  50% {
    text-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white,
      1px 1px 1px white, 0 2px white, 0 0 3px white, 0 0 5px white,
      0 0 15px #91ffff, 0 0 25px #ff9e9e, 0 0 10px #ff9e9e, 0 0 20px #ff9e9e,
      0 0 30px #ff9e9e, 0 0 10px #75ffca;}
      60% {
    text-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white, 1px 1px 1px white,
    0 0 3px white, 0 0 10px white, 0 0 20px white,
    0 0 30px #FF9E9E, 0 0 4px #FF9E9E, 0 0 5px #91ffff, 0 0 7px #FF9E9E, 0 0 10px #FF9E9E, 0 0 200px #c896fa;
  }
  100% {
    text-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white,
      1px 1px 1px white, 0 2px white, 0 0 3px white, 0 0 5px white,
      0 0 1px #ff9e9e, 0 0 5px #91ffff, 0 0 2px #ff9e9e, 0 0 3px #ff9e9e,
      0 0 4px #ff9e9e, 0 0 5px #ff9e9e;
  }
  
`;

const Container = styled.div`
  margin: 0;
  height: auto;
  width: 100%;
  top: 0px;
  padding: 20px 0;
  position: fixed;
  background: black;
  text-align: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    margin: 0;
    height: 90vh;
    width: 100%;
    top: 0px;
    padding: 30vw 0 40px 0;
    position: fixed;
    background: black;
    text-align: center;
  }
`;

const H3 = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  font-size: 40px;
  padding-bottom: 20px;
  padding-top: 50px;
  animation: ${neon} 7s infinite;
  @media (max-width: 768px) {
    padding-top: 30vh;
  }
`;
