// Import Modules
import React from "react";
import styled from "styled-components";

// Import My Files
import { Nothing } from "./Icons";

// Style Components
const Container = styled.section`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NothingBox = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const Text = styled.h5`
  margin-left: 10px;
  font-size: 24px;
`;

export default () => {
  return (
    <Container>
      <NothingBox>
        <Nothing size={30} />
        <Text>Nothing</Text>
      </NothingBox>
    </Container>
  );
};
