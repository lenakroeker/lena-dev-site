import React from "react";
import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";

export default function Techs() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Container
      id="techs"
      // style={{
      //   left: offset < 4000 ? -4000 + offset : offset - 4000,
      // }}
    >
      <H3> Technologies </H3>
      <ListArea>
        <Ul>
          <Li>Vue.JS</Li>
          <Li>Nuxt</Li>
          <Li>React.JS</Li>
          <Li>Redux</Li>
          <Li>JavaScript ES6</Li>
          <Li>CSS3</Li>
          <Li>HTML5</Li>
          <Li>Styled Components</Li>
          <Li>Tailwind</Li>
          <Li>Wordpress (Divi)</Li>
        </Ul>

        <Ul>
          <Li>Shopify (Liquid)</Li>
          <Li>Express</Li>
          <Li>MongoDB</Li>
          <Li>REST APIs</Li>
          <Li>Node.JS</Li>

          <Li>Mailchimp</Li>
          <Li>VSC</Li>

          <Li>Adobe UX</Li>
          <Li>Photoshop</Li>
          <Li>Gimp</Li>
        </Ul>
        <Ul>
          <Li>Kanban Flow</Li>
          <Li>WinSCP</Li>
          <Li>Trello</Li>
          <Li>GitHub</Li>
          <Li>Postman</Li>
          <Li>Confluence</Li>
          <Li>Jira</Li>
          <Li>Digital Ocean</Li>
          <Li>NPM</Li>
          <Li>Yarn</Li>
        </Ul>
      </ListArea>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 30px;
  background: #eef9f7;
  -webkit-box-shadow: 0px 0px 15px 5px #e4fcf8;
  box-shadow: 0px 0px 15px 5px #e4fcf8;
  position: relative;
  width: 60vw;
  color: #5d5c5c;
  margin: 0 18vw;
  top: 2500px;
  z-index: 10;
  padding: 30px;
  transition: opacity 0.3s ease; // Add transition for smooth fading
  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 5px;
    width: 85vw;
  }
`;
const H3 = styled.h3`
  width: 100%;
  text-align: center;
  color: #a0a0a0;
  font-size: 30px;
  margin: 10px;

  @media (max-width: 768px) {
    font-size: 30px;
    animation: none;
    margin: 10px auto;
    margin-top: 40px;
  }
`;
const ListArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: -15px;
  }
`;

const Ul = styled.ul`
  list-style-type: circle;

  @media (max-width: 768px) {
    margin-bottom: 23px;
    width: 20%;
  }
`;

const Li = styled.li`
  padding: 10px 30px 0 0;
  @media (max-width: 768px) {
    padding: 0;
    width: 50%;
    font-size: 15px;
  }
`;
