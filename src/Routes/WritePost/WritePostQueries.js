import { gql } from "apollo-boost";

export const WRITE_POST = gql`
  mutation writePost($title: String!, $contents: String!) {
    writePost(title: $title, contents: $contents) {
      id
    }
  }
`;
