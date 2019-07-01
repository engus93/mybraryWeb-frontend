import { gql } from "apollo-boost";

// Apollo Client
export const ME = gql`
  {
    me {
      id
    }
  }
`;

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
