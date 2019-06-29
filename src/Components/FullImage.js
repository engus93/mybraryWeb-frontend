// Import Modules
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Exit } from "./Icons";

// Style Components
const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  display: ${props => (props.showBookCover ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

const CenterImg = styled.img`
  width: 100%;
  height: 90%;
  object-fit: contain;
  z-index: 31;
`;

const CustomExitBtn = styled(Exit)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 32;
`;

const FullImage = ({
  targetRef,
  targetSrc = "",
  showBookCover,
  setShowBookCover
}) => {
  return (
    <Container showBookCover={showBookCover}>
      <CenterImg ref={targetRef} src={targetSrc} />
      <CustomExitBtn size={20} onClick={() => setShowBookCover(false)} />
    </Container>
  );
};

FullImage.propTypes = {
  targetRef: PropTypes.object,
  targetSrc: PropTypes.string,
  showBookCover: PropTypes.bool.isRequired,
  setShowBookCover: PropTypes.func.isRequired
};

export default FullImage;
