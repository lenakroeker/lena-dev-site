import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";

export default function Work() {
  const screenHeight = window.innerHeight;

  return (
    <Container id="work">
      <TextArea>
        <H3>CV</H3>

        <Job>
          <Head>
            <H4>
              UX Design / Development Lead @<H5> Matchbox Energy</H5>
            </H4>
            <H6>2023 - 2024</H6>
          </Head>

          <TaskList>
            <Task>
              Enhanced software team cohesion, streamlining development
              processes and ensuring timely project delivery, leading to
              licensing negotiations with the second-largest US design firm,
              transforming a zero-revenue company into a revenue-generating
              entity.
            </Task>
            <Task>
              Developed a compelling brand identity, executed impactful UX
              writing and design, and led the successful implementation of a
              React-based website, elevating the company's online presence.
            </Task>
          </TaskList>
        </Job>

        <Job>
          <Head>
            <H4>
              Web Consultant @<H5> Wine & Peace</H5>
            </H4>
            <H6>2023</H6>
          </Head>
          <TaskList>
            <Task>
              Provided strategic guidance on migrating an ecommerce platform,
              conducting a detailed analysis for transitioning from WooCommerce
              to Shopify.
            </Task>
            <Task>
              Conducted a comprehensive evaluation, delivering actionable
              recommendations for a seamless transition, improved functionality,
              and potential business growth.
            </Task>
          </TaskList>
        </Job>

        <Job>
          <Head>
            <H4>
              UX Design / Web Development Lead @<H5> Grey Room Shop</H5>
            </H4>
            <H6>2022 - 2023</H6>
          </Head>
          <TaskList>
            <Task>
              Transformed a Depop reseller account into a thriving curated
              ecommerce brand, achieving an 80% reduction in the cost of online
              sales and a notable 50% increase in monthly sales through
              strategic initiatives.{" "}
            </Task>
            <Task>
              Crafted a compelling visual brand identity and executed impactful
              UX design, contributing to the brand's market appeal and enhanced
              customer experience.
            </Task>
            <Task>
              Successfully spearheaded the development of a custom Shopify site
              utilizing Liquid, optimizing the front end for seamless
              transactions and improved user engagement.
            </Task>
          </TaskList>
        </Job>

        <Job>
          <Head>
            <H4>
              Web Developer @ <H5>Hawke Media / Seriously Creative</H5>
            </H4>

            <H6>2021 - 2022</H6>
          </Head>

          <TaskList>
            <Task>
              Lead and collaborated on creation sites for a large roster of high
              profile marketing clients. Spearheaded site creation for
              high-profile marketing clients, demonstrating strong project
              management skills.{" "}
            </Task>
            <Task>
              Led the migration and redesign of Sparrows Lockpicks' website from
              WooCommerce to Shopify, ensuring seamless execution.
            </Task>
            <Task>Building Customized Wordpress sites using Divi theme</Task>
            <Task>
              Oversaw the entire process, ensuring client satisfaction and
              maintaining strong relationships.
            </Task>
          </TaskList>
        </Job>

        <Job>
          <Head>
            <H4>
              Front End Developer @ <H5>Lolë</H5>
            </H4>
            <H6>2021-2022</H6>
          </Head>

          <TaskList>
            <Task>
              Developed a dynamic careers page, sweepstakes page, and revamped
              Product Display Page (PDP) for an international fashion brand,
              enhancing online user experience.
            </Task>
            <Task>
              Led the creation of a streamlined, reusable static-page system
              using Storyblok and Vue.js / Tailwind.
            </Task>
            <Task>
              Directed the optimization of Listrak newsletter subscription
              flows, ensuring efficient communication and increased user
              engagement.
            </Task>
          </TaskList>
        </Job>
        <Job>
          <Head>
            <H4>
              Clothing Designer - Self-Employed @ <H5>Lena Kroeker Design</H5>
            </H4>
            <H6>2008 - 2019</H6>
          </Head>
        </Job>

        <Job>
          <Head>
            <H4>Decode MTL</H4>
            <H6>2020</H6>
          </Head>
        </Job>
      </TextArea>
    </Container>
  );
}

const Container = styled.div`
  margin: 2400px 0 350px 0;
  height: auto;
  width: 100%;
  background: transparent;
  padding-bottom: 50px;
  padding-top: 50px;
  color: black;
  overflow-y: hidden;
  @media (max-width: 768px) {
    padding: 0px;
    margin-bottom: 260vw;
    text-align: center;
  }
  @media (aspect-ratio: 16/9) {
    margin-bottom: 200vh;
  }
`;

const Head = styled.div`
  text-align: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: block;
  }
`;

const H3 = styled.h3`
  width: 100%;
  text-align: center;
  color: black;
  font-size: 40px;
  margin-top: 100px;
  @media (max-width: 768px) {
    font-size: 50px;
    margin: 0;
    animation: none;
  }
`;
const A = styled.a`
  text-align: center;
  text-decoration: none;
  background: white;
  padding: 10px 30px;
  border-radius: 30px;
  color: black;
  margin: auto;
  transition: 0.5s ease;
  cursor: pointer;
  &:hover {
    background: #f6cfd6;
  }
`;

const TextArea = styled.div`
  width: 60vw;
  height: auto;
  margin: 50px auto;
  padding: 10px 20px;
  color: black;
  @media (max-width: 768px) {
    width: 90vw;
    margin: 0;
    font-size: 20px;
    padding-top: 150px;
  }
`;

const H4 = styled.h4`
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 20px;
  letter-spacing: 0.1em;
  @media (max-width: 768px) {
    font-size: 20px;
    width: 100%;
    padding: 0;
    margin: 2px;
  }
`;

const H5 = styled.span`
  color: #6b6b76;
  @media (max-width: 768px) {
    width: 100%;
    margin: 2px;
  }
`;

const H6 = styled.h5`
  font-weight: black;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin: 2px;
  }
`;
const Job = styled.div`
  margin: 20px;
  padding: 5px 15px;
  transition: 1s ease-in-out;
  background: #ffffff65;
  @media (max-width: 768px) {
    margin: 15px 2px;
  }
`;

const TaskList = styled.ul``;
const Task = styled.li`
  font-size: 14px;
  margin: 5px 0;
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: left;

    margin: 10px 0 10px -20px;
  }
`;
