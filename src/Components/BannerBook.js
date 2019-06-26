// Import Modules
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Span from "./Span";
import { Link } from "react-router-dom";

const Container = styled.article`
  transition: 0.3s;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 4px;
  background-color: white;
  box-shadow: ${props =>
    props.size === "sm" ? props.theme.boxShadow : props.theme.smBoxShadow};
  cursor: pointer;
  :hover {
    box-shadow: ${props =>
      props.size === "sm"
        ? props.theme.boxShadowHover
        : props.theme.smBoxShadowHover};
  }

  /* branch */
  margin: ${props =>
    props.size === "sm" ? "20px 10px 40px" : "30px 30px 50px"};
  padding: ${props => (props.size === "sm" ? "7px" : "12px")};

  /* Responsive */
  @media (max-width: 1024px) {
    margin: ${props =>
      props.size === "sm" ? "20px 7px 40px" : "30px 18px 50px"};
  }
`;

const Image = styled.img`
  object-fit: contain;
  object-position: center;
  margin-top: 20px;
  box-shadow: ${props => props.theme.boxShadow};

  /* branch */
  width: ${props => (props.size === "sm" ? "130px" : "180px")};
  height: ${props => (props.size === "sm" ? "180px" : "250px")};
`;

const Title = styled(Span)`
  text-align: center;
  font-weight: 600;
  display: inline-block;
  /* 글자 한줄로 나오게하기 */
  width: 85%;
  ${props => props.theme.hideText}

  /* branch */
  margin-top: ${props => (props.size === "sm" ? "20px" : "25px")};
  font-size: ${props => (props.size === "sm" ? "14px" : "16px")};
`;

const Author = styled(Span)`
  text-align: center;
  padding: 5px;
  /* 글자 한줄로 나오게하기 */
  width: 85%;
  ${props => props.theme.hideText}

  /* branch */
  margin: ${props => (props.size === "sm" ? "10px 0" : "12px 0")};
  font-size: ${props => (props.size === "sm" ? "10px" : "13px")};
`;

const BannerBook = ({ id, title, image, author, size = "lg" }) => (
  <Link to={id}>
    <Container id={id} size={size}>
      <Image src={image} size={size} />
      <Title text={title} size={size} />
      <Author text={author} size={size} />
    </Container>
  </Link>
);

BannerBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  size: PropTypes.string
};

export default BannerBook;
