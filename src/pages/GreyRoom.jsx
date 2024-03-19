import React, { useEffect } from "react";
import styled from "styled-components";
import ToHome from "../Components/ToHome";
import { Link } from "react-router-dom";
import VideoFile from "../assets/videos/greyroomshop.mp4";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import HeaderProject from "../Components/HeaderProject";
import Logo from "../assets/images/greyroomlogo.png";

export default function GreyRoom() {
  useEffect(() => {
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <Container>
      <HeaderProject />

      <Head>
        <Prev to="/spiff">
          <FaLongArrowAltLeft size={30} />
        </Prev>
        <Next to="/matchbox">
          <FaLongArrowAltRight size={30} />
        </Next>
        <Title>Grey Room Shop</Title>
        <Site href="https://greyroomshop.com/">greyroomshop.com</Site>

        <Description>
          Website for curated luxury closet grey room shop. Project included
          site and logo design, custom shopify theme, site migration from depop,
          inventory data structure
        </Description>
        <Techs>
          <Tech>Shopify Custom Theme (Liquid)</Tech>
          <Tech>UX Design</Tech>
        </Techs>
      </Head>
      <Video1 autoPlay loop muted>
        <source src={VideoFile} type="video/mp4" />
      </Video1>
    </Container>
  );
}

const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 95vw;
    margin-top: 50px;
  }
`;

const Head = styled.div`
  text-align: center;
`;
const Next = styled(Link)`
  position: absolute;
  top: 110px;
  right: 25vw;
  color: black;
`;
const Prev = styled(Link)`
  position: absolute;
  top: 110px;
  left: 25vw;
  color: black;
`;

const Title = styled.div`
  font-size: 50px;
  padding-top: 80px;
  @media (max-width: 768px) {
    font-size: 40px;
    padding-top: 20px;
  }
`;

const Box = styled.div`
  display: flex;
  width: 100%;
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`;
const Images = styled.div`
  width: 50%;
`;
const Text = styled.div`
  display: flex;
  padding: 0 10%;
  flex-direction: column;
  justify-content: center;
`;

const Site = styled.a``;

const Description = styled.div`
  margin: 20px auto;
  width: 40vw;
`;
const Techs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Tech = styled.div`
  padding: 5px 15px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 30px;
`;
const Subtitle = styled.h3`
  margin: 50px;
  font-weight: bold;
  font-size: 40px;
`;

const Section = styled.div``;

const Img1 = styled.img`
  width: 200px;
`;
const Img2 = styled.img`
  width: 30vw;
`;
const Img3 = styled.img`
  width: 200px;
`;
const Img4 = styled.img`
  height: 300px;
`;

const Video1 = styled.video`
  width: 100%;
  margin: 30px 0;
`;
