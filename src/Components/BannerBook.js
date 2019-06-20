// Import Modules
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Span from "./Span";

const Container = styled.article`
  padding: 12px;
  transition: 0.3s;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 4px;
  margin: 30px 30px 50px;
  background-color: white;
  box-shadow: 0px 4px 5px rgba(0, 15, 11, 0.15),
    0px 12px 28px rgba(0, 15, 11, 0.15);
  cursor: pointer;
  @media (max-width: 1024px) {
    margin: 30px 18px 50px;
  }
  :hover {
    box-shadow: ${props => props.theme.boxShadowHover};
  }
`;

const Image = styled.div`
  background: url(${props => props.src}) no-repeat center center;
  background-size: contain;
  margin-top: 20px;
  width: 180px;
  height: 250px;
  box-shadow: ${props => props.theme.boxShadow};
`;

const Title = styled(Span)`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  margin-top: 25px;
  display: inline-block;
  /* 글자 한줄로 나오게하기 */
  width: 85%;
  ${props => props.theme.hideText}
`;

const Author = styled(Span)`
  text-align: center;
  padding: 5px;
  margin: 12px 0;
  font-size: 13px;
  /* 글자 한줄로 나오게하기 */
  width: 85%;
  ${props => props.theme.hideText}
`;

const BannerBook = ({ id, title, image, author }) => (
  <Container id={id}>
    <Image src={image} />
    <Title text={title} />
    <Author text={author} />
  </Container>
);

BannerBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default BannerBook;
