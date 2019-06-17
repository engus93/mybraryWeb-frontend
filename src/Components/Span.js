// Import Modules
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Styled Components
const Container = styled.span`
  font-size: ${props => props.fontSize}px;
  padding: ${props => props.paddingValue};
`;

// Render
const Span = ({ text, fontSize, paddingValue, className }) => (
  <Container
    fontSize={fontSize}
    className={className}
    paddingValue={paddingValue}
  >
    {text}
  </Container>
);

// PropTypes Structure
Span.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  paddingValue: PropTypes.string
};

export default Span;
