import { gql } from "apollo-boost";

// Apollo Queries
export const SEE_BEST_POST = gql`
  query seeAllPost($isBest: Boolean!, $year: Int!, $month: Int!) {
    seeAllPost(isBest: $isBest, year: $year, month: $month) {
      id
      title
      contents
      secret
      createdAt
      isLiked
      likeCount
      user {
        username
      }
      file {
        url
      }
    }
  }
`;

export const SEE_BEST_POST_PAGING = gql`
  mutation seeAllPostPaging(
    $page: Int!
    $isBest: Boolean!
    $year: Int!
    $month: Int!
  ) {
    seeAllPostPaging(page: $page, isBest: $isBest, year: $year, month: $month) {
      id
      title
      contents
      secret
      createdAt
      isLiked
      likeCount
      user {
        username
      }
      file {
        url
      }
    }
  }
`;
