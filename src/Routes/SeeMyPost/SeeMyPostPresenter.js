// Import Modules
import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

// Import My Files
import ListTitle from "./../../Components/ListTitle";
import { LeftArrow, RightArrow } from "./../../Components/Icons";
import Span from "./../../Components/Span";
import PostBlock from "../../Components/PostBlock";

// Style Components
const SeeMyPost = styled.div`
  background-color: ${props => props.theme.whiteBG};
`;

const Container = styled.section`
  width: ${props => props.theme.wrapperWidth};
  margin: 0 auto;
  padding-bottom: 50px;
  @media (max-width: 1024px) {
    width: 90%;
  }
`;

const DateSelectBox = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 35px 20px;
`;

const DateBtn = styled.button`
  background-color: ${props => props.theme.mainColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  padding: 5px;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
  }
`;

export default () => {
  return (
    <SeeMyPost>
      <Container>
        <Helmet>
          <title>MyBrary | MyBrary</title>
        </Helmet>
        <section>
          <ListTitle title={"📚 MyBrary 📖"} />
          <DateSelectBox>
            <DateBtn>
              <LeftArrow size={14} />
            </DateBtn>
            <Span text={"2019년 6월"} fontSize={22} marginValue={"auto 10px"} />
            <DateBtn>
              <RightArrow size={14} />
            </DateBtn>
          </DateSelectBox>
          <PostBlock
            date={"19 / 06 / 26"}
            author={"Django"}
            title={"오늘 밤은 어둠이 무서워요"}
            content={"동해물관 백두산이 마르고 닳도록"}
          />
          <PostBlock
            date={"19 / 06 / 26"}
            author={"Django"}
            title={"오늘 밤은 어둠이 무서워요"}
            content={"동해물관 백두산이 마르고 닳도록"}
          />
          <PostBlock
            date={"19 / 06 / 26"}
            author={"Django"}
            title={"오늘 밤은 어둠이 무서워요"}
            content={"동해물관 백두산이 마르고 닳도록"}
          />
          <PostBlock
            date={"19 / 06 / 26"}
            author={"Django"}
            title={"오늘 밤은 어둠이 무서워요"}
            content={"동해물관 백두산이 마르고 닳도록"}
          />
        </section>
      </Container>
    </SeeMyPost>
  );
};
