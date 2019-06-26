// Import Modules
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Styled Components
const Container = styled.label``;

// Render
const Label = ({ htmlFor, labelText, className }) => (
  <Container htmlFor={htmlFor} className={className}>
    {labelText}
  </Container>
);

// PropTypes Structure
Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired
};

export default Label;
