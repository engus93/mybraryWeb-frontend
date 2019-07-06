// Import Modules
import React, { useState } from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

// Import My Files
import Loader from "./../Components/Loader";
import ListTitle from "./../Components/ListTitle";
import WideBookBlock from "../Components/WideBookBlock";
import NothingBlock from "../Components/NothingBlock";
import { useMutation } from "react-apollo-hooks";
import { Helmet } from "react-helmet";

// Style Components
const Search = styled.div`
  background-color: ${props => props.theme.whiteBG};
`;

const Container = styled.section`
  width: ${props => props.theme.wrapperWidth};
  margin: 0 auto;
  min-height: 90vh;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const CenterSortBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const PagingBtb = styled.button`
  font-size: 16px;
  padding: 5px 15px;
  background: ${props => props.theme.mainColor};
  border-radius: 15px;
  color: white;
  cursor: pointer;
  user-select: none;
  :hover {
    opacity: 0.7;
  }
`;

// Apollo Client
// 검색 결과 가져오기
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

// 페이징 검색 결과 불러오기
const SEARCH_BOOK_PAGING = gql`
  mutation SearchBookPaging($searching: String!, $page: Int!) {
    SearchBookPaging(searching: $searching, page: $page) {
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

export default ({
  history: {
    location: { search }
  }
}) => {
  // 검색어 가공
  const term = decodeURI(search).split("=")[1];
  // Page Number
  const [page, setPage] = useState(2);
  // 추가된 페이징 리스트
  const [searchBookMore, setSearchBookMore] = useState([]);
  // Paging Loading
  const [pagingLoading, setPagingLoading] = useState(false);

  // Searching Initial Request
  const {
    data: { SearchBook },
    loading
  } = useQuery(SEARCH_BOOK, {
    skip: term === undefined,
    variables: {
      searching: term
    }
  });

  // Searching Paging Request
  const MutationSearchBookPaging = useMutation(SEARCH_BOOK_PAGING, {
    variables: {
      searching: term,
      page
    }
  });

  // Paging process function
  const pagingProcess = async ({ target }) => {
    // 버튼 중복 클릭 막기
    target.disabled = true;
    // 로딩 띄워주기
    setPagingLoading(true);
    // 데이터 가져오기
    const {
      data: { SearchBookPaging }
    } = await MutationSearchBookPaging();
    // 페이지 늘려주기
    setPage(page + 1);
    // // 데이터 저장하기
    setSearchBookMore([...searchBookMore, ...SearchBookPaging]);
    // 로딩 끝내기
    setPagingLoading(false);
    // 버튼 중복 클릭 해제
    target.disabled = false;
  };

  return (
    <>
      {loading && <Loader />}
      {!loading && SearchBook && (
        <Search>
          <Container>
            <Helmet>
              <title>{`${term} | MyBrary`}</title>
            </Helmet>
            <ListTitle search={term} title={` 에 관한 자료입니다. 🔍`} />
            {/* 검색 결과가 없을시 */}
            {SearchBook && SearchBook.length === 0 && (
              <NothingBlock height={"70vh"} />
            )}
            {/* 검색 결과 */}
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
            {/* Paging Component */}
            {searchBookMore &&
              searchBookMore.map(book => {
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
            {/* Paging Loading */}
            {pagingLoading && <Loader height={"20vh"} />}
            {/* Paging More */}
            <CenterSortBox>
              <PagingBtb onClick={pagingProcess}>More</PagingBtb>
            </CenterSortBox>
          </Container>
        </Search>
      )}
    </>
  );
};
