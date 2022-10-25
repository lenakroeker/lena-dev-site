import React from "react";
import styled from "styled-components";

export default function work() {
  return (
    <Container>
      <TextArea>Copyright © 2022 Lena Kroeker All Rights Reserved.</TextArea>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 45px;
  height: 60px;
  background: black;
  text-align: center;
  margin-bottom: 0;
`;

const TextArea = styled.div`
  background: black;
  color: white;
  font-size: 12px;
`;
