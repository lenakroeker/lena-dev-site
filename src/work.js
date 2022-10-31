import React from "react";
import styled, { keyframes } from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

export default function work() {
  return (
    <Container id="work">
      <TextArea>
        <H3>CV</H3>
        <ScrollAnimation animateIn="fadeIn">
          <Job>
            <H4>Hawke Media / Seriously Creative</H4>
            <H5>December 2021 - April 2022</H5>
            <TaskList>
              <Task>
                {" "}
                Migrating ecommerce shops to Shopify (Team Lead Experience)
              </Task>
              <Task>Building Shopify sites</Task>
              <Task>Building Customized Wordpress sites using Divi theme</Task>
              <Task>Creating sites using Unbounce</Task>
              <Task>Building sites using HTML, CSS, JS</Task>
              <Task>
                Working with various clients, adapting to their feedback and
                providing solutions
              </Task>
              <Task>
                QA of colleagues' sites and sites outsourced to 3rd party
                developers (peer review)
              </Task>
              <Task>
                Editing assets in Photoshop Working from designs provided in
                Adobe XD
              </Task>
            </TaskList>
          </Job>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <Job>
            <H4>Lolë</H4>
            <H5>March 2021 - Sept 2022</H5>
            <TaskList>
              <Task>
                Creating static-page system using reusable components as well as
                managing home page content and designs using storyblok
              </Task>
              <Task>Creating searchspring filter facets for plps</Task>
              <Task>Creating Shopify collections components</Task>
              <Task>Overseeing new listrak newsletter subscription flows</Task>
              <Task>Working from figma designs to update menus/modals</Task>
              <Task>
                Creating collections and discount codes, updating sales in
                Shopify
              </Task>
              <Task>
                Creating collections and discount codes, updating sales in
                Shopify{" "}
              </Task>
              <Task>
                Creating documentation for Storyblok static page and home page
                management{" "}
              </Task>
            </TaskList>
          </Job>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <Job>
            <H4>Concordia Full Stack Bootcamp</H4>
            <H5>Sept 2020 - December 2020</H5>
            <TaskList>
              <Task>Intensive full-stack web development boot camp</Task>
              <Task>
                Front-end: React, Redux, JavaScript, HTML, CSS, Styled
                Components
              </Task>
              <Task> Backend: Node.js, MongoDB, Express, Firebase</Task>
            </TaskList>
          </Job>
        </ScrollAnimation>
      </TextArea>
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
  margin: 0;
  height: auto;
  width: 100%;
  background: black;
  padding-bottom: 50px;
  padding-top: 50px;
  color: #fffafc;
  @media (max-width: 768px) {
    padding: 0px;
  }
`;

const H3 = styled.h3`
  width: 100%;
  text-align: center;
  color: white;
  font-size: 40px;
  animation: ${neon} 7s infinite;
  @media (max-width: 768px) {
    font-size: 50px;
    margin-top: 0;
    animation: none;
    text-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white,
      1px 1px 1px white, 0 2px white, 0 0 3px white, 0 0 5px white,
      0 0 10px #75ffca, 0 0 35px #ff9e9e, 0 0 20px #c896fa, 0 0 80px #ff9e9e,
      0 0 40px #ff9e9e, 0 0 100px #91ffff;
  }
`;

const TextArea = styled.div`
  width: 40vw;
  height: auto;
  margin: 50px auto;
  padding: 10px 20px;
  background: black;
  color: #fffafc;
  @media (max-width: 768px) {
    width: 90vw;
    font-size: 20px;
  }
`;

const H4 = styled.h4`
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const H5 = styled.h5``;
const Job = styled.div`
  border: 3px solid #fffafc;
  margin: 20px;
  padding: 5px 15px;
  transition: 3s ease-in-out;
  &:hover {
    box-shadow: -1px -1px 1px white, -1px 1px 1px white, 1px -1px 1px white,
      1px 1px 1px white, 0 2px white, 0 0 3px white, 0 0 5px white,
      0 0 2px #91ffff, 0 0 15px #ff9e9e, 0 0 10px #ff9e9e, 0 0 15px #ff9e9e,
      0 0 10px #ff9e9e, 0 0 10px #75ffca;
  }
  @media (max-width: 768px) {
    margin: 20px 0px;
  }
`;

const TaskList = styled.ul``;
const Task = styled.li`
  font-size: 14px;
  margin: 5px 0;
  @media (max-width: 768px) {
    font-size: 20px;
    margin: 10px 0 10px -20px;
  }
`;
