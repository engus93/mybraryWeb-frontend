import { gql } from "apollo-boost";

export const HOT_NEWBOOK = gql`
  query ListBook($type: String!, $categoryId: Int) {
    ListBook(type: $type, categoryId: $categoryId) {
      itemId
      title
      author
      cover
    }
  }
`;
