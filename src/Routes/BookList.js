// Import Modules
import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";

// Import My Files
import ListTitle from "./../Components/ListTitle";
import WideBookBlock from "./../Components/WideBookBlock";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";

// Stlye Components
const BookList = styled.div`
  background-color: ${props => props.theme.whiteBG};
`;

const Wrapper = styled.section`
  width: ${props => props.theme.wrapperWidth};
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const LIST_BOOK = gql`
  query ListBook($type: String!, $categoryId: Int) {
    ListBook(type: $type, categoryId: $categoryId) {
      itemId
      title
      author
      cover
      pubDate
      description
      publisher
      categoryName
    }
  }
`;

export default () => {
  const {
    data: { ListBook },
    loading
  } = useQuery(LIST_BOOK, {
    variables: {
      type: "Bestseller"
    }
  });

  return (
    <BookList>
      <Wrapper>
        {loading && <Loader />}
        {!loading && (
          <>
            <ListTitle
              title={`🏆 ${new Date().getFullYear()}년 ${new Date().getMonth() +
                1}월 베스트셀러 🏆`}
              moreLink={"/"}
            />
            {ListBook &&
              ListBook.map(book => (
                <WideBookBlock
                  key={book.itemId}
                  title={book.title}
                  author={book.author}
                  cover={book.cover}
                  pubDate={book.pubDate}
                  description={book.description}
                  publisher={book.publisher}
                  categoryName={book.categoryName}
                />
              ))}
          </>
        )}
      </Wrapper>
    </BookList>
  );
};
