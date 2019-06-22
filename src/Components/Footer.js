// Import Modules
import React from "react";
import styled from "styled-components";
import Span from "./Span";
import { GitHub } from "./Icons";

// Style Components
const Footer = styled.footer`
  background-color: ${props => props.theme.mainColor};
  width: 100%;
`;

const FooterWrapper = styled.div`
  width: ${props => props.theme.wrapperWidth};
  margin: 0 auto;
  padding: 20px 7px;
  display: grid;
  grid-template-rows: (3, 1fr);
  grid-row-gap: 20px;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const GithubLink = styled.a`
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FlexCenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;
`;

const FooterSpan = styled(Span)`
  font-weight: 600;
  color: white;
  user-select: none;
`;

export default () => {
  return (
    <Footer>
      <FooterWrapper>
        {/* <FlexCenterBox>
          <FooterSpan text={"MYBRARY"} fontSize={30} />
        </FlexCenterBox> */}
        <FlexCenterBox>
          <GithubLink
            href={"https://github.com/engus93/prismagram-backend"}
            target="_blank"
            alt="새창"
          >
            <GitHub size={30} />
            <FooterSpan
              text={"Github"}
              fontSize={14}
              marginValue={"10px 0 0 0"}
            />
          </GithubLink>
        </FlexCenterBox>
        <FlexCenterBox>
          <FooterSpan
            text={`도서 관련 정보들은 알라딘 API를 사용하였습니다.`}
            fontSize={12}
          />
        </FlexCenterBox>
        <FlexCenterBox>
          <FooterSpan
            text={`Copyright ⓒ ${new Date().getFullYear()} · MYBRARY All Rights
            Reserved.`}
            fontSize={12}
          />
        </FlexCenterBox>
      </FooterWrapper>
    </Footer>
  );
};
