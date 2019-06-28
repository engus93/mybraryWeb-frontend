// Import Modules
import React, { useEffect } from "react";

// Import My Files
import WritePostPresenter from "./WritePostPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation, useQuery } from "react-apollo-hooks";
import { WRITE_POST, WRITE_BOOK } from "./WritePostQueries";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

export default withRouter(({ history, match: { params: { book } } }) => {
  // 오늘 날짜
  const toDay = new Date();
  // 날짜 데이터 글자 형태로 변환
  const postInputDate = useInput(
    `${toDay.getFullYear()} / ${toDay.getMonth() + 1} / ${toDay.getDate()}`
  );

  const postInputTitle = useInput("");
  const postInputContents = useInput("");
  const postInputSecret = useInput(true);

  // 책 검색해서 뿌려두기
  const { loading, data } = useQuery(WRITE_BOOK, {
    skip: book === undefined,
    variables: {
      itemId: Number(book)
    }
  });

  // 책 정보 가져와서 글쓰기 할떄에 정보 세팅
  useEffect(() => {
    if (!loading && data && data.DetailBook) {
      postInputTitle.setValue(data.DetailBook.title);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const MutationWritePost = useMutation(WRITE_POST, {
    variables: {
      title: postInputTitle.value,
      contents: postInputContents.value.replace(/\n/g, "<br>"),
      secret: postInputSecret.value,
      files: data && data.DetailBook ? data.DetailBook.cover : ""
    }
  });

  const writeOnSubmit = async event => {
    event.preventDefault();
    if (postInputTitle.value === "") {
      return toast.error("제목이 아직 없습니다. 🙄");
    } else if (postInputContents.value === "") {
      return toast.error("내용이 아직 없습니다. 🙄");
    } else {
      await MutationWritePost();
      history.push("/seeMyPost");
    }
  };

  return (
    <WritePostPresenter
      postInputDate={postInputDate}
      postInputTitle={postInputTitle}
      postInputContents={postInputContents}
      postInputSecret={postInputSecret}
      writeOnSubmit={writeOnSubmit}
      book={book}
      loading={loading}
      data={data}
    />
  );
});
