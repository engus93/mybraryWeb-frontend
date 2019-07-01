// Import Modules
import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

// Import My files
import ListTitle from "./../../Components/ListTitle";
import DateSelect from "./../../Components/DateSelectBox";
import PostBlock from "./../../Components/PostBlock";
import Loader from "./../../Components/Loader";
import NothingBlock from "../../Components/NothingBlock";

// Style Components
const SeeOtherPost = styled.div`
  background-color: #f8f8f8;
`;

const Container = styled.section`
  width: ${props => props.theme.wrapperWidth};
  margin: 0 auto;
  min-height: 90vh;
  padding-top: 10px;
  padding-bottom: 50px;
  @media (max-width: 1024px) {
    width: 90%;
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
  year,
  month,
  dateCountPlus,
  dateCountMinor,
  seeAllPost,
  actionBest,
  pagingList,
  pagingLoading,
  eventPass,
  pagingProcess
}) => {
  return (
    <SeeOtherPost>
      <Container>
        <Helmet>
          {actionBest && <title>Best Diary | MyBrary</title>}
          {!actionBest && <title>new Diary | MyBrary</title>}
        </Helmet>
        {actionBest && <ListTitle title={"🏆 Best Diary 🏆"} />}
        {!actionBest && <ListTitle title={"🚶🏻‍♀️ New Diary 🚶🏻‍♂️"} />}
        <section>
          <DateSelect
            loading={loading}
            year={year}
            month={month}
            dateCountPlus={dateCountPlus}
            dateCountMinor={dateCountMinor}
          />
          {loading && <Loader />}
          {!loading && (
            <>
              {seeAllPost && seeAllPost.length === 0 && (
                <NothingBlock height={"50vh"} />
              )}
              {seeAllPost.map(post => {
                // 날짜 변환
                const targetDate = new Date(post.createdAt);

                return (
                  <PostBlock
                    key={post.id}
                    id={post.id}
                    date={`${targetDate.getFullYear()} / ${targetDate.getMonth() +
                      1} / ${targetDate.getDate()}`}
                    author={post.user.username}
                    title={post.title}
                    content={post.contents}
                    cover={post.file ? post.file.url : ""}
                    likes={post.likeCount}
                    isLiked={post.isLiked}
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
                      id={post.id}
                      date={`${targetDate.getFullYear()} / ${targetDate.getMonth() +
                        1} / ${targetDate.getDate()}`}
                      author={post.author}
                      title={post.title}
                      content={post.contents}
                      cover={post.file ? post.file.url : ""}
                    />
                  );
                })}
              {pagingLoading && <Loader height={"20vh"} />}
              {!pagingLoading &&
                seeAllPost &&
                seeAllPost.length > 0 &&
                eventPass && (
                  <PagingBtnBox>
                    <PagingBtb onClick={pagingProcess}>More</PagingBtb>
                  </PagingBtnBox>
                )}
            </>
          )}
        </section>
      </Container>
    </SeeOtherPost>
  );
};
