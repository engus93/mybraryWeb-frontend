// Import Modules
import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "./../Components/Loader";
import ListTitle from "./../Components/ListTitle";
import WideBookBlock from "../Components/WideBookBlock";

// Import My Files

// Style Components

const Search = styled.div`
  background-color: ${props => props.theme.whiteBG};
`;

const Container = styled.section`
  width: ${props => props.theme.wrapperWidth};
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

// Apollo Client
const SEARCH_BOOK = gql`
  query SearchBook($searching: String!) {
    SearchBook(searching: $searching) {
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

export default withRouter(({ history: { location: { search } } }) => {
  const [searchS, setSearch] = useState(search);

  useEffect(() => {
    setSearch(search);
    console.log("검색어" + searchS);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const {
    data: { SearchBook },
    loading
  } = useQuery(SEARCH_BOOK, {
    variables: {
      searching: "여행"
    }
  });

  console.log(loading);
  console.log(SearchBook);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <Search>
          <Container>
            <ListTitle title={'"여행"' + " 에 관한 자료입니다. 🔍"} />
            {SearchBook &&
              SearchBook.map(book => {
                return (
                  <WideBookBlock
                    key={book.itemId}
                    id={book.itemId}
                    title={book.title}
                    author={book.author}
                    cover={book.cover}
                    pubDate={book.pubDate}
                    description={book.description}
                    publisher={book.publisher}
                    categoryName={book.categoryName}
                  />
                );
              })}
            {/* Paging */}
          </Container>
        </Search>
      )}
    </>
  );
});
