// Import Modules
import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

// Import My Files
import Input from "./../../Components/Input";
import Span from "./../../Components/Span";

// Styled Components

// 배경화면
const BgWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1453&q=80")
    no-repeat center / cover;
  opacity: 0.9;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props =>
    props.welcome ? "rgba(0, 0, 0, 0.3)" : props.theme.mainColorBG};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

// Sign Component Header
const SignHeader = styled.div`
  background-color: ${props => props.theme.mainColor};
  border-radius: 4px 4px 0 0;
  width: 100%;
  height: 70px;
  position: absolute;
  text-align: center;
  top: 0;
`;

// Header Logo
const LogoBtn = styled.button`
  width: auto;
  background-color: transparent;
  padding: 0;
  top: 17px;
  position: relative;
`;

const MainTitle = styled.h1`
  color: ${props => props.theme.whiteColor};
  font-size: ${props => props.fontSize};
  line-height: ${props => (props.lineHeight ? "52px" : props.fontSize)};
  text-align: center;
`;

// Sign In & Up Box
const SignBox = styled.div`
  background-color: ${props => props.theme.lightWhiteColor};
  width: 350px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: ${props => props.theme.borderRadius};
  padding: 100px 0 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  @media (max-width: 375px) {
    width: 95%;
  }
`;

// Sign In & Up Public Btn
const Authbtn = styled.button`
  box-shadow: ${props => props.theme.boxShadow};
  color: white;
  margin-top: 30px;
  padding: 7px 20px;
  min-width: 125px;
  border-radius: 17px;
  background-color: ${props => props.theme.mainColor};
  font-weight: 600;
  font-size: 16px;
  :hover {
    background-color: ${props => props.theme.mainColorHover};
    transition: background-color ease-out 0.2s;
  }
`;

// Input 아래 작은 글씨 Container
const SignUpClickBox = styled.div`
  margin-top: 25px;
`;

const Button = styled.button`
  background-color: transparent;
  color: ${props => props.theme.mainColor};
  font-weight: 600;
`;

// Btn 정렬 Container
const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const SignInput = styled(Input)`
  margin-top: 20px;
`;

export default ({
  action,
  setAction,
  signInEmail,
  signInPw,
  signUpEmail,
  signUpPw,
  signUpRePw,
  signUpUsername
}) => {
  return (
    <>
      {action === "auth" && (
        <BgWrapper>
          <Wrapper welcome={true}>
            <Helmet>
              <title>Welcome | MyBrary</title>
            </Helmet>
            <MainTitle fontSize={"42px"} lineHeight={true}>
              Welcome Mybrary
            </MainTitle>
            <Authbtn onClick={() => setAction("signIn")}>Get Started</Authbtn>
          </Wrapper>
        </BgWrapper>
      )}
      {action === "signIn" && (
        <Wrapper>
          <SignBox>
            <Helmet>
              <title>Sign In | MyBrary</title>
            </Helmet>
            <SignHeader>
              <LogoBtn onClick={() => setAction("auth")}>
                <MainTitle fontSize={"32px"}>MyBrary</MainTitle>
              </LogoBtn>
            </SignHeader>
            <SignInput placeholder={"Email"} type={"email"} {...signInEmail} />
            <SignInput
              placeholder={"Password"}
              type={"password"}
              {...signInPw}
            />
            <SignUpClickBox>
              <Span fontSize={10} text={"Mybrary 계정이 아직 없다면 ?"} />
              <Button onClick={() => setAction("signUp")}>Sign Up</Button>
            </SignUpClickBox>
            <BtnWrapper>
              <Authbtn onClick={() => setAction("auth")}>Cancel</Authbtn>
              <Authbtn onClick={() => setAction("auth")}>Sign In</Authbtn>
            </BtnWrapper>
          </SignBox>
        </Wrapper>
      )}
      {action === "signUp" && (
        <Wrapper>
          <SignBox>
            <Helmet>
              <title>Sign In | MyBrary</title>
            </Helmet>
            <SignHeader>
              <LogoBtn onClick={() => setAction("auth")}>
                <MainTitle fontSize={"32px"}>MyBrary</MainTitle>
              </LogoBtn>
            </SignHeader>
            <SignInput placeholder={"Email"} type={"email"} {...signUpEmail} />
            <SignInput
              placeholder={"Password"}
              type={"password"}
              {...signUpPw}
            />
            <SignInput
              placeholder={"Re Password"}
              type={"password"}
              {...signUpRePw}
            />
            <SignInput placeholder={"User Name"} {...signUpUsername} />
            <SignUpClickBox>
              <Span fontSize={10} text={"Mybrary 계정이 이미 있다면 ?"} />
              <Button onClick={() => setAction("signIn")}>Sign In</Button>
            </SignUpClickBox>
            <BtnWrapper>
              <Authbtn onClick={() => setAction("signIn")}>Cancel</Authbtn>
              <Authbtn onClick={() => setAction("signIn")}>Sign Up</Authbtn>
            </BtnWrapper>
          </SignBox>
        </Wrapper>
      )}
    </>
  );
};
