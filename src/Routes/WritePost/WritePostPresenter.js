// Import Modules
import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

// Import My Files
import ListTitle from "./../../Components/ListTitle";
import AnimationInput from "./../../Components/AnimationInput";
import AnimationTextarea from "../../Components/AnimationTextarea";
import Loader from "./../../Components/Loader";

// Style Components
const WritePost = styled.div``;

const Container = styled.section`
  width: ${props => props.theme.wrapperWidth};
  margin: 0 auto;
  min-height: 90vh;
  padding-bottom: 50px;
  @media (max-width: 1024px) {
    width: 90%;
  }
`;

const WriteBox = styled.article`
  width: 95%;
  margin: 30px auto;
  padding: 20px;
  background-color: white;
  box-shadow: ${props => props.theme.boxShadow};
  transition: 0.3s;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const CustomAnimationInput = styled(AnimationInput)`
  margin-top: 25px;
  font-family: initial;
  & > input {
    border: none;
    border-bottom: 1.2px solid #ddd;
    border-radius: 0;
    background-color: white;
    padding: 7px;
    transition: 0.3s;
    :focus {
      border-bottom: 1.2px solid ${props => props.theme.mainColor};
    }
  }
  & > label {
    left: -3px;
  }
`;

const PushMybraryBtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const PushMybraryBtn = styled.button`
  color: white;
  padding: 7px 12px;
  border-radius: 16px;
  transition: 0.3s;
  background-color: ${props => props.theme.mainColor};
  box-shadow: ${props => props.theme.smBoxShadow};
  :hover {
    opacity: 0.8;
  }
`;

const Aasdfas = styled.div`
  display: flex;
  align-items: center;
`;

const Infkdks = styled.input`
  width: auto;
`;

export default ({
  postInputDate,
  postInputTitle,
  postInputContents,
  postInputSecret,
  writeOnSubmit,
  book,
  loading,
  data
}) => {
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <WritePost>
          <Container>
            <Helmet>
              <title>Write Post | MyBrary</title>
            </Helmet>
            <ListTitle title={"😀 Write Post 😁"} moreLink={"/seeMyPost"} />
            <WriteBox>
              <form onSubmit={writeOnSubmit}>
                <CustomAnimationInput
                  id={"postDate"}
                  type={"text"}
                  {...postInputDate}
                  labelText={"날짜"}
                  disabled={true}
                  post={true}
                  aniBefore={"12px"}
                  aniAfter={"14px"}
                />
                <CustomAnimationInput
                  id={"postTitle"}
                  type={"text"}
                  value={
                    data && data.DetailBook
                      ? data.DetailBook.title + " / " + data.DetailBook.author
                      : postInputTitle.value
                  }
                  setValue={postInputTitle.setValue}
                  onChange={postInputTitle.onChange}
                  labelText={"제목"}
                  disabled={Boolean(book)}
                  post={true}
                  aniBefore={"12px"}
                  aniAfter={"14px"}
                />
                <AnimationTextarea
                  id={"postTitle"}
                  {...postInputContents}
                  labelText={"내용"}
                />
                <PushMybraryBtnBox>
                  <Aasdfas>
                    <Infkdks
                      value={postInputSecret.value}
                      onChange={() =>
                        postInputSecret.setValue(!postInputSecret.value)
                      }
                      type={"checkbox"}
                      checked={postInputSecret.value}
                    />
                    나만 간직하기
                  </Aasdfas>
                  <PushMybraryBtn>서재에 넣기</PushMybraryBtn>
                </PushMybraryBtnBox>
              </form>
            </WriteBox>
          </Container>
        </WritePost>
      )}
    </>
  );
};
