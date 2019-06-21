// Import Modules
import React, { useEffect } from "react";
import styled from "styled-components";
import Input from "./Input";
import Label from "./Label";
import { useState } from "react";

// Styled Components
const Container = styled.div`
  position: relative;
  margin-top: 20px;
`;

const AniInput = styled(Input)``;

const AniLabel = styled(Label)`
  position: absolute;
  ${props => {
    if (props.ani) {
      return `
      left: 0;
      top: -15px;
      font-size: 10px;
      font-weight: 600;
      color: ${props.theme.mainColor};
      `;
    } else {
      return `
      left: 12px;
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
  ${AniInput}:focus ~ & {
    left: 0;
    top: -15px;
    font-size: 10px;
    font-weight: 600;
    color: ${props => props.theme.mainColor};
  }
`;

// Render
const AnimationInput = ({
  id,
  placeholder,
  required = true,
  value,
  onChange,
  type = "text",
  labelText,
  disabled
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
    <Container>
      <AniInput
        id={id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        type={type}
        disabled={disabled}
      />
      <AniLabel htmlFor={id} labelText={labelText} ani={ani} />
    </Container>
  );
};

export default AnimationInput;
