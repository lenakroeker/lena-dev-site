import React from "react";
import styled from "styled-components";
import { FiGithub, FiLinkedin, FiInstagram, FiCodepen } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

export default function Socials() {
  return (
    <Container>
      <TextArea>
        <Div>
          <A href="https://github.com/lenakroeker">
            <FiGithub size={20} />
          </A>
        </Div>
        <Div>
          <A href="https://www.instagram.com/lenakatrinak">
            <FiInstagram size={20} />
          </A>
        </Div>
        <Div>
          <A href="https://www.linkedin.com/in/lena-kroeker">
            <FiLinkedin size={20} />
          </A>
        </Div>
        <Div>
          <A href="https://codepen.io/LenaKK">
            <FiCodepen size={20} />
          </A>
        </Div>
        <Div>
          <A href="mailto:lenakroeker@gmail.com">
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
  bottom: 0;
  right: 0;
  @media (max-width: 767px) {
    display: none;
  }
`;

const TextArea = styled.div`
  background: transparent;
  color: #ccfcf1;
  line-height: 20px;
`;

const Div = styled.div`
  padding: 20px 10px;
`;

const A = styled.a`
  color: #ccfcf1;
  height: 50px;
`;
