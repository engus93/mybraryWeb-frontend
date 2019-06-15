// Import Modules
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Styled Components
const Container = styled.span`
  font-size: ${props => props.fontSize}px;
`;

// Render
const Span = ({ text, fontSize, className }) => (
  <Container fontSize={fontSize} className={className}>
    {text}
  </Container>
);

// PropTypes Structure
Span.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired
};

export default Span;
