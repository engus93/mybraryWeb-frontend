import React, { useState } from "react";
import styled from "styled-components";
import LinesEllipsis from "react-lines-ellipsis";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";

import PropTypes from "prop-types";
import { UpArrow, DownArrow } from "./Icons";
import ListTitle from "./ListTitle";

const ResponsiveLinesForText = responsiveHOC()(LinesEllipsis);
const ResponsiveLinesForHtml = responsiveHOC()(HTMLEllipsis);

const ContentTitle = styled(ListTitle)``;

const DiscriptionBoxForText = styled(ResponsiveLinesForText)`
  padding: 18px 20px;
  display: block;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 1.3rem;
  @media (max-width: 768px) {
    padding: 12px 16px;
  }
`;

const DiscriptionBoxFotHtml = styled(ResponsiveLinesForHtml)`
  padding: 18px 20px;
  display: block;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 1.3rem;
  @media (max-width: 768px) {
    padding: 12px 16px;
  }
`;

const MoreBox = styled.footer``;

const MoreBtn = styled.button`
  width: 100%;
  color: white;
  padding: 7px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3aa42;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
  }
`;

const CustomDownArrow = styled(DownArrow)`
  margin-left: 5px;
  position: relative;
  top: 1px;
`;

const CustomUpArrow = styled(UpArrow)`
  margin-left: 5px;
  position: relative;
  top: 1px;
`;
const ContentsBox = styled.article`
  margin-top: 30px;
  border-radius: 2px;
  background-color: white;
  box-shadow: ${props => props.theme.boxShadow};
`;

const DetailDescriptionBox = ({ title, text, html }) => {
  const [more, setMore] = useState(true);

  return (
    <ContentsBox>
      <ContentTitle title={title} />
      {text && (
        <DiscriptionBoxForText
          text={text}
          maxLine={more ? "3" : "1000"}
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      )}
      {html && (
        <DiscriptionBoxFotHtml
          unsafeHTML={html}
          maxLine={more ? "3" : "1000"}
          ellipsis="..."
          basedOn="letters"
        />
      )}
      <MoreBox>
        {more && (
          <MoreBtn onClick={() => setMore(false)}>
            More
            <CustomDownArrow size={16} />
          </MoreBtn>
        )}
        {!more && (
          <MoreBtn onClick={() => setMore(true)}>
            Close
            <CustomUpArrow size={16} />
          </MoreBtn>
        )}
      </MoreBox>
    </ContentsBox>
  );
};

DetailDescriptionBox.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  html: PropTypes.string
};

export default DetailDescriptionBox;
