// Import Modules
import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import { useQuery, useMutation } from "react-apollo-hooks";

// Import My Files
import ListTitle from "./../Components/ListTitle";
import WideBookBlock from "./../Components/WideBookBlock";
import Loader from "../Components/Loader";
import { errorMessage } from "../Styles/Variables";
import {
  bestSeller,
  newBook,
  cook,
  travel,
  humanities,
  selfDevelopment
} from "./../Styles/Variables";

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

/* Apollo Client */
// 처음에 리스트 불러오기
const LIST_BOOK = gql`
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

// 페이징 리스트 불러오기
const LIST_BOOK_PAGING = gql`
  mutation ListBookPaging($type: String!, $categoryId: Int, $page: Int!) {
    ListBookPaging(type: $type, categoryId: $categoryId, page: $page) {
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

export default ({ match: { params } }) => {
  // Scroll Initial Setting
  const [type, setType] = useState("dontSearch");
  const [categoryId, setCategoryId] = useState(400);
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(2);
  // 추가된 페이징 리스트
  const [listBookMore, setListBookMore] = useState([]);
  const [pagingLoading, setPagingLoading] = useState(false);

  /* Apollo */
  const {
    data: { ListBook },
    loading
  } = useQuery(LIST_BOOK, {
    variables: {
      type,
      categoryId
    }
  });

  const MutationListBookPaging = useMutation(LIST_BOOK_PAGING, {
    variables: {
      type,
      categoryId,
      page
    }
  });

  // 처음에 어떤 데이터 가져올건지 분류
  try {
    useEffect(() => {
      // Gerne Params Catch
      const { gener } = params;

      switch (gener) {
        case "bestSeller":
          setType("Bestseller");
          setCategoryId(0);
          setTitle(bestSeller);
          break;
        case "newBook":
          setType("ItemNewSpecial");
          setCategoryId(0);
          setTitle(newBook);
          break;
        case "cook":
          setType("ItemEditorChoice");
          setCategoryId(53476);
          setTitle(cook);
          break;
        case "travel":
          setType("ItemEditorChoice");
          setCategoryId(1196);
          setTitle(travel);
          break;
        case "humanities":
          setType("ItemEditorChoice");
          setCategoryId(656);
          setTitle(humanities);
          break;
        case "self-development":
          setType("ItemEditorChoice");
          setCategoryId(336);
          setTitle(selfDevelopment);
          break;
        default:
          break;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  } catch (error) {
    toast.error(errorMessage);
  }

  // Paging process function
  const pagingProcess = async ({ target }) => {
    // 버튼 중복 클릭 막기
    target.disabled = true;
    // 로딩 띄워주기
    setPagingLoading(true);
    // 데이터 가져오기
    const {
      data: { ListBookPaging }
    } = await MutationListBookPaging();
    // 페이지 늘려주기
    setPage(page + 1);
    // 데이터 저장하기
    setListBookMore([...listBookMore, ...ListBookPaging]);
    // 로딩 끝내기
    setPagingLoading(false);
    // 버튼 중복 클릭 해제
    target.disabled = false;
  };

  return (
    <BookList>
      <Wrapper>
        {loading && <Loader />}
        {!loading && (
          <>
            <Helmet>
              <title>{`Book List | MyBrary`}</title>
            </Helmet>
            <ListTitle title={title} moreLink={"/"} />
            {ListBook &&
              ListBook.map(book => (
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
              ))}
            {listBookMore &&
              listBookMore.map(book => (
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
              ))}
            {pagingLoading && <Loader paging={true} />}
            <CenterSortBox>
              <PagingBtb onClick={pagingProcess}>More</PagingBtb>
            </CenterSortBox>
          </>
        )}
      </Wrapper>
    </BookList>
  );
};
