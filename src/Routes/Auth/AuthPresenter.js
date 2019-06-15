// Import Modules
import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

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
  width: 300px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.6);
`;

export default ({ action, setAction }) => {
  return (
    <BgWrapper>
      <BgWrapperOn>
        {action === "auth" && (
          <>
            <MainTitle>Welcome Mybrary</MainTitle>
            <Authbtn onClick={() => setAction("signIn")}>Sign In</Authbtn>
            <Authbtn onClick={() => setAction("signUp")}>Sign Up</Authbtn>
          </>
        )}
        {action === "signIn" && (
          <SignBox>
            <MainTitle>Sign In</MainTitle>
            <Authbtn onClick={() => setAction("auth")}>Cancel</Authbtn>
          </SignBox>
        )}
        {action === "signUp" && (
          <SignBox>
            <MainTitle>Sign Up</MainTitle>
            <Authbtn onClick={() => setAction("auth")}>Cancel</Authbtn>
          </SignBox>
        )}
      </BgWrapperOn>
    </BgWrapper>
  );
};
