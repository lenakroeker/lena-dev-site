import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LenaVid from "../assets/videos/portfolio2.mp4";
import GreyVid from "../assets/videos/greyroomshop.mp4";
import Spiffvid from "../assets/videos/spiff-square.mp4";
import MatchboxVid from "../assets/videos/matchbox.mp4";
import SwevenVid from "../assets/videos/sweven.mp4";

import { useEffect, useState } from "react";

export default function Projects() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const isMobile = window.innerWidth <= 768;

  return (
    <Outer
      id="projects"
      style={{
        right: offset < 1200 ? -1300 + offset : offset - 1200,
        ...(isMobile && {
          right:
            offset < window.innerWidth * 1.2
              ? -window.innerWidth * 1.2 + offset
              : offset - window.innerWidth * 1.2,
        }),
      }}
    >
      <Container>
        <H3>Projects</H3>
        <Proj>
          <Link to="./sweven">
            <Video autoPlay loop muted>
              <source src={SwevenVid} type="video/mp4" />
            </Video>
            <H4>SWEVEN</H4>
          </Link>
        </Proj>
        <Proj id="proj">
          <Link to="./spiff">
            <Video autoPlay loop muted>
              <source src={Spiffvid} type="video/mp4" />
            </Video>
            <H4>Spiff</H4>
          </Link>
        </Proj>
        <Proj>
          <Link to="./greyroomshop">
            <Video autoPlay loop muted>
              <source src={GreyVid} type="video/mp4" />
            </Video>
            <H4>GREY ROOM SHOP</H4>
          </Link>
        </Proj>
        <Proj>
          <Link to="./matchbox">
            <Video autoPlay loop muted>
              <source src={MatchboxVid} type="video/mp4" />
            </Video>
            <H4>Matchbox Energy</H4>
          </Link>
        </Proj>
        <Proj>
          <Link to="./lkportfolio">
            <Video autoPlay loop muted>
              <source src={LenaVid} type="video/mp4" />
            </Video>
            <H4>Lena Kroeker Art Portfolio</H4>
          </Link>
        </Proj>
        {/* <Proj>
          <Links>
            <Site
              target="_blank"
              href="https://github.com/lenakroeker/skill_swap"
            >
              Code
            </Site>
          </Links>
          <Overlay></Overlay>
          <Video autoPlay loop muted>
            <source src={SkillSwap} type="video/mp4" />
          </Video>
          <Description>
            <H4>SkillSwap</H4>
            <MobileLinks>
              <Site
                target="_blank"
                href="https://github.com/lenakroeker/skill_swap"
              >
                Code
              </Site>
            </MobileLinks>
            <About>
              CRUD app where users can sign up and post ads for skills they
              would like to swap with others in their community. My individual
              final project for Concordia Full Stack Development Bootcamp
            </About>
            <Tech>
              <TechItem>React.JS</TechItem>
              <TechItem>Styled Components</TechItem>

              <TechItem>Node.js</TechItem>
              <TechItem>Firebase Realtime Database</TechItem>
              <TechItem>Firebase Storage</TechItem>
              <TechItem>NPM</TechItem>
            </Tech>
          </Description>
        </Proj> */}
      </Container>
    </Outer>
  );
}

const Outer = styled.div`
  position: fixed;
  width: 80vw;
  color: #fffafc;
  margin: 0 10vw;
  top: 0;
  z-index: 10;
  transition: opacity 0.3s ease; // Add transition for smooth fading
  @media (max-width: 768px) {
    width: 95vw;
  }
`;

const Container = styled.div`
  background: #db3535;

  position: fixed;
  height: auto;
  background: transparent;
  display: flex;
  padding: 40px 12vw;
  flex-wrap: wrap;
  color: #fffafc;
  width: 80vw;
  margin-bottom: 2000px;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
    width: 80vw;
    height: 100%;
    overflow-y: hidden;
  }
`;

const H3 = styled.h3`
  color: black;
  width: 100%;
  text-align: center;
  font-size: 40px;
  @media (max-width: 768px) {
    font-size: 30px;
    margin: 20px;
  }
`;

const Proj = styled.div`
  height: 22vw;
  width: 14vw;
  position: relative;
  background: transparent;
  margin: 20px 5px;
  overflow: hidden;
  transition: 1s ease-in-out;
  @media (max-width: 768px) {
    margin: 1vh 0;
    width: 100%;
    height: 14vh;
    box-shadow: none;
    border: none;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute; /* magic sauce */
  z-index: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const H4 = styled.h4`
  cursor: pointer;
  width: 100%;
  height: 60%;
  background: white;
  margin: 0;
  padding-top: 40%;
  text-align: center;
  font-size: 20px;
  object-fit: cover;
  position: absolute;
  color: black;
  opacity: 0;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  -webkit-box-shadow: 0px 0px 0px 0px #ffffff;
  box-shadow: 0px 0px 0px 0px #ffffff;

  &:hover {
    opacity: 0.9;
    -webkit-box-shadow: 0px 0px 15px 5px #ffffff;
    box-shadow: 0px 0px 15px 5px #ffffff;
  }

  @media (max-width: 768px) {
    opacity: 0.7;
    height: 100%;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    margin: 0;
  }
`;
