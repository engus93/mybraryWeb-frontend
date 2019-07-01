// Import Modules
import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

// Import My Files
import ListTitle from "./../../Components/ListTitle";
import PostBlock from "../../Components/PostBlock";
import Loader from "./../../Components/Loader";
import NothingBlock from "../../Components/NothingBlock";
import decode from "unescape";
import DateSelect from "../../Components/DateSelectBox";

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
  pagingProcess,
  deleteLoading
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
            <DateSelect
              loading={loading}
              year={year}
              month={month}
              dateCountPlus={dateCountPlus}
              dateCountMinor={dateCountMinor}
            />
            {(loading || deleteLoading) && <Loader height={"50vh"} />}
            {!loading && !deleteLoading && (
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
                        id={post.id}
                        date={`${targetDate.getFullYear()} / ${targetDate.getMonth() +
                          1} / ${targetDate.getDate()}`}
                        author={post.user.username}
                        title={post.title}
                        content={decode(post.contents)}
                        cover={post.file ? post.file.url : ""}
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
