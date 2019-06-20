// Import Modules
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Span from "./Span";
import { Write } from "./Icons";

const Container = styled.article`
  width: 90%;
  margin: 30px auto;
  padding: 12px 15px;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-gap: 15px;
  background-color: white;
  cursor: pointer;
  user-select: none;
  box-shadow: ${props => props.theme.smBoxShadow};
`;

const LeftBox = styled.div``;

const Image = styled.img`
  width: 180px;
`;

const RightBox = styled.div`
  position: relative;
  padding: 10px;
`;

const Title = styled.h5`
  font-size: 24px;
  margin-bottom: 12px;
  font-weight: 500;
`;

const Author = styled.span`
  display: block;
  padding: 7px;
`;
const Pubdate = styled.span`
  display: block;
  padding: 7px;
`;
const Publisher = styled.span`
  display: inline-block;
  padding: 7px;
`;
const Genre = styled.span`
  display: inline-block;
  margin-left: 5px;
  padding: 4px;
  border-radius: 3px;
  background: ${props => props.theme.lightWhiteColor};
  color: darkorange;
`;
const Description = styled.span`
  display: block;
  padding: 12px 7px;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 1.5rem;
`;

const WirteBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  bottom: 10px;
  background-color: ${props => props.theme.mainColor};
  padding: 5px 10px;
  border-radius: 15px;
  color: white;
  transition: 0.3s;
  :hover {
    opacity: 0.7;
  }
`;

const WriteIcon = styled(Write)`
  margin-right: 5px;
`;

const WideBookBlock = () => {
  const genreList = "국내도서>에세이>한국에세이".split(">");

  return (
    <Container>
      <LeftBox>
        <Image
          src={
            "https://image.aladin.co.kr/product/18827/60/cover/8954655971_2.jpg"
          }
        />
      </LeftBox>
      <RightBox>
        <Title>여행의 이유 - 김영하 산문</Title>
        <Author>김영하 (지은이)</Author>
        <Pubdate>2019-04-17</Pubdate>
        <Publisher>문학동네</Publisher>
        {genreList &&
          genreList.length > 0 &&
          genreList.map(word => <Genre>{word}</Genre>)}
        <Description>
          {`이 책을 쓰는 데 내 모든 여행의 경험이 필요했다.\" 작가 김영하가 처음
              여행을 떠났던 순간부터 최근의 여행까지, 오랜 시간 여행을 하면서 느끼고
              생각했던 것들을 아홉 개의 이야기로 풀어낸 산문이다.`}
        </Description>
        <WirteBtn>
          <WriteIcon size={16} />
          작성하기
        </WirteBtn>
      </RightBox>
    </Container>
  );
};

WideBookBlock.propTypes = {};

export default WideBookBlock;
