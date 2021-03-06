// Import Modules
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Span from "./Span";
import { RightArrow, BackArrow } from "./Icons";

const TopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 15px;
`;

const Title = styled.h2`
  margin: 7px 0 7px 7px;
  display: inline;
  padding: 5px;
  font-size: 20px;
  font-weight: 600;
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

const MoreLink = styled(Link)`
  font-weight: 500;
  margin-right: 10px;
  position: relative;
  top: 1px;
  :hover {
    opacity: 0.7;
  }
`;

const More = styled(Span)`
  color: #6a6a6a;
  margin-right: 5px;
`;

const BottomDiv = styled.div`
  margin: 20px auto 0;
  background: #e0e0e0;
  height: 2px;
  width: 98%;
  position: relative;
`;

const Line = styled.div`
  width: 6rem;
  height: 4px;
  position: absolute;
  background: ${props => props.theme.mainColor};
  top: -1px;
`;

const SearchWord = styled.span`
  color: orangered;
`;

const ListTitle = ({ title, moreLink, search = "" }) => (
  <header>
    <TopDiv>
      {search !== "" && (
        <Title>
          <SearchWord>{`'${search}'`}</SearchWord> {title}
        </Title>
      )}
      {search === "" && <Title>{title}</Title>}
      {moreLink && (
        <>
          {(moreLink === "/" || moreLink === "/seeMyPost") && (
            <>
              <MoreLink to={moreLink}>
                <More text={"뒤로가기"} />
                <BackArrow size={10} fill={"#6a6a6a"} />
              </MoreLink>
            </>
          )}
          {moreLink !== "/" && moreLink !== "/seeMyPost" && (
            <>
              <MoreLink to={`book-list/${moreLink}`}>
                <More text={"더 보기"} />
                <RightArrow size={10} fill={"#6a6a6a"} />
              </MoreLink>
            </>
          )}
        </>
      )}
    </TopDiv>
    <BottomDiv>
      <Line />
    </BottomDiv>
  </header>
);

ListTitle.propTypes = {
  title: PropTypes.string.isRequired,
  moreLink: PropTypes.string,
  search: PropTypes.string
};

export default ListTitle;
