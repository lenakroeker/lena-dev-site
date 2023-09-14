import React from "react";
import styled, { keyframes } from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

export default function Techs() {
  return (
    <Container id="techs">
      <H3> Technologies I've Worked With</H3>
      <ScrollAnimation animateIn="fadeIn">
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
            <Li>React-Spring</Li>
            <Li>Wordpress (Divi)</Li>
            <Li>Shopify (Liquid)</Li>
            <Li>GitHub</Li>
            <Li>Node.JS</Li>
            <Li>Postman</Li>
          </Ul>
          <Ul>
            <Li>MongoDB</Li>
            <Li>Express</Li>
            <Li>MongoDB</Li>
            <Li>REST APIs</Li>
            <Li>Searchspring</Li>
            <Li>StoryBlok CMS</Li>
            <Li>Unbounce</Li>
            <Li>Jira</Li>
            <Li>Digital Ocean</Li>
            <Li>VSC</Li>
            <Li>NPM</Li>
            <Li>Yarn</Li>
            <Monly>
              <Li>Squarespace</Li>
              <Li>Adobe UX</Li>
              <Li>Mailchimp</Li>
              <Li>Kanban Flow</Li>
              <Li>WinSCP</Li>
              <Li>Trello</Li>
            </Monly>
          </Ul>
          <Ul3>
            <Li>Confluence</Li>
            <Li>Photoshop</Li>
            <Li>WinSCP</Li>
            <Mnone>
              <Li>Gimp</Li>
              <Li>WinSCP</Li>
              <Li>Trello</Li>
              <Li>Squarespace</Li>
              <Li>Adobe UX</Li>
              <Li>Mailchimp</Li>
              <Li>Kanban Flow</Li>
            </Mnone>
          </Ul3>
        </ListArea>
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
  color: #fffafc;
  padding: 40px 20vw;
  margin-bottom: 0;
  justify-content: space-between;
  @media (max-width: 1270px) {
    padding: 20px 5vw;
  }
`;
const H3 = styled.h3`
  width: 100%;
  text-align: center;
  color: white;
  font-size: 40px;
  animation: ${neon} 7s infinite;
  @media (max-width: 768px) {
    font-size: 40px;
    animation: none;
    text-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white,
      1px 1px 1px white, 0 2px white, 0 0 3px white, 0 0 5px white,
      0 0 10px #75ffca, 0 0 35px #ff9e9e, 0 0 20px #c896fa, 0 0 80px #ff9e9e,
      0 0 40px #ff9e9e, 0 0 100px #91ffff;
  }
`;
const ListArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Mnone = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Monly = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Ul = styled.ul`
  @media (max-width: 768px) {
    margin-bottom: -13px;
    width: 32vw;
  }
`;

const Ul3 = styled.ul`
  @media (max-width: 768px) {
    margin-top: -153px;
    width: 32vw;
  }
`;
const Li = styled.li`
  padding: 10px 50px 0 0;
  @media (max-width: 768px) {
    padding: 10px 0;
    width: 100%;
    font-size: 20px;
  }
`;
