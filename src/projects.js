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
        <Proj>
          <Links>
            <Site target="_blank" href="richardkroekerdesign.com">
              richardkroekerdesign.com
            </Site>
          </Links>
          <Overlay></Overlay>
          <Video autoPlay loop muted>
            <source src={RichVid} type="video/mp4" />
          </Video>
          <Description>
            <H4>Richard Kroeker Design</H4>
            <MobileLinks>
              <Site target="_blank" href="richardkroekerdesign.com">
                richardkroekerdesign.com
              </Site>
            </MobileLinks>
            <About>Site for world renowned architect Richard Kroeker</About>
            <Tech>
              <TechItem>HTML</TechItem>
              <TechItem>CSS</TechItem>
              <TechItem>JS</TechItem>
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
              Custom site built for indigenous design collective Mawlukutimk
              (Talking Circle) as part of their subission to an architecture
              competition.
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
              <Site target="_blank" href="https://matchboxenergy.com">
                inspirationalquotegenerator.com
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
              An app where users can sign up and post ads for skills they would
              like to swap with others in their community. My individual final
              project for Concordia Full Stack Development Bootcamp
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
  font-size: 30px;
  animation: ${neon} 7s infinite;
`;

const Description = styled.div`
  width: 30vw;
  right: 0;
  margin-top: -31.2vw;
  position: relative;
  z-index: 2;
  height: auto;
  background: black;
  color: white;
  padding: 10px 20px;
  transition: 1s ease-in-out;
  &:hover {
    opacity: 1 !important;
  }
  @media (max-width: 768px) {
    padding: 10px 3vw;
    width: 85vw;
    margin: 10px auto;
  }
`;

const DescriptionR = styled.div`
  width: 30vw;
  margin-top: -31.2vw;
  height: auto;
  position: relative;
  z-index: 2;
  margin-left: 37.9vw;
  background: black;
  color: white;
  padding: 10px 20px;
  transition: 1s ease-in-out;
  &:hover {
    opacity: 1 !important;
  }
  @media (max-width: 768px) {
    padding: 10px 3vw;
    width: 88%;
    margin: 10px auto;
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
  width: 71vw;
  position: relative;
  background: transparent;
  margin: 50px 10px;
  background-repeat: no-repeat;
  transition: 1s ease-in-out;
  @media (max-width: 768px) {
    margin: 10px 0px;
    width: 100%;
    box-shadow: none;
    height: auto;
    border: 2px solid white;
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
    margin: 10px 0px;
    width: 100%;
    box-shadow: none;
    height: auto;
    border: 2px solid white;
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
    display: none;
  }
`;

const VideoM = styled.video`
  width: 17.4vw;
  display: absolute;
  margin-left: 35vw;
  z-index: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const H4 = styled.h4`
  width: 100%;
  text-align: center;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Links = styled.div`
  position: absolute;
  width: 40%;
  text-align: center;
  margin-top: 5vw;
  margin-left: 2.3vw;
  display: flex;
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
  margin-top: 5vw;
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
  color: white;
  background: black;
  padding: 10px 20px;
  margin: 5px 10px;
  border-radius: 10px;
  @media (max-width: 768px) {
    display: block;
    margin: 20px auto;
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
`;

const TechItem = styled.div`
  border: 2px solid grey;
  border-radius: 15px;
  padding: 3px 10px;
  margin: 5px 10px;
  font-size: 14px;
`;

const About = styled.div`
  width: 100%;
  background: transparent;
  height: 100px;
  margin: 60px 0 10px 0;
  color: white;
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;
