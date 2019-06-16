// Import Modules
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Styled Components
const Container = styled.input`
  border: 0;
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.whiteColor};
  font-size: 14px;
  padding: 7px 12px;
`;

// Render
const Input = ({
  id,
  placeholder,
  required = true,
  value,
  onChange,
  type = "text",
  className
}) => (
  <Container
    id={id}
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    type={type}
    className={className}
  />
);

// PropTypes Structure
Input.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string
};

export default Input;
