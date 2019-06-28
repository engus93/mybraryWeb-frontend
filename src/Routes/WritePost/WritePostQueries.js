import { gql } from "apollo-boost";

export const WRITE_POST = gql`
  mutation writePost($title: String!, $contents: String!, $secret: Boolean!) {
    writePost(title: $title, contents: $contents, secret: $secret) {
      id
    }
  }
`;
