// Import Modules
import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

// Import My Files
import Span from "./../../Components/Span";
import AnimationInput from "../../Components/AnimationInput";
import { fadeIn } from "./../../Styles/Variables";

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
  animation: ${fadeIn} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

// Sign Component Header
const SignHeader = styled.header`
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

const MainTitle = styled.h2`
  color: ${props => props.theme.whiteColor};
  font-size: ${props => props.fontSize}px;
  line-height: ${props => (props.lineHeight ? 52 : props.fontSize)}px;
  text-align: center;
  padding: 0 5px;
  @media (max-width: 425px) {
    font-size: ${props => props.fontSize - 5}px;
  }
  @media (max-width: 320px) {
    font-size: ${props => props.fontSize - 10}px;
  }
`;

// Sign In & Up Box
const SignForm = styled.form`
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
  transition: ${props => props.theme.transitionOpt};

  :hover {
    background-color: ${props => props.theme.mainColorHover};
  }

  @media (max-width: 320px) {
    padding: 3px 20px;
    min-width: 100px;
    font-size: 14px;
  }
`;

// Input 아래 작은 글씨 Container
const SignUpClickBox = styled.div`
  margin-top: 25px;
`;

// trans button
const TransBtn = styled.button`
  background-color: transparent;
  color: ${props => props.theme.mainColor};
  font-weight: 600;
  transition: ${props => props.theme.transitionOpt};

  :hover {
    color: ${props => props.theme.mainColorHover};
  }
`;

// Btn 정렬 Container
const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export default ({
  action,
  setAction,
  signInEmail,
  signInPw,
  signUpEmail,
  signUpPw,
  signUpRePw,
  signUpUsername,
  signOnSubmit
}) => {
  return (
    <>
      {action === "auth" && (
        <BgWrapper>
          <Wrapper welcome={true}>
            <Helmet>
              <title>Welcome | MyBrary</title>
            </Helmet>
            <Section>
              <MainTitle fontSize={42} lineHeight={true}>
                Welcome Mybrary
              </MainTitle>
              <Authbtn onClick={() => setAction("signIn")}>Get Started</Authbtn>
            </Section>
          </Wrapper>
        </BgWrapper>
      )}
      {action === "signIn" && (
        <Wrapper>
          <Section>
            <SignForm onSubmit={signOnSubmit}>
              <Helmet>
                <title>Sign In | MyBrary</title>
              </Helmet>
              <SignHeader>
                <LogoBtn type={"button"} onClick={() => setAction("auth")}>
                  <MainTitle fontSize={37}>MyBrary</MainTitle>
                </LogoBtn>
              </SignHeader>
              <AnimationInput
                id={"signInEmail"}
                type={"email"}
                {...signInEmail}
                labelText={"Email"}
              />
              <AnimationInput
                id={"signInPw"}
                type={"password"}
                {...signInPw}
                labelText={"Password"}
              />
              <SignUpClickBox>
                <Span fontSize={10} text={"Mybrary 계정이 아직 없다면 ?"} />
                <TransBtn type={"button"} onClick={() => setAction("signUp")}>
                  Sign Up
                </TransBtn>
              </SignUpClickBox>
              <BtnWrapper>
                <Authbtn type={"button"} onClick={() => setAction("auth")}>
                  Cancel
                </Authbtn>
                <Authbtn>Sign In</Authbtn>
              </BtnWrapper>
            </SignForm>
          </Section>
        </Wrapper>
      )}
      {action === "signUp" && (
        <Wrapper>
          <Section>
            <SignForm onSubmit={signOnSubmit}>
              <Helmet>
                <title>Sign In | MyBrary</title>
              </Helmet>
              <SignHeader>
                <LogoBtn type={"button"} onClick={() => setAction("auth")}>
                  <MainTitle fontSize={37}>MyBrary</MainTitle>
                </LogoBtn>
              </SignHeader>
              <AnimationInput
                id={"signUpEmail"}
                labelText={"Email"}
                type={"email"}
                {...signUpEmail}
              />
              <AnimationInput
                id={"signUpPw"}
                labelText={"Password"}
                type={"password"}
                {...signUpPw}
              />
              <AnimationInput
                id={"signUpRePw"}
                labelText={"Re Password"}
                type={"password"}
                {...signUpRePw}
              />
              <AnimationInput
                id={"signUpUsername"}
                labelText={"User Name"}
                {...signUpUsername}
              />
              <SignUpClickBox>
                <Span fontSize={10} text={"Mybrary 계정이 이미 있다면 ?"} />
                <TransBtn type={"button"} onClick={() => setAction("signIn")}>
                  Sign In
                </TransBtn>
              </SignUpClickBox>
              <BtnWrapper>
                <Authbtn type={"button"} onClick={() => setAction("signIn")}>
                  Cancel
                </Authbtn>
                <Authbtn>Sign Up</Authbtn>
              </BtnWrapper>
            </SignForm>
          </Section>
        </Wrapper>
      )}
    </>
  );
};
