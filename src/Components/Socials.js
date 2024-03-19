import React from "react";
import styled from "styled-components";
import { FiGithub, FiLinkedin, FiInstagram, FiCodepen } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

export default function Socials() {
  return (
    <Container>
      <TextArea>
        <Div>
          <A href="https://github.com/lenakroeker" target="_blank">
            <FiGithub size={20} />
          </A>
        </Div>
        <Div>
          <A href="https://www.instagram.com/lenakatrinak" target="_blank">
            <FiInstagram size={20} />
          </A>
        </Div>
        <Div>
          <A href="https://www.linkedin.com/in/lena-kroeker" target="_blank">
            <FiLinkedin size={20} />
          </A>
        </Div>
        <Div>
          <A href="https://codepen.io/LenaKK" target="_blank">
            <FiCodepen size={20} />
          </A>
        </Div>
        <Div>
          <A href="mailto:lenakroeker@gmail.com" target="_blank">
            <MdOutlineMail size={20} />
          </A>
        </Div>
      </TextArea>
    </Container>
  );
}

const Container = styled.div`
  height: auto;
  width: 50px;
  background: transparent;
  position: fixed;
  z-index: 300;
  bottom: 0;
  right: 0;
  @media (max-width: 767px) {
    left: 0;
  }
`;

const TextArea = styled.div`
  background: transparent;
  color: #f0fcfa;
  line-height: 20px;
`;

const Div = styled.div`
  padding: 20px 10px;
`;

const A = styled.a`
  color: black;
  height: 50px;
`;
