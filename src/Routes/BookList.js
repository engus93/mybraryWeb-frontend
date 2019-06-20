// Import Modules
import React from "react";
import styled from "styled-components";

// Import My Files
import ListTitle from "./../Components/ListTitle";
import WideBookBlock from "./../Components/WideBookBlock";

// Stlye Components
const BookList = styled.div`
  background-color: ${props => props.theme.whiteBG};
  height: 90vh;
`;

const Wrapper = styled.section`
  width: ${props => props.theme.wrapperWidth};
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export default () => {
  return (
    <BookList>
      <Wrapper>
        <ListTitle
          title={`🏆 ${new Date().getFullYear()}년 ${new Date().getMonth() +
            1}월 베스트셀러 🏆`}
          moreLink={"/"}
        />
        <WideBookBlock />
      </Wrapper>
    </BookList>
  );
};
