// Import Modules
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Styled Components
const Container = styled.span`
  font-size: ${props => props.fontSize}px;
  padding: ${props => props.paddingValue};
  margin: ${props => props.marginValue};
`;

// Render
const Span = ({
  id,
  text,
  fontSize = 14,
  marginValue,
  paddingValue,
  className
}) => (
  <Container
    id={id}
    fontSize={fontSize}
    className={className}
    paddingValue={paddingValue}
    marginValue={marginValue}
  >
    {text}
  </Container>
);

// PropTypes Structure
Span.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  paddingValue: PropTypes.string,
  marginValue: PropTypes.string
};

export default Span;
