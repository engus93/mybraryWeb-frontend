// Import Modules
import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-apollo-hooks";

// Import My Files
import ListTitle from "./../Components/ListTitle";
import WideBookBlock from "./../Components/WideBookBlock";
import Loader from "../Components/Loader";
import { toast } from "react-toastify";
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

export default ({ match: { params } }) => {
  // Scroll Initial Setting
  const [type, setType] = useState("dontSearch");
  const [categoryId, setCategoryId] = useState(400);
  const [title, setTitle] = useState("");

  try {
    useEffect(() => {
      window.scrollTo(0, 0);

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

  const {
    data: { ListBook },
    loading
  } = useQuery(LIST_BOOK, {
    variables: {
      type,
      categoryId
    }
  });

  return (
    <BookList>
      <Wrapper>
        {loading && <Loader />}
        {!loading && (
          <>
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
          </>
        )}
      </Wrapper>
    </BookList>
  );
};
