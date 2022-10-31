import React from "react";
import styled, { keyframes } from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import MatchboxVid from "./assets/matchbox-vid.mp4";
import LenaVid from "./assets/lenasite.mp4";
import RichVid from "./assets/richsite.mp4";
import VasVid from "./assets/vas.mp4";
import TCVid from "./assets/tc.mp4";
import Inspo from "./assets/inspo.mp4";
import SkillSwap from "./assets/skillswap.mp4";

export default function projects() {
  return (
    <Container id="projects">
      <H3>Projects</H3>
      <ScrollAnimation animateIn="fadeIn">
        <Proj id="proj">
          <Links>
            <Site target="_blank" href="https://matchboxenergy.com">
              matchboxenergy.com
            </Site>
            <Site
              target="_blank"
              href="https://github.com/lenakroeker/matchbox-beta"
            >
              Code
            </Site>
          </Links>
          <Overlay></Overlay>
          <Video autoPlay loop muted>
            <source src={MatchboxVid} type="video/mp4" />
          </Video>
          <Description id="description">
            <H4>Matchbox Energy</H4>
            <MobileLinks>
              <Site target="_blank" href="https://matchboxenergy.com">
                matchboxenergy.com
              </Site>
              <Site
                target="_blank"
                href="https://github.com/lenakroeker/matchbox-beta"
              >
                Code
              </Site>
            </MobileLinks>
            <About>
              Site for revolutionary architectural energy modelling software
              Matchbox Energy. This project involved gaining a deep
              understanding of the app in order to create concise and compelling
              copy, as well as a light and organic UI design. Programmed using
              React.JS
            </About>
            <Tech>
              <TechItem>React.js</TechItem>
              <TechItem>Styled Components</TechItem>
              <TechItem>NPM</TechItem>
              <TechItem>UI/UX Design</TechItem>
              <TechItem>Copywriting</TechItem>
            </Tech>
          </Description>
        </Proj>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Proj>
          <LinksR>
            <Site target="_blank" href="https://lenakroeker.com">
              lenakroeker.com
            </Site>
          </LinksR>
          <Overlay></Overlay>
          <Video autoPlay loop muted>
            <source src={LenaVid} type="video/mp4" />
          </Video>
          <DescriptionR>
            <H4>Lena Kroeker Art Portfolio</H4>
            <MobileLinks>
              <Site target="_blank" href="https://lenakroeker.com">
                lenakroeker.com
              </Site>
            </MobileLinks>
            <About>
              A portfolio and shop for my work in art, music and design
            </About>
            <Tech>
              <TechItem>Shopify (Liquid)</TechItem>
              <TechItem>UI/UX Design</TechItem>
            </Tech>
          </DescriptionR>
        </Proj>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <ProjM>
          <Links>
            <Site
              target="_blank"
              href="https://github.com/lenakroeker/skill_swap"
            >
              Code
            </Site>
          </Links>
          <Overlay></Overlay>
          <VideoM autoPlay loop muted>
            <source src={SkillSwap} type="video/mp4" />
          </VideoM>
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
        </ProjM>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Proj>
          <LinksR>
            <Site target="_blank" href="richardkroekerdesign.com">
              richardkroekerdesign.com
            </Site>
          </LinksR>
          <Overlay></Overlay>
          <Video autoPlay loop muted>
            <source src={RichVid} type="video/mp4" />
          </Video>
          <DescriptionR>
            <H4>Richard Kroeker Design</H4>
            <MobileLinks>
              <Site target="_blank" href="richardkroekerdesign.com">
                richardkroekerdesign.com
              </Site>
            </MobileLinks>
            <About>
              Site designed and build for world renowned architect Richard
              Kroeker
            </About>
            <Tech>
              <TechItem>HTML</TechItem>
              <TechItem>CSS</TechItem>
              <TechItem>JS</TechItem>
            </Tech>
          </DescriptionR>
        </Proj>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Proj>
          <Links>
            <Site
              target="_blank"
              href="https://github.com/lenakroeker/Mawlukutimk"
            >
              Code
            </Site>
          </Links>
          <Overlay></Overlay>
          <Video autoPlay loop muted>
            <source src={TCVid} type="video/mp4" />
          </Video>
          <Description>
            <H4>Mawlukutimk Talking Circle Site</H4>
            <MobileLinks>
              <Site
                target="_blank"
                href="https://github.com/lenakroeker/Mawlukutimk"
              >
                Code
              </Site>
            </MobileLinks>
            <About>
              Custom site designed built for indigenous design collective
              Mawlukutimk (Talking Circle) as part of their subission to an
              architecture competition.
            </About>
            <Tech>
              <TechItem>HTML</TechItem>
              <TechItem>CSS</TechItem>
              <TechItem>JS</TechItem>
              <TechItem>UI/UX Design</TechItem>
            </Tech>
          </Description>
        </Proj>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Proj>
          <LinksR>
            <Site target="_blank" href="https://vasartspace.ca">
              vasartspace.com
            </Site>
          </LinksR>
          <Overlay></Overlay>
          <Video autoPlay loop muted>
            <source src={VasVid} type="video/mp4" />
          </Video>
          <DescriptionR>
            <H4>Vas Artspace</H4>
            <MobileLinks>
              <Site target="_blank" href="https://vasartspace.ca">
                vasartspace.com
              </Site>
            </MobileLinks>
            <About>
              Site in progress for the forthcoming Vas artspace in Mile Ex,
              Montreal
            </About>
            <Tech>
              <TechItem>Wordpress</TechItem>
              <TechItem>UI/UX Design</TechItem>
              <TechItem>Copywriting</TechItem>
            </Tech>
          </DescriptionR>
        </Proj>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn">
        <Proj>
          <LinksR>
            <Site
              target="_blank"
              href="https://inspirationalquotegenerator.com"
            >
              inspirationalquotegenerator.com
            </Site>
            <Site
              target="_blank"
              href="https://github.com/lenakroeker/Inspirational_Quote_Generator"
            >
              Code
            </Site>
          </LinksR>
          <Overlay></Overlay>
          <Video autoPlay loop muted>
            <source src={Inspo} type="video/mp4" />
          </Video>
          <DescriptionR>
            <H4>Inspirational Quote Generator</H4>
            <MobileLinks>
              <Site
                target="_blank"
                href="https://inspirationalquotegenerator.com"
              >
                inspirational quote generator.com
              </Site>
              <Site
                target="_blank"
                href="https://github.com/lenakroeker/Inspirational_Quote_Generator"
              >
                Code
              </Site>
            </MobileLinks>
            <About>
              My first ever app, and in many ways still my favorite.
              <br /> Access nearly infinite permutations of wisdom!
              <br /> Begin each day with 100% original truths!
              <br /> Find oneishness with the cosmos!
            </About>
            <Tech>
              <TechItem>HTML</TechItem>
              <TechItem>CSS</TechItem>
              <TechItem>JS</TechItem>
            </Tech>
          </DescriptionR>
        </Proj>
      </ScrollAnimation>
    </Container>
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
  height: auto;
  background: black;
  display: flex;
  padding: 40px 12vw;
  flex-wrap: wrap;
  color: #fffafc;

  justify-content: space-between;
  @media (max-width: 768px) {
    display: block;
    padding: 40px 3vw 40px 2vw;
    display: block;
  }
`;

const H3 = styled.h3`
  color: white;
  width: 100%;
  text-align: center;
  font-size: 40px;
  animation: ${neon} 7s infinite;
  @media (max-width: 768px) {
    font-size: 50px;
    animation: none;
    text-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white,
      1px 1px 1px white, 0 2px white, 0 0 3px white, 0 0 5px white,
      0 0 10px #75ffca, 0 0 35px #ff9e9e, 0 0 20px #c896fa, 0 0 80px #ff9e9e,
      0 0 40px #ff9e9e, 0 0 100px #91ffff;
  }
`;

const Description = styled.div`
  width: 30vw;
  min-width: 400px;
  left: 0;
  position: absolute;
  top: 0;
  z-index: 2;
  height: auto;
  background: black;
  padding: 10px 20px;
  transition: 1s ease-in-out;
  &:hover {
    opacity: 1 !important;
  }
  @media (max-width: 768px) {
    position: relative;
    border-radius: 40px;
    min-width: 100%;
    padding: 10px 0;
    width: 100%;
    margin: 10px auto 5px auto;
  }
`;

const DescriptionR = styled.div`
  width: 30vw;
  top: 0;
  height: auto;
  position: absolute;
  z-index: 2;
  right: -2px;
  background: black;
  padding: 10px 20px;
  transition: 1s ease-in-out;
  &:hover {
    opacity: 1 !important;
  }
  @media (max-width: 768px) {
    position: relative;
    border-radius: 40px;
    min-width: 99%;
    padding: 10px 0;
    width: 99%;
    margin: 10px 0 5px 0;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 71vw;
  height: 32.7vw;
  opacity: 0.8;
  z-index: 1;
  background: black;
  transition: 0.7s ease-in-out;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Proj = styled.div`
  height: 30.8vw;
  width: 70.8vw;
  position: relative;
  background: transparent;
  margin: 50px 10px;
  background-repeat: no-repeat;
  transition: 1s ease-in-out;
  @media (max-width: 768px) {
    margin: 70px 5% 20px 5%;
    width: 90%;
    box-shadow: none;
    height: auto;
    border: 2px solid #fffafc;

    border-radius: 0 0 40px 40px;
    &:hover {
      box-shadow: none;
    }
  }
  &:hover {
    box-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white,
      1px 1px 1px white, 0 2px white, 0 0 3px white, 0 0 5px white,
      0 0 20px #91ffff, 0 0 15px #ff9e9e, 0 0 10px #ff9e9e, 0 0 15px #ff9e9e,
      0 0 70px #ff9e9e, 0 0 10px #75ffca;
  }
  &:hover ${Description} {
    opacity: 0.3;
  }
  &:hover ${DescriptionR} {
    opacity: 0.3;
  }
  &:hover ${Overlay} {
    opacity: 0;
  }
`;

const ProjM = styled.div`
  height: 30.8vw;
  width: 71vw;
  position: relative;
  background: transparent;
  margin: 50px 10px;
  background-repeat: no-repeat;
  transition: 1s ease-in-out;
  @media (max-width: 768px) {
    margin: 70px 0px;
    width: 100%;
    box-shadow: none;
    height: auto;
    border: 2px solid #fffafc;
    border-radius: 0 0 40px 40px;

    &:hover {
      box-shadow: none;
    }
  }

  &:hover ${Description} {
    opacity: 0.3;
  }
  &:hover ${DescriptionR} {
    opacity: 0.3;
  }
  &:hover ${Overlay} {
    opacity: 0;
  }
`;

const Video = styled.video`
  width: 71vw;
  display: absolute;
  z-index: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const VideoM = styled.video`
  width: 17.4vw;
  display: absolute;
  margin-left: 35vw;
  z-index: 0;
  @media (max-width: 768px) {
    width: 25%;
  }
`;

const H4 = styled.h4`
  width: 100%;
  text-align: center;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 30px;
    margin-top: -90px;
    background: black;
    margin-bottom: 0;
    width: 100%;
    padding: 25px 0 10px 0;
    border-radius: 30px 30px 0px 0px;
  }
`;

const Links = styled.div`
  position: absolute;
  width: 40%;
  text-align: center;
  margin-top: 70px;
  margin-left: calc(215px - 14vw);
  display: flex;
  color: #f7fffe;
  justify-content: space-around;
  z-index: 20;
  @media (max-width: 768px) {
    display: none;
  }
`;

const LinksR = styled.div`
  position: absolute;
  width: 50%;
  text-align: center;
  margin-top: 70px;
  margin-left: 36.8vw;
  display: flex;
  justify-content: space-around;
  z-index: 20;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileLinks = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 20px;
    position: relative;
    width: 100%;
    text-align: center;
  }
`;

const Site = styled.a`
  text-align: center;
  background: black;
  padding: 10px 10px;
  margin: 5px 10px;
  border-radius: 10px;
  color: #f7fffe;

  @media (max-width: 768px) {
    display: block;
    margin: 0 auto 7px auto;
    padding-top: 0;
    font-weight: bold;
  }
`;

const Tech = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  color: grey;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const TechItem = styled.div`
  border: 2px solid grey;
  border-radius: 15px;
  padding: 3px 10px;
  margin: 5px 10px;
  font-size: 14px;
  @media (max-width: 768px) {
    font-size: 15px;
    padding: 0px 8px;
  }
`;

const About = styled.div`
  width: 100%;
  background: transparent;
  min-height: 100px;
  height: auto;
  margin: 60px 0 10px 0;
  @media (max-width: 768px) {
    margin: 10px auto 40px auto;
    width: 90%;
    height: auto;
    min-height: auto;

    font-size: 18px;
    text-align: center;
    line-height: 1.2em;
  }
`;
