// Import Modules
import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

// Import My Files
import ListTitle from "./../../Components/ListTitle";
import AnimationInput from "./../../Components/AnimationInput";
import AnimationTextarea from "../../Components/AnimationTextarea";

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
  justify-content: flex-end;
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

export default ({
  postInputDate,
  postInputTitle,
  postInputContents,
  writeOnSubmit
}) => {
  return (
    <WritePost>
      <Container>
        <Helmet>
          <title>Write Post | MyBrary</title>
        </Helmet>
        <ListTitle title={"😀 Write Post 😁"} />
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
              {...postInputTitle}
              labelText={"제목"}
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
              <PushMybraryBtn>서재에 넣기</PushMybraryBtn>
            </PushMybraryBtnBox>
          </form>
        </WriteBox>
      </Container>
    </WritePost>
  );
};
