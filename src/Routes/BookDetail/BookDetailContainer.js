// Import Modules
import React from "react";
import { useQuery } from "react-apollo-hooks";

import BookDetailPresenter from "./BookDetailPresenter";

// Import My Files
import { DETAIL_BOOK } from "./BookDetailQuerise";

// 책 아이디 가져오기
export default ({
  match: {
    params: { itemId }
  }
}) => {
  // 해당 책의 데이터 가져오기
  const {
    data: { DetailBook },
    loading
  } = useQuery(DETAIL_BOOK, {
    variables: {
      itemId: Number(itemId)
    }
  });
  return <BookDetailPresenter loading={loading} DetailBook={DetailBook} />;
};
