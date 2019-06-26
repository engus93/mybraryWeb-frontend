// Import Modules
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";

// Import My Files
import { UpArrow, DownArrow } from "./Icons";
import ListTitle from "./ListTitle";

// Responsive Lines Ellipsis
const ResponsiveLinesForText = responsiveHOC()(LinesEllipsis);
const ResponsiveLinesForHtml = responsiveHOC()(HTMLEllipsis);

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

const MoreBtn = styled.button`
  width: 100%;
  color: white;
  padding: 7px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.mainColor};
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
  // 접힌 내용 펼치기
  const [more, setMore] = useState(true);

  return (
    <ContentsBox>
      {/* 제목 */}
      <ListTitle title={title} />
      {/* Text일 경우 */}
      {text && (
        <DiscriptionBoxForText
          text={text}
          maxLine={more ? "3" : "1000"}
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      )}
      {/* HTML일 경우 */}
      {html && (
        <DiscriptionBoxFotHtml
          unsafeHTML={html}
          maxLine={more ? "3" : "1000"}
          ellipsis="..."
          basedOn="letters"
        />
      )}
      {/* 내용 열기 */}
      {more && (
        <MoreBtn onClick={() => setMore(false)}>
          More
          <CustomDownArrow size={16} />
        </MoreBtn>
      )}
      {/* 내용 닫기 */}
      {!more && (
        <MoreBtn onClick={() => setMore(true)}>
          Close
          <CustomUpArrow size={16} />
        </MoreBtn>
      )}
    </ContentsBox>
  );
};

DetailDescriptionBox.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  html: PropTypes.string
};

export default DetailDescriptionBox;
