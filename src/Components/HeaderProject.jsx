import React, { useContext, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import useDocumentScrollThrottled from "./scroll";
import { FiGithub, FiLinkedin, FiInstagram, FiCodepen } from "react-icons/fi";
import { MdOutlineMail, MdClose } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import X from "../assets/images/x.png";
import { useNavigate } from "react-router-dom";

export const Header2 = () => {
  const navigate = useNavigate();

  const [dropOpen, setDropOpen] = useState("-250px");
  const [rot, setRot] = useState(0);
  const [dropOpenM, setDropOpenM] = useState("-250vw");

  const dropHandleM = () => {
    if (rot === 0) {
      setDropOpenM("calc(75px - 103vw)");

      setRot(45);
    } else {
      setRot(0);
      setDropOpenM("-103vw");
    }
  };

  const dropHandle = () => {
    dropHandleM();

    if (rot === 0) {
      setDropOpen("-130px");

      setRot(45);
    } else {
      setRot(0);
      setDropOpen("-250px");
    }
  };
  //hidden header on scroll
  const scrollToPosition = (position) => {
    window.scrollTo({
      top: position,
      behavior: "smooth", // Optional: animated smooth scroll
    });
  };

  const scrollToHome = (pos) => {
    navigate("/");

    // Note: You can adjust the delay time based on your needs
    setTimeout(() => {
      // After the navigation is complete, scroll to the desired position
      scrollToPosition(pos);
    }, 200); // 500 milliseconds delay as an example
  };

  const toProjects = () => {
    scrollToHome(1350); // Navigate to "Home" route first
  };

  const toProjectsm = () => {
    scrollToHome(375); // Navigate to "Home" route first
  };

  const toTech = () => {
    scrollToHome(3400); // Navigate to "Home" route first
  };

  const toTechm = () => {
    scrollToHome(3600); // Navigate to "Home" route first
  };

  const toCv = () => {
    scrollToHome(4000); // Navigate to "Home" route first
  };

  const toCvm = () => {
    scrollToHome(4150); // Navigate to "Home" route first
  };

  const toContact = () => {
    scrollToHome(6000); // Navigate to "Home" route first
  };

  const toContactm = () => {
    scrollToHome(9000); // Navigate to "Home" route first
  };

  const toAbout = () => {
    scrollToHome(2900); // Navigate to "Home" route first
  };

  const toAboutm = () => {
    scrollToHome(2900); // Navigate to "Home" route first
  };

  return (
    <Head>
      <DropBtn
        onClick={() => {
          dropHandle();
        }}
      >
        <XImg
          src={X}
          style={{
            transform: `rotate(${rot}deg)`,
            transition: "0.6s ease-in-out",
          }}
        />
      </DropBtn>
      <Nav
        onClick={() => dropHandle()}
        style={{
          left: dropOpen,
          transition: "left 0.2s ease-in-out",
        }}
      >
        <Item></Item>
        <NavItem href="/">Home</NavItem>
        <NavItem href="#projects" onClick={toProjects}>
          Projects
        </NavItem>
        <NavItem href="#about" onClick={toAbout}>
          About
        </NavItem>

        <NavItem href="#techs" onClick={toTech}>
          Tech
        </NavItem>
        <NavItem href="#work" onClick={toCv}>
          CV
        </NavItem>
        <NavItem href="#contact" onClick={toContact}>
          Contact
        </NavItem>
      </Nav>
      <MobileNav
        onClick={() => dropHandleM()}
        style={{
          right: dropOpenM,
          transition: "right 0.2s ease-in-out",
        }}
      >
        <MNavItem href="/">Home</MNavItem>
        <MNavItem href="#projects" onClick={toProjectsm}>
          Projects
        </MNavItem>
        <MNavItem href="#about" onClick={toAboutm}>
          About
        </MNavItem>
        <MNavItem href="#techs" onClick={toTechm}>
          Tech
        </MNavItem>
        <MNavItem href="#work" onClick={toCvm}>
          CV
        </MNavItem>
        <MNavItem href="#contact" onClick={toContactm}>
          Contact
        </MNavItem>
      </MobileNav>
    </Head>
  );
};

const NavItem = styled.a`
  text-decoration: none;
  color: #fcf3f2;
  transition: 0.5s ease-in-out;
  height: 42px;
  padding: 0 20px;

  &:hover {
    color: #b80056 !important;
  }
  @media (max-width: 768px) {
    transform: rotate(90deg);
    font-size: 18px;
    letter-spacing: 0.2em;
    padding: 0;
  }
`;

const Item = styled.div`
  height: 0px;
`;
const XImg = styled.img`
  width: 30px;
  height: 30px;
  position: fixed;
  top: 20px;
  left: 20px;
  @media (max-width: 768px) {
    left: 87vw;
  }
`;

const Head = styled.header`
  z-index: 200;
  display: flex;
  width: 40px;
  height: 35px;
  padding: 0px 0px 0 0px;
  padding-top: 0px;
  background: transparent;
  position: fixed;
  width: 70%;
  top: 0;
  line-height: 3em;
  background: transparent;
  transition: 0.5s ease-in-out;
  box-shadow: none;
  @media (max-width: 768px) {
  }
`;

const DropBtn = styled.div`
  width: 90px;
  height: 70px;
  position: fixed;
  padding-top: 15px;
  cursor: pointer;
  padding-left: 0px;
  text-align: center;
  background: transparent;
  z-index: 10000;
  transition: transform 0.8s ease-in-out;
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 60px;
    height: 70px;
  }
`;

const Nav = styled.div`
  transition: 1s ease-in-out;
  margin-top: 0;
  background: black;
  color: white;
  position: relative;
  text-align: center;
  width: 90px;
  height: 100vh;
  z-index: 9000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    transition: 1s ease-in-out;
    margin-top: 0;
    padding-top: 9vh;

    background: black;
    color: white;
    position: relative;
    text-align: center;
    width: 60px;
    height: 100vh;
    z-index: 9000;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
`;

const MNavItem = styled.a`
  @media (max-width: 768px) {
    text-decoration: none;
    color: #fcf3f2;
    transition: 0.5s ease-in-out;
    height: 15vh;
    padding: 0 20px;
    margin-left: -70px;
    transform: rotate(90deg);
    font-size: 18px;
    letter-spacing: 0.2em;
    padding: 0;
  }
`;

export default Header2;
