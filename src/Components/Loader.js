import React from "react";
import styled, { keyframes } from "styled-components";
import { Library } from "./Icons";

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

const Loader = styled.div`
  animation: ${Animation} 1s linear infinite;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <Loader>
    <Library size={48} />
  </Loader>
);
