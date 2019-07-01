// Import Modules
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";

// Import My Files
import { DotMenu, UpArrow, DownArrow } from "./Icons";
import { PostBookCover } from "./Icons";
import FullImage from "./FullImage";
import { HeartBtn } from "./Icons";
import { gql } from "apollo-boost";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";

const ResponsiveLines = responsiveHOC()(HTMLEllipsis);

// Style Components
const PostBlockFrame = styled.article`
  user-select: none;
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
  justify-content: space-between;
  /* CSS Branch */
  position: ${props => (props.type === "btn" ? "relative" : "")};
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

const MenuBox = styled.div`
  display: inline-block;
  position: absolute;
  background-color: aliceblue;
  padding: 10px;
  top: 5px;
  right: 5px;
  border-radius: 7px;
  z-index: 31;
  cursor: pointer;
  box-shadow: ${props => props.theme.boxShadow};
`;

const CancelClickBox = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
`;

const CustomPostBookCover = styled(PostBookCover)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
  }
`;

// Apollo Client
const TOGGLE_LIKE = gql`
  mutation toggleLike($postId: String!, $action: String!) {
    toggleLike(postId: $postId, action: $action)
  }
`;

const PostBlock = ({
  id,
  date,
  author,
  title,
  content,
  cover,
  likes,
  isLiked
}) => {
  const [moreBtn, setMoreBtn] = useState(true);
  const [deleteMenu, setDeleteMenu] = useState(false);
  const [showBookCover, setShowBookCover] = useState(false);
  const [liked, setLiked] = useState(isLiked);
  const [likesCount, setLikesCount] = useState(likes);

  const MutationToggleLike = useMutation(TOGGLE_LIKE, {
    variables: {
      postId: id,
      action: liked ? "likeOff" : "likeOn"
    }
  });

  const toggleLikeProcess = async () => {
    setLiked(!liked);
    try {
      if (!liked) {
        setLikesCount(likesCount + 1);
        await MutationToggleLike();
      } else {
        setLikesCount(likesCount - 1);
        await MutationToggleLike();
      }
    } catch (error) {
      toast.error("오류가 발생했습니다. 다시 시도해주세요. 😢");
    }
  };

  return (
    <PostBlockFrame id={id}>
      <Container>
        {deleteMenu && <CancelClickBox onClick={() => setDeleteMenu(false)} />}
        <SortBox type={"btn"}>
          {cover !== "" && (
            <>
              <CustomPostBookCover
                onClick={() => setShowBookCover(!showBookCover)}
              />
              <FullImage
                targetSrc={cover}
                showBookCover={showBookCover}
                setShowBookCover={setShowBookCover}
              />
            </>
          )}
          {/* Flex를 위한 빈 값 */}
          {cover === "" && <div />}
          {(likesCount || likesCount === 0) && (
            <>
              <div style={{ display: "flex", alignItems: "center" }}>
                <HeartBtn
                  size={16}
                  fill={liked ? "red" : "grey"}
                  onClick={toggleLikeProcess}
                />
                {likesCount}
              </div>
            </>
          )}
          {!likesCount && likesCount !== 0 && (
            <>
              <CustomDotMenu size={16} onClick={() => setDeleteMenu(true)} />
              {deleteMenu && <MenuBox value={"Delete Post"}>삭제하기</MenuBox>}
            </>
          )}
        </SortBox>
        <SortBox type={"info"}>
          <span>{date}</span>
          <span>{author}</span>
        </SortBox>
        <Title
          unsafeHTML={title}
          maxLine={moreBtn ? "1" : "1000"}
          ellipsis="..."
          // trimRight
          basedOn="letters"
        />
        <Content
          // text={content}
          unsafeHTML={content}
          maxLine={moreBtn ? "3" : "1000"}
          ellipsis="..."
          // trimRight
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
  content: PropTypes.string.isRequired,
  like: PropTypes.number,
  isLiked: PropTypes.bool
};

export default PostBlock;
