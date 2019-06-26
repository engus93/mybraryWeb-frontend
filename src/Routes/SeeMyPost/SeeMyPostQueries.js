import { gql } from "apollo-boost";

export const SEE_MY_POST = gql`
  query seeMyPost($year: Int!, $month: Int!) {
    seeMyPost(year: $year, month: $month) {
      id
      title
      author
      contents
      secret
      createdAt
    }
  }
`;

export const SEE_MY_POST_PAGING = gql`
  mutation seeMyPostPaging($page: Int!, $year: Int!, $month: Int!) {
    seeMyPost(page: $page, year: $year, month: $month) {
      id
      title
      author
      contents
      secret
      createdAt
    }
  }
`;
