// Import Modules
import React from "react";
import styled from "styled-components";
import { Write } from "./../Components/Icons";

// Import My Files

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
`;

const HeaderDivideLeft = styled.div`
  margin-left: 25px;
`;

const HeaderDivideRight = styled.div`
  margin-left: 25px;
  color: #fff;
`;

const BookImg = styled.img`
  box-shadow: ${props => props.theme.boxShadow};
  height: 300px;
  object-fit: contain;
  border-radius: 5px;
`;

const BookTitle = styled.h3`
  color: white;
  font-size: 24px;
  margin-bottom: 7px;
  line-height: 30px;
`;

const Section = styled.section`
  background-color: #bbb;
  height: 150vh;
`;

const Footer = styled.footer`
  background-color: #ccc;
  height: 50vh;
`;

const SubContents = styled.span`
  display: block;
  padding: 7px 7px 7px 10px;
`;

const Genre = styled.span`
  display: inline-block;
  margin: 5px 5px 0 0;
  padding: 5px;
  border-radius: 5px;
  color: darkorange;
  background: ${props => props.theme.lightWhiteColor};
`;

const WriteBox = styled.div`
  text-align: right;
  margin: 10px 15px 0 0px;
`;

const WirteBtn = styled.button`
  color: white;
  font-size: 16px;
  padding: 7px 20px;
  border-radius: 20px;
  transition: 0.3s;
  background-color: ${props => props.theme.mainColor};
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
                <BookTitle>
                  박막례, 이대로 죽을 순 없다 - 독보적 유튜버 박막례와 천재 PD
                  손녀 김유라의 말도 안 되게 뒤집힌 신나는 인생!
                </BookTitle>
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
        <Section />
        <Footer />
      </Container>
    </BookDetail>
  );
};
