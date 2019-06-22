import React from "react";
import styled, { keyframes } from "styled-components";
import { Library } from "./Icons";
import PropTypes from "prop-types";

const Animation = keyframes`
0%{
    opacity: 0;
}
50%{
    opacity: 1;
}
100%{
    opacity: 0;
}
`;

const Container = styled.div`
  animation: ${Animation} 1s linear infinite;
  width: 100%;
  height: ${props => (props.paging ? "20vh" : "80vh")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = ({ size = 48, paging = false }) => {
  return (
    <Container paging={paging}>
      <Library size={size} />
    </Container>
  );
};

Loader.propTpyes = {
  size: PropTypes.number,
  paging: PropTypes.bool
};

export default Loader;
