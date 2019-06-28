// Import Modules
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";

// Import My Files
import { DotMenu, UpArrow, DownArrow } from "./Icons";

const ResponsiveLines = responsiveHOC()(HTMLEllipsis);

// Style Components
const PostBlockFrame = styled.article`
  margin-bottom: 30px;
  background-color: white;
  box-shadow: ${props => props.theme.miniBoxShadow};
`;

const Container = styled.div`
  padding: 20px;
`;

const SortBox = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  /* CSS Branch */
  ${props => {
    switch (props.type) {
      case "btn":
        return "justify-content: flex-end;";

      case "info":
        return "justify-content: space-between;";

      default:
        return;
    }
  }}
`;

const CustomDotMenu = styled(DotMenu)`
  cursor: pointer;
`;

const Title = styled(ResponsiveLines)`
  margin-bottom: 15px;
  font-size: 20px;
`;

const Content = styled(ResponsiveLines)`
  margin-bottom: 5px;
  word-spacing: 2px;
  line-height: 20px;
`;

const MoreBox = styled.footer`
  padding: 10px;
  text-align: center;
  color: white;
  user-select: none;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
  background-color: ${props => props.theme.mainColor};
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

const PostBlock = ({ date, author, title, content }) => {
  const [moreBtn, setMoreBtn] = useState(true);

  return (
    <PostBlockFrame>
      <Container>
        <SortBox type={"btn"}>
          <CustomDotMenu size={12} />
        </SortBox>
        <SortBox type={"info"}>
          <span>{date}</span>
          <span>{author}</span>
        </SortBox>
        <Title
          unsafeHTML={title}
          maxLine={moreBtn ? "1" : "1000"}
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
        <Content
          // text={content}
          unsafeHTML={content}
          maxLine={moreBtn ? "3" : "1000"}
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </Container>
      {/* 내용 열기 */}
      {moreBtn && (
        <MoreBox onClick={() => setMoreBtn(false)}>
          More
          <CustomDownArrow size={16} />
        </MoreBox>
      )}
      {/* 내용 닫기 */}
      {!moreBtn && (
        <MoreBox onClick={() => setMoreBtn(true)}>
          Close
          <CustomUpArrow size={16} />
        </MoreBox>
      )}
    </PostBlockFrame>
  );
};

PostBlock.propTypes = {
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default PostBlock;
