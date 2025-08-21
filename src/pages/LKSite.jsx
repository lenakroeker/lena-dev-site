import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import ToHome from "../Components/ToHome";
import VideoFile from "../assets/videos/lenasite.mp4";
import VideoFileNew from "../assets/videos/portfolio2.mp4";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeaderProject from "../Components/HeaderProject";

export default function LKSite() {
  useEffect(() => {
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <Container>
      <HeaderProject />
      <Head>
        <Prev to="/matchbox">
          <FaLongArrowAltLeft size={30} />
        </Prev>
        <Title>Art Portfolio</Title>
        <Site href="https://lenakroeker.com/">lenakroeker.com</Site>
        <Description>Personal portfolio site for Lena Kroeker</Description>
        <Techs>
          <Tech>ReactJS</Tech>
          <Tech>Redux</Tech>
          <Tech>Styled Components</Tech>
          <Tech>NodeJS</Tech>
          <Tech>MongoDB</Tech>
          <Tech>Firebase Storage</Tech>
          <Tech>UX Design</Tech>
        </Techs>
        <Video1 autoPlay loop muted>
          <source src={VideoFileNew} type="video/mp4" />
        </Video1>

        <Title>Art Portfolio (Old Version)</Title>
        <Description>
          Personal art ecommerce site and portfolio for Lena Kroeker
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
  background: #ffffff96;
  @media (max-width: 768px) {
    width: 95vw;
    padding-top: 50px;
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
  margin-top: -10vh;
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

const Head = styled.div`
  text-align: center;
`;

const Title = styled.div`
  font-size: 50px;
  padding-top: 80px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 40px;
    padding-top: 20px;
  }
`;

const Next = styled(Link)`
  position: absolute;
  top: 110px;
  right: 25vw;
  color: black;
  @media (max-width: 768px) {
    top: 155px;
    right: 5vw;
  }
`;
const Prev = styled(Link)`
  position: absolute;
  top: 110px;
  left: 25vw;
  color: black;
  @media (max-width: 768px) {
    top: 155px;
    left: 5vw;
  }
`;
const Site = styled.a`
  text-decoration: none;
  color: black;
  padding: 10px 30px;
  border-radius: 30px;
  background: #ffffff;
  border: 1px solid green;
  cursor: pointer;
  &:hover {
    background: #d0f9ee;
  }
`;

const Description = styled.div`
  margin: 20px auto;
  width: 40vw;
  margin-top: 50px;

  @media (max-width: 768px) {
    width: 85vw;
  }
`;
const Techs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Tech = styled.div`
  padding: 5px 15px;
  margin: 10px;
  background: rgb(242, 237, 240);
  border-radius: 10px;
`;
const Subtitle = styled.h3`
  margin: 50px;
  font-weight: bold;
  font-size: 40px;
`;

const Section = styled.div``;

const Img1 = styled.img`
  width: 300px;
  display: block;
  margin: 10px;
`;
const Img2 = styled.img`
  width: 30vw;
  align: right;
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

const Video2 = styled.video`
  width: 100%;
  margin: 30px 0;
`;
