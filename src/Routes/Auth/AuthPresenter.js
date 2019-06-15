// Import Modules
import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

// Import My Files
import Input from "./../../Components/Input";

// Styled Components
const BgWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1453&q=80")
    no-repeat center / cover;
  opacity: 0.9;
`;

const BgWrapperOn = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MainTitle = styled.h1`
  color: white;
  font-size: 42px;
  text-align: center;
  padding: 20px;
`;

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

const SignBox = styled.div`
  padding: 90px 70px;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    <BgWrapper>
      <BgWrapperOn>
        {action === "auth" && (
          <>
            <Helmet>
              <title>Welcome | MyBrary</title>
            </Helmet>
            <MainTitle>Welcome Mybrary</MainTitle>
            <Authbtn onClick={() => setAction("signIn")}>Sign In</Authbtn>
            <Authbtn onClick={() => setAction("signUp")}>Sign Up</Authbtn>
          </>
        )}
        {action === "signIn" && (
          <SignBox>
            <Helmet>
              <title>Sign In | MyBrary</title>
            </Helmet>
            <MainTitle>Sign In</MainTitle>
            <SignInput placeholder={"Email"} type={"email"} {...signInEmail} />
            <SignInput
              placeholder={"Password"}
              type={"password"}
              {...signInPw}
            />
            <Authbtn onClick={() => setAction("auth")}>Cancel</Authbtn>
          </SignBox>
        )}
        {action === "signUp" && (
          <SignBox>
            <Helmet>
              <title>Sign Up | MyBrary</title>
            </Helmet>
            <MainTitle>Sign Up</MainTitle>
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
            <Authbtn onClick={() => setAction("auth")}>Cancel</Authbtn>
          </SignBox>
        )}
      </BgWrapperOn>
    </BgWrapper>
  );
};
