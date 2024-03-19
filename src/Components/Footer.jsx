import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <TextArea>Copyright © 2024 Lena Kroeker All Rights Reserved.</TextArea>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 45px;
  height: 60px;
  background: black;
  text-align: center;
  position: relative;
  margin-bottom: 0;
  z-index: 100;
  @media (max-width: 768px) {
    height: 60px;
  }
`;

const TextArea = styled.div`
  background: black;
  color: white;
  font-size: 12px;
`;
