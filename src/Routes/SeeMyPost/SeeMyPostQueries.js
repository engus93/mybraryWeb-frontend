import { gql } from "apollo-boost";

export const SEE_MY_POST = gql`
  query seeMyPost($year: Int!, $month: Int!) {
    seeMyPost(year: $year, month: $month) {
      id
      title
      contents
      secret
      createdAt
      user {
        username
      }
    }
  }
`;

export const SEE_MY_POST_PAGING = gql`
  mutation seeMyPostPaging($page: Int!, $year: Int!, $month: Int!) {
    seeMyPostPaging(page: $page, year: $year, month: $month) {
      id
      title
      contents
      secret
      createdAt
      user {
        username
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($postId: String!) {
    deletePost(postId: $postId)
  }
`;
