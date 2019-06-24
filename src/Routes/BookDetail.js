// Import Modules
import React from "react";
import styled from "styled-components";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";

// Import My Files
import { Write } from "./../Components/Icons";
import DetailDescriptionBox from "../Components/DetailDescriptionBox";

const ResponsiveLines = responsiveHOC()(LinesEllipsis);

// Style Componentes
const BookDetail = styled.div`
  background-color: ${props => props.theme.whiteBG};
`;

const Header = styled.header`
  background-color: #282a35;
  width: 100%;
  user-select: none;
`;

const Container = styled.section`
  width: ${props => props.theme.wrapperWidth};
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  padding-top: 15px;
  position: relative;
  top: 30px;
  @media (max-width: 1024px) {
    top: 20px;
  }
  @media (max-width: 576px) {
    top: 7px;
    padding-bottom: 25px;
    flex-direction: column;
  }
`;

const HeaderDivideLeft = styled.div`
  margin-left: 25px;
  @media (max-width: 1024px) {
    margin-left: 20px;
  }
  @media (max-width: 576px) {
    margin: 10px auto;
  }
`;

const HeaderDivideRight = styled.div`
  margin: 0 25px;
  color: #fff;
  @media (max-width: 1024px) {
    margin: 0 20px;
  }
`;

const BookImg = styled.img`
  box-shadow: ${props => props.theme.boxShadow};
  height: 300px;
  object-fit: contain;
  border-radius: 5px;
  transition: 0.3s;
  @media (max-width: 768px) {
    height: 250px;
  }
  @media (max-width: 576px) {
    height: 200px;
  }
`;

const BookTitle = styled(ResponsiveLines)`
  color: white;
  font-size: 24px;
  margin-bottom: 7px;
  line-height: 30px;
  height: 60px;
  @media (max-width: 1024px) {
    font-size: 22px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 576px) {
    font-weight: 600;
    font-size: 16px;
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

const Section = styled.section`
  padding: 30px 30px 85px;
  @media (max-width: 576px) {
    padding: 0px 30px 85px;
  }
  @media (max-width: 425px) {
    padding: 0px 14px 85px;
  }
`;

const SubContents = styled.span`
  display: block;
  padding: 7px 7px 7px 10px;
  @media (max-width: 768px) {
    padding: 6px 7px 6px 10px;
    font-size: 12px;
  }
  @media (max-width: 576px) {
    padding: 4px 7px 4px 10px;
    font-size: 11px;
    text-align: center;
  }
`;

const Genre = styled.span`
  display: inline-block;
  margin: 5px 5px 0 0;
  padding: 5px;
  border-radius: 5px;
  color: darkorange;
  background: ${props => props.theme.lightWhiteColor};
  @media (max-width: 576px) {
    margin: 1px 5px 0 0;
  }
`;

const WriteBox = styled.div`
  text-align: right;
  margin: 10px 15px 0 0px;

  @media (max-width: 1024px) {
    margin: 32px 15px 0 0px;
  }
  @media (max-width: 768px) {
    margin: 12px 15px 0 0px;
  }
`;

const WirteBtn = styled.button`
  color: white;
  font-size: 16px;
  padding: 7px 20px;
  border-radius: 20px;
  transition: 0.3s;
  background-color: ${props => props.theme.mainColor};

  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 5px 12px;
  }
  @media (max-width: 768px) {
    width: 100%;
    border-radius: 2px;
  }
  :hover {
    opacity: 0.7;
  }
`;

const WriteIcon = styled(Write)`
  margin-right: 7px;
`;

export default () => {
  return (
    <BookDetail>
      <Header>
        <Container>
          <HeaderWrapper>
            <HeaderDivideLeft>
              <BookImg
                src={
                  "https://gpbqopmikmnr903351.cdn.ntruss.com/37000k_38000k/d6caf7e5074a215b0c4ad43e28d06afd.jpg?type=w&w=200&extopt=3&quality=100"
                }
              />
            </HeaderDivideLeft>
            <HeaderDivideRight>
              <div>
                <BookTitle
                  text={`박막례, 이대로 죽을 순 없다 - 독보적 유튜버 박막례와 천재 PD 손녀 김유라의 말도 안 되게 뒤집힌 신나는 인생!`}
                  maxLine="2"
                  ellipsis="..."
                  trimRight
                  basedOn="letters"
                />
                <SubContents>{"박막례, 김유라 (지은이)"}</SubContents>
                <SubContents>{"2019-06-03"}</SubContents>
                <SubContents>{"ㅋㅋㅋ"}</SubContents>
                <SubContents>
                  {["국내도서", "에세이", "명사에세이", "기타"].map(
                    (word, index) => (
                      <Genre key={index}>{word}</Genre>
                    )
                  )}
                </SubContents>
              </div>
              <WriteBox>
                <WirteBtn>
                  <WriteIcon size={16} />
                  작성하기
                </WirteBtn>
              </WriteBox>
            </HeaderDivideRight>
          </HeaderWrapper>
        </Container>
      </Header>
      <Container>
        <Section>
          <DetailDescriptionBox
            title={"책 소개"}
            text={
              "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ"
            }
          />
        </Section>
      </Container>
    </BookDetail>
  );
};
