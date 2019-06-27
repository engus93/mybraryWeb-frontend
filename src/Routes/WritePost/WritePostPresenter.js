// Import Modules
import React from "react";
import styled from "styled-components";
import ListTitle from "./../../Components/ListTitle";
import { Helmet } from "react-helmet";

// Import My Files

// Style Components
const WritePost = styled.div``;

const Container = styled.section`
  width: ${props => props.theme.wrapperWidth};
  margin: 0 auto;
  min-height: 90vh;
  padding-bottom: 50px;
  @media (max-width: 1024px) {
    width: 90%;
  }
`;

const WriteBox = styled.article`
  width: 95%;
  height: 50vh;
  margin: 30px auto;
  padding: 20px;
  background-color: white;
  box-shadow: ${props => props.theme.boxShadow};
`;

export default () => {
  return (
    <WritePost>
      <Container>
        <Helmet>
          <title>Write Post | MyBrary</title>
        </Helmet>
        <ListTitle title={"😀 Write Post 😁"} />
        <WriteBox />
      </Container>
    </WritePost>
  );
};
