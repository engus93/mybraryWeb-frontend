import { gql } from "apollo-boost";

export const LIST_BOOK = gql`
  query ListBook($type: String!, $categoryId: Int) {
    ListBook(type: $type, categoryId: $categoryId) {
      itemId
      title
      author
      cover
    }
  }
`;

export const MAIN_LIST_BOOK = gql`
  query MainListBook {
    MainListBook {
      itemId
      title
      author
      cover
    }
  }
`;
