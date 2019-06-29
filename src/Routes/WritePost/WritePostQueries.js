import { gql } from "apollo-boost";

export const WRITE_POST = gql`
  mutation writePost(
    $title: String!
    $contents: String!
    $secret: Boolean!
    $files: [String!]
  ) {
    writePost(
      title: $title
      contents: $contents
      secret: $secret
      files: $files
    ) {
      id
    }
  }
`;

// Apollo Client
export const WRITE_BOOK = gql`
  query DetailBook($itemId: Int!) {
    DetailBook(itemId: $itemId) {
      title
      author
      cover
    }
  }
`;
