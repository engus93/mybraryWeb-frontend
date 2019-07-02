import { gql } from "apollo-boost";

// 내 정보 가져오기 스토리지 경로 만들 때 사용
export const ME = gql`
  {
    me {
      id
    }
  }
`;

// 글 작성
export const WRITE_POST = gql`
  mutation writePost(
    $title: String!
    $contents: String!
    $secret: Boolean!
    $file: String!
  ) {
    writePost(
      title: $title
      contents: $contents
      secret: $secret
      file: $file
    ) {
      id
    }
  }
`;

// 책 쓸때 정보 가져오기
export const WRITE_BOOK = gql`
  query DetailBook($itemId: Int!) {
    DetailBook(itemId: $itemId) {
      title
      author
      cover
    }
  }
`;

// 수정 할 떄 정보가져오기
export const EDIT_POST_BRING = gql`
  query editPostBring($postId: String!) {
    editPostBring(postId: $postId) {
      createdAt
      title
      contents
      file {
        url
      }
    }
  }
`;

// 수정하기
export const EDIT_POST = gql`
  mutation editPost(
    $postId: String!
    $title: String!
    $contents: String!
    $secret: Boolean!
  ) {
    editPost(
      postId: $postId
      title: $title
      contents: $contents
      secret: $secret
    )
  }
`;
