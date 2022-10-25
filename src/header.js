import React, { useContext, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import useDocumentScrollThrottled from "./scroll";
import { FiGithub, FiLinkedin, FiInstagram, FiCodepen } from "react-icons/fi";
import { MdOutlineMail, MdClose } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

export const Header = () => {
  const [dropOpen, setDropOpen] = useState(false);

  const dropHandle = () => {
    setDropOpen(!dropOpen);
  };
  //hidden header on scroll

  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = shouldShowShadow ? "shadow" : "";
  const hiddenStyle = shouldHideHeader ? "hidden" : "";

  return (
    <Head className={`header ${shadowStyle} ${hiddenStyle}`}>
      <Nav>
        <Navlist>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#techs">Tech</NavItem>
          <NavItem href="#work">CV</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </Navlist>
      </Nav>
      <DropBtn onClick={() => dropHandle()}>
        <AiOutlinePlus color="white" size={37} />
      </DropBtn>
      {dropOpen && (
        <>
          <MobileNav onClick={() => dropHandle()}>
            <Close>
              <MdClose color="white" size={37} />
            </Close>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#techs">Tech</NavItem>
            <NavItem href="#work">CV</NavItem>
            <NavItem href="#contact">Contact</NavItem>
            <Div>
              <A href="https://github.com/lenakroeker">
                <FiGithub size={28} />
              </A>
            </Div>
            <Div>
              <A href="https://www.instagram.com/lenakatrinak">
                <FiInstagram size={28} />
              </A>
            </Div>
            <Div>
              <A href="https://www.linkedin.com/in/lena-kroeker">
                <FiLinkedin size={28} />
              </A>
            </Div>
            <Div>
              <A href="https://codepen.io/LenaKK">
                <FiCodepen size={28} />
              </A>
            </Div>
            <Div>
              <A href="mailto:lenakroeker@gmail.com">
                <MdOutlineMail size={28} />
              </A>
            </Div>
          </MobileNav>
        </>
      )}
    </Head>
  );
};

const neon = keyframes`
  0% {
    box-shadow: none;
  }
  20% {
    box-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white, 1px 1px 1px white,
    0 0 3px white, 0 0 10px white, 0 0 20px white,
    0 0 30px #FF9E9E, 0 0 40px #FF9E9E, 0 0 50px #FF9E9E, 0 0 70px #FF9E9E, 0 0 100px #75ffca, 0 0 200px #FF9E9E;
  }
  30% {
    box-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white,
      1px 1px 1px white, 0 2px white, 0 0 3px white, 0 0 5px white,
      0 0 10px #ff9e9e, 0 0 15px #ff9e9e, 0 0 20px #c896fa, 0 0 30px #ff9e9e,
      0 0 40px #ff9e9e, 0 0 50px #75ffca;}
  35% {
    box-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white, 1px 1px 1px white,
    0 0 3px white, 0 0 10px white, 0 0 20px white,
    0 0 30px #FF9E9E, 0 0 40px #FF9E9E, 0 0 50px #FF9E9E, 0 0 70px #FF9E9E, 0 0 100px #FF9E9E, 0 0 200px #FF9E9E;
  }
45% {
    box-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white,
      1px 1px 1px white, 0 2px white, 0 0 3px white, 0 0 5px white,
      0 0 10px #75ffca, 0 0 35px #ff9e9e, 0 0 20px #c896fa, 0 0 80px #ff9e9e,
      0 0 40px #ff9e9e, 0 0 100px #91ffff;}
  50% {
    box-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white,
      1px 1px 1px white, 0 2px white, 0 0 3px white, 0 0 5px white,
      0 0 100px #91ffff, 0 0 85px #ff9e9e, 0 0 10px #ff9e9e, 0 0 60px #ff9e9e,
      0 0 70px #ff9e9e, 0 0 10px #75ffca;}
      60% {
    box-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white, 1px 1px 1px white,
    0 0 3px white, 0 0 10px white, 0 0 20px white,
    0 0 30px #FF9E9E, 0 0 40px #FF9E9E, 0 0 50px #91ffff, 0 0 70px #FF9E9E, 0 0 100px #FF9E9E, 0 0 200px #c896fa;
  }
  100% {
    box-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white,
      1px 1px 1px white, 0 2px white, 0 0 3px white, 0 0 5px white,
      0 0 1px #ff9e9e, 0 0 5px #91ffff, 0 0 2px #ff9e9e, 0 0 3px #ff9e9e,
      0 0 4px #ff9e9e, 0 0 5px #ff9e9e;
  }
  
`;

const drawer = keyframes`
  0% {
    width:0;
    margin-left:100vw;
    opacity:0;
  }
  100% {
    width:30vw;
    margin-right:0vw;
    opacity:1;
  }`;

const NavItem = styled.a`
  text-decoration: none;
  color: #fcf3f2;
  transition: 0.1s ease-in-out;
  @media (max-width: 768px) {
    display: block;
    background: transparent;
    color: white !important;
    width: 30vw;
    min-width: 100px;
    padding: 10px 40px 10px 0px;
    z-index: 10;
  }
  &:hover {
  }
`;

const Head = styled.header`
  z-index: 100;
  display: flex;
  width: calc(100%-40px);
  height: 35px;
  padding: 0px 0px 0 0px;
  padding-top: 0px;
  background: white;
  position: fixed;
  width: 100%;
  top: 0;
  line-height: 3em;
  background: black;
  transition: 0.5s ease-in-out;
  box-shadow: none;
  @media (max-width: 768px) {
    display: block;
    background: black;
    width: 30vw;
    height: 0;
    min-width: 120px;
    right: 0;
  }
  &:hover {
    animation: ${neon} 7s infinite;
    background: white;
    box-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white,
      1px 1px 1px white, 0 0 3px white, 0 0 10px white, 0 0 20px white,
      0 0 30px #ff9e9e, 0 0 40px #ff9e9e, 0 0 50px #91ffff, 0 0 70px #ff9e9e,
      0 0 100px #ff9e9e, 0 0 200px #c896fa;
  }
  &:hover ${NavItem} {
    color: black;
  }
`;

const Nav = styled.nav`
  height: 35px;
  width: 100%;
  @media (max-width: 767px) {
    display: none;
  }
`;

const Navlist = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: space-around;
  color: black;
  margin: -7px 20vw 0 20vw;
  @media (max-width: 767px) {
    display: none;
  }
`;

const DropBtn = styled.div`
  width: 30vw;
  height: 70px;
  position: relative;
  background: black;
  padding-top: 15px;
  padding-left: 15px;
  text-align: center;
  background: transparent;
  min-width: 120px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: none;
  @media (max-width: 768px) {
    transition: 0.5s ease-in-out;
    margin-top: -85px;
    background: black;
    color: white;
    position: relative;
    text-align: center;
    animation: ${drawer} 1s;
    width: 30vw;
    height: 100vh;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const Div = styled.div`
  padding: 10px 3vw 10px 12vw;
`;

const Close = styled.div`
  padding-top: 6px;
  padding-left: 25px;
`;

const A = styled.a`
  color: white;
  height: 50px;
  padding-right: 25px;
`;

export default Header;
