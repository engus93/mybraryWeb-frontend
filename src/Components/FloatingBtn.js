import React from "react";
import styled from "styled-components";
import { FloatingWrite } from "./Icons";
import { Link, withRouter } from "react-router-dom";

const Container = styled.button`
  /* Fixed */
  position: fixed;
  z-index: 20;
  right: 2vw;
  bottom: 2vh;
  /* Design */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  padding: 5px;
  border-radius: 50%;
  box-sizing: content-box;
  background-color: #fffaf0;
  box-shadow: ${props => props.theme.boxShadow};
  transition: 0.3s;
  :hover {
    opacity: 0.9;
    box-shadow: ${props => props.theme.boxShadowHover};
  }
`;

const FloatingWriteCustom = styled(FloatingWrite)`
  width: 35px;
  height: 35px;
`;

export default withRouter(({ history: { location: { pathname } } }) => {
  return (
    <>
      {pathname &&
        pathname !== "/writePost" &&
        Boolean(pathname.indexOf("/editPost")) && (
          <Link to={"/writePost"}>
            <Container>
              <FloatingWriteCustom />
            </Container>
          </Link>
        )}
    </>
  );
});
