// Import Modules
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Span from "./Span";

const Container = styled.div`
  padding: 12px 12px 34px 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  border-right: 1px solid #e6e6e6;
  height: 100%;
`;

const Title = styled(Span)`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;
  display: inline-block;
  /* 글자 한줄로 나오게하기 */
  width: 85%;
  ${props => props.theme.hideText}
`;

const Image = styled.div`
  background: url(${props => props.src}) no-repeat center center;
  background-size: contain;
  margin-top: 25px;
  width: 180px;
  height: 250px;
  box-shadow: ${props => props.theme.boxShadow};
`;

const Author = styled(Span)`
  text-align: center;
  padding: 10px;
  margin-top: 10px;
  /* 글자 한줄로 나오게하기 */
  width: 85%;
  ${props => props.theme.hideText}
`;

const BannerBook = ({ id, title, image, author }) => (
  <Container id={id}>
    <Title text={title} />
    <Image src={image} />
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
