// Import Modules
import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

// Import My Files
import ListTitle from "./../../Components/ListTitle";
import AnimationInput from "./../../Components/AnimationInput";
import AnimationTextarea from "../../Components/AnimationTextarea";
import Loader from "./../../Components/Loader";
import FullImage from "./../../Components/FullImage";
import { PostBookCover } from "../../Components/Icons";

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
  margin-top: ${props => (props.marginTop ? props.marginTop : 20)}px;
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

const SecretCheck = styled.input`
  width: auto;
`;

const ImgUploadBtn = styled.button`
  cursor: pointer;
  width: 100px;
  text-align: center;
  margin: 5px 0;
  padding: 5px 7px;
  border-radius: 4px;
  background-color: #eee;
  transition: 0.3s;
  box-shadow: ${props => props.theme.btnBoxShadow};
  :hover {
    opacity: 0.8;
  }
`;

export default ({
  postInputDate,
  postInputTitle,
  postInputContents,
  postInputUploadBtn,
  postInputBookCover,
  setPostInputBookCover,
  showBookCover,
  setShowBookCover,
  postPreviewImg,
  postInputSecret,
  writeOnSubmit,
  onChangeFile,
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
                <PushMybraryBtnBox marginTop={10}>
                  <input
                    ref={postInputUploadBtn}
                    style={{ display: "none" }}
                    id={"docuom"}
                    type={"file"}
                    accept="image/*"
                    onChange={onChangeFile}
                    value={postInputBookCover}
                  />
                  {/* 이미지 파일 없으면 업로드 */}
                  {!postInputBookCover && (
                    <ImgUploadBtn
                      type={"button"}
                      onClick={() => {
                        postInputUploadBtn.current.click();
                      }}
                    >
                      Upload Cover
                    </ImgUploadBtn>
                  )}
                  {/* 있으면 삭제 프로세스  */}
                  {postInputBookCover && (
                    <ImgUploadBtn
                      type={"button"}
                      onClick={() => {
                        setPostInputBookCover("");
                      }}
                    >
                      Delete Cover
                    </ImgUploadBtn>
                  )}
                  {postInputBookCover && (
                    <PostBookCover
                      size={20}
                      onClick={() => setShowBookCover(!showBookCover)}
                    />
                  )}
                </PushMybraryBtnBox>
                <FullImage
                  targetRef={postPreviewImg}
                  showBookCover={showBookCover}
                  setShowBookCover={setShowBookCover}
                />
                <PushMybraryBtnBox marginTop={10}>
                  <Aasdfas>
                    <SecretCheck
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
