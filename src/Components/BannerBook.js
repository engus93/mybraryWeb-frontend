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
  /* background-color: ${props => props.theme.ColorBG}; */
  background-color: white;
  border-right: 1px solid #e6e6e6;
`;

const Title = styled(Span)`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  margin-top: 10px;
`;

const Image = styled.img`
  width: 180px;
  margin-top: 10px;
`;

const Description = styled(Span)`
  text-align: center;
  padding: 10px;
  margin-top: 10px;
`;

const BannerBook = ({
  id = "1",
  title = "오늘의 책",
  image = "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2uN/image/Iwc2WWMtpK2gVkE_hU-rlhQc4Ko.jpg",
  description = "수고했어 오늘도 수고했어 오늘도 수고했어 오늘도 수고했어 오늘도 수고했어 오늘도 수고했어 오늘도 수고했어 오늘도 수고했어 오늘도 수고했어 오늘도 "
}) => (
  <Container id={id}>
    <Title text={title} />
    <Image src={image} />
    <Description text={description} />
  </Container>
);

BannerBook.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string
};

export default BannerBook;
