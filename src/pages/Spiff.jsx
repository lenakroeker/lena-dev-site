import React, { useEffect } from "react";
import styled from "styled-components";
import ToHome from "../Components/ToHome";
import VideoFile from "../assets/videos/spiff.mp4";
import HeaderProject from "../Components/HeaderProject.jsx";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        <Next to="/greyroomshop">
          <FaLongArrowAltRight size={30} />
        </Next>
        <Title>Spiff</Title>
        <Site href="">COMING SOON</Site>

        <Description>Full Stack Ecommerce Site</Description>
        <Techs>
          <Tech>ReactJS</Tech>
          <Tech>Redux</Tech>
          <Tech>Styled Components</Tech>
          <Tech>NodeJS</Tech>
          <Tech>MongoDB</Tech>
          <Tech>Firebase Storage</Tech>
          <Tech>Stripe</Tech>
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
  background: #abfcf3;
  cursor: pointer;
  &:hover {
    background: #00ffe1;
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
  background: rgba(252, 250, 251, 0.35);
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
