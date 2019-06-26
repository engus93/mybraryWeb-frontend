import { gql } from "apollo-boost";

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
