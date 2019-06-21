// Import Modules
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";

// Import My Files
import Span from "./Span";
import { Write } from "./Icons";

const ResponsiveLines = responsiveHOC()(LinesEllipsis);

const Container = styled.article`
  width: 90%;
  margin: 30px auto;
  padding: 12px 15px;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-gap: 15px;
  background-color: white;
  cursor: pointer;
  user-select: none;
  box-shadow: ${props => props.theme.smBoxShadow};
  @media (max-width: 576px) {
    grid-template-columns: none;
    grid-template-rows: (1fr, 2);
  }
`;

const LeftBox = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 200px;
  height: 320px;
  object-fit: contain;
  object-position: center;
  @media (max-width: 576px) {
    height: 220px;
  }
`;

const RightBox = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h5`
  font-size: 24px;
  margin-bottom: 12px;
  font-weight: 500;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  @media (max-width: 576px) {
    text-align: center;
    font-size: 20px;
  }
`;

const SubContents = styled.span`
  display: block;
  padding: 7px;
  @media (max-width: 576px) {
    padding: 5px;
    font-size: 12px;
    text-align: center;
  }
`;

const Genre = styled.span`
  display: inline-block;
  margin: 5px 5px 0 0;
  padding: 4px;
  border-radius: 3px;
  background: ${props => props.theme.lightWhiteColor};
  color: darkorange;
  @media (max-width: 576px) {
    font-size: 11px;
  }
`;
const Description = styled(ResponsiveLines)`
  display: block;
  padding: 12px 7px 0;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 1.3rem;
  @media (max-width: 576px) {
    text-align: center;
  }
`;

const WriteBox = styled.div`
  text-align: right;
  margin-top: 20px;
`;

const WirteBtn = styled.button`
  transition: 0.3s;
  padding: 5px 10px;
  border-radius: 15px;
  color: white;
  background-color: ${props => props.theme.mainColor};
  :hover {
    opacity: 0.7;
  }
  @media (max-width: 576px) {
    width: 100%;
    border-radius: 0;
  }
`;

const WriteIcon = styled(Write)`
  margin-right: 5px;
`;

const WideBookBlock = ({
  title,
  author,
  cover,
  pubDate,
  description,
  publisher,
  categoryName
}) => {
  console.log(categoryName);
  const genreList = categoryName.split(">");

  return (
    <Container>
      <LeftBox>
        <Image src={cover} />
      </LeftBox>
      <RightBox>
        <div>
          <Title>{title}</Title>
          <SubContents>{author}</SubContents>
          <SubContents>{pubDate}</SubContents>
          <SubContents>{publisher}</SubContents>
          <SubContents>
            {genreList &&
              genreList.length > 0 &&
              genreList
                .slice(0, 3)
                .map((word, index) => <Genre key={index}>{word}</Genre>)}
          </SubContents>
          <Description
            text={description}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
        <WriteBox>
          <WirteBtn>
            <WriteIcon size={16} />
            작성하기
          </WirteBtn>
        </WriteBox>
      </RightBox>
    </Container>
  );
};

WideBookBlock.propTypes = {};

export default WideBookBlock;
