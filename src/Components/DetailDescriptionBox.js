import React, { useState } from "react";
import styled from "styled-components";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";

import PropTypes from "prop-types";
import { UpArrow, DownArrow } from "./Icons";
import ListTitle from "./ListTitle";

const ResponsiveLines = responsiveHOC()(LinesEllipsis);

const ContentTitle = styled(ListTitle)``;

const DiscriptionBox = styled(ResponsiveLines)`
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

const DetailDescriptionBox = ({ title, text }) => {
  const [more, setMore] = useState(true);

  return (
    <ContentsBox>
      <ContentTitle title={title} />
      <DiscriptionBox
        text={text}
        maxLine={more ? "5" : "1000"}
        ellipsis="..."
        trimRight
        basedOn="letters"
      />
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
  text: PropTypes.string.isRequired
};

export default DetailDescriptionBox;
