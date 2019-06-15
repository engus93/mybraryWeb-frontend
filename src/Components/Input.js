// Import Modules
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Styled Components
const Container = styled.input`
  border: 0;
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.inputColor};
  font-size: 14px;
  padding: 7px 12px;
`;

// Render
const Input = ({
  placeholder,
  required = true,
  value,
  onChange,
  type = "text",
  className
}) => (
  <Container
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
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string
};

export default Input;
