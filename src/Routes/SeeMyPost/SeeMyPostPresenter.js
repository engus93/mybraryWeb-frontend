// Import Modules
import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

// Import My Files
import ListTitle from "./../../Components/ListTitle";
import { LeftArrow, RightArrow } from "./../../Components/Icons";
import Span from "./../../Components/Span";
import PostBlock from "../../Components/PostBlock";
import Loader from "./../../Components/Loader";
import NothingBlock from "../../Components/NothingBlock";

// Style Components
const SeeMyPost = styled.div`
  background-color: ${props => props.theme.whiteBG};
`;

const Container = styled.section`
  width: ${props => props.theme.wrapperWidth};
  margin: 0 auto;
  min-height: 90vh;
  padding-bottom: 50px;
  @media (max-width: 1024px) {
    width: 90%;
  }
`;

const DateSelectBox = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 35px 20px;
  user-select: none;
  pointer-events: ${props => (props.disalbed ? "none" : "auto")};
`;

const DateBtn = styled.button`
  background-color: ${props => props.theme.mainColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  padding: 5px;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
  }
`;

const PagingBtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 20px 0;
`;

const PagingBtb = styled.button`
  font-size: 20px;
  padding: 4px 20px;
  background: ${props => props.theme.mainColor};
  border-radius: 15px;
  color: white;
  cursor: pointer;
  user-select: none;
  :hover {
    opacity: 0.7;
  }
`;

export default ({
  loading,
  seeMyPost,
  year,
  month,
  dateCountPlus,
  dateCountMinor,
  pagingLoading,
  pagingList,
  eventPass,
  pagingProcess
}) => {
  return (
    <>
      <SeeMyPost>
        <Container>
          <Helmet>
            <title>MyBrary | MyBrary</title>
          </Helmet>
          <section>
            <ListTitle title={"📚 MyBrary 📖"} />
            <DateSelectBox disalbed={loading}>
              <DateBtn onClick={dateCountMinor}>
                <LeftArrow size={14} />
              </DateBtn>
              <Span
                text={`${year}년 ${month}월`}
                fontSize={22}
                marginValue={"auto 10px"}
              />
              <DateBtn onClick={dateCountPlus}>
                <RightArrow size={14} />
              </DateBtn>
            </DateSelectBox>
            {loading && <Loader height={"50vh"} />}
            {!loading && (
              <>
                {seeMyPost && seeMyPost.length === 0 && (
                  <NothingBlock height={"50vh"} />
                )}
                {seeMyPost &&
                  seeMyPost.length > 0 &&
                  seeMyPost.map(post => {
                    // 날짜 변환
                    const targetDate = new Date(post.createdAt);
                    return (
                      <PostBlock
                        key={post.id}
                        date={`${targetDate.getFullYear()} / ${targetDate.getMonth() +
                          1} / ${targetDate.getDate()}`}
                        author={post.author}
                        title={post.title}
                        content={post.contents}
                      />
                    );
                  })}
                {pagingList &&
                  pagingList.length > 0 &&
                  pagingList.map(post => {
                    // 날짜 변환
                    const targetDate = new Date(post.createdAt);
                    return (
                      <PostBlock
                        key={post.id}
                        date={`${targetDate.getFullYear()} / ${targetDate.getMonth() +
                          1} / ${targetDate.getDate()}`}
                        author={post.author}
                        title={post.title}
                        content={post.contents}
                      />
                    );
                  })}
                {pagingLoading && <Loader height={"20vh"} />}
                {!pagingLoading &&
                  seeMyPost &&
                  seeMyPost.length > 0 &&
                  eventPass && (
                    <PagingBtnBox>
                      <PagingBtb onClick={pagingProcess}>More</PagingBtb>
                    </PagingBtnBox>
                  )}
              </>
            )}
          </section>
        </Container>
      </SeeMyPost>
    </>
  );
};
