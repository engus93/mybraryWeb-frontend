import { gql } from "apollo-boost";

// Apollo Client
export const DETAIL_BOOK = gql`
  query DetailBook($itemId: Int!) {
    DetailBook(itemId: $itemId) {
      itemId
      title
      author
      pubDate
      description
      cover
      categoryName
      publisher
      fullDescription
      fullDescription2
      subInfo {
        toc
        story
        authors {
          authorName
          authorInfo
        }
      }
    }
  }
`;
