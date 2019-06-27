// Import Modules
import React, { useEffect } from "react";
import styled from "styled-components";
import Label from "./Label";
import { useState } from "react";

// Styled Components
const Container = styled.div`
  position: relative;
  margin-top: 30px;
`;

const PostTextarea = styled.textarea`
  padding: 7px;
  font-family: initial;
  width: 100%;
  font-size: 14px;
  outline: none;
  border-bottom: ${props =>
    props.ani ? "1.2px solid " + props.theme.mainColor : "1.2px solid #ddd"};
  resize: none;
  transition: 0.3s;
  :focus {
    border-bottom: 1.2px solid ${props => props.theme.mainColor};
  }
`;

const AniLabel = styled(Label)`
  position: absolute;
  left: 0;
  ${props => {
    if (props.ani) {
      return `
      top: -15px;
      font-size: 14px;
      font-weight: 600;
      color: ${props.theme.mainColor};
      `;
    } else {
      return `
      top: 10px;
      font-size: 12px;
      font-weight: 300;
      color: ${props.theme.blackColor};
      `;
    }
  }}
  pointer-events: none;
  transition: ${props => props.theme.transitionOpt};
  /* Focus Animation */
  ${PostTextarea}:focus ~ & {
    left: 0;
    top: -15px;
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.theme.mainColor};
  }
`;

// Render
const AnimationTextarea = ({
  id,
  placeholder,
  required = true,
  value,
  onChange,
  type = "text",
  labelText,
  disabled,
  className
}) => {
  const [ani, setAni] = useState(false);

  useEffect(() => {
    if (value !== "") {
      setAni(true);
    } else {
      setAni(false);
    }
  }, [value]);

  return (
    <Container className={className}>
      <PostTextarea
        id={id}
        value={value}
        onChange={onChange}
        rows="10"
        cols="50"
        ani={ani}
      />
      <AniLabel htmlFor={id} labelText={labelText} ani={ani} />
    </Container>
  );
};

export default AnimationTextarea;
