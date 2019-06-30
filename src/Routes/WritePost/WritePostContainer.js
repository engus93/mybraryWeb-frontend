// Import Modules
import React, { useState, useEffect, useRef } from "react";

// Import My Files
import WritePostPresenter from "./WritePostPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation, useQuery } from "react-apollo-hooks";
import { WRITE_POST, WRITE_BOOK, ME } from "./WritePostQueries";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { storageRef } from "../../Firebase/ImageUpload";

export default withRouter(({ history, match: { params: { book } } }) => {
  // 오늘 날짜
  const toDay = new Date();
  // 날짜 데이터 글자 형태로 변환
  const toDayDetailDate = [
    toDay.getFullYear(),
    toDay.getMonth() + 1,
    toDay.getDate()
  ];
  const postInputDate = useInput(
    `${toDayDetailDate[0]} / ${toDayDetailDate[1]} / ${toDayDetailDate[2]}`
  );

  const postInputTitle = useInput("");
  const postInputContents = useInput("");
  const [postInputBookCover, setPostInputBookCover] = useState("");
  const postInputSecret = useInput(true);
  const postInputUploadBtn = useRef();
  const postPreviewImg = useRef();
  const [showBookCover, setShowBookCover] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [fileObj, setFileObj] = useState("");
  // 책 검색해서 뿌려두기
  const { loading, data } = useQuery(WRITE_BOOK, {
    skip: book === undefined,
    variables: {
      itemId: Number(book)
    }
  });

  const {
    data: { me }
  } = useQuery(ME);

  // 책 정보 가져와서 글쓰기 할떄에 정보 세팅
  useEffect(() => {
    if (!loading && data && data.DetailBook) {
      postInputTitle.setValue(data.DetailBook.title);
      postPreviewImg.current.src = data.DetailBook.cover;
      setShowIcon(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const MutationWritePost = useMutation(WRITE_POST);

  const writeOnSubmit = async event => {
    event.preventDefault();
    if (postInputTitle.value === "") {
      return toast.error("제목이 아직 없습니다. 🙄");
    } else if (postInputContents.value === "") {
      return toast.error("내용이 아직 없습니다. 🙄");
    } else {
      // 사진이 존재 유무
      if (postInputBookCover !== "") {
        // 알라딘 API Cover URL
        if (data && data.DetailBook && data.DetailBook.cover) {
          MutationWritePost({
            variables: {
              title: postInputTitle.value,
              contents: postInputContents.value.replace(/\n/g, "<br>"),
              secret: postInputSecret.value,
              files: data.DetailBook.cover
            }
          });
          // 내가 등록한 사진
        } else {
          const uploadTask = await storageRef
            .child(
              `Images/${me.id}/${toDayDetailDate[0]}${toDayDetailDate[1]}${
                toDayDetailDate[2]
              } - ${fileObj.name}`
            )
            .put(fileObj);
          await uploadTask.task.on(
            "state_changed",
            snapshot => {
              // progrss function ....
              const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              console.log(progress);
            },
            error => {
              // error function ....
              console.log(error);
              toast.error(
                "알 수 없는 오류가 발생했습니다. 다시 한번 시도해주세요."
              );
            },
            async () => {
              // complete function ....
              await uploadTask.task.snapshot.ref.getDownloadURL().then(url => {
                MutationWritePost({
                  variables: {
                    title: postInputTitle.value,
                    contents: postInputContents.value.replace(/\n/g, "<br>"),
                    secret: postInputSecret.value,
                    files: url
                  }
                });
              });
            }
          );
        }
      } else {
        MutationWritePost({
          variables: {
            title: postInputTitle.value,
            contents: postInputContents.value.replace(/\n/g, "<br>"),
            secret: postInputSecret.value,
            files: ""
          }
        });
      }
      setTimeout(() => history.push("/seeMyPost"), 1000);
    }
  };

  const onChangeFile = async event => {
    const {
      target: { value, files }
    } = event;
    // File Input 이미지 선택시
    if (files.length > 0) {
      // 파일 리더 생성
      const reader = new FileReader();
      // URL 생성
      reader.readAsDataURL(files[0]);
      // 데이터 읽고 뿌리기
      reader.onload = () => {
        postPreviewImg.current.src = reader.result;
      };
      // Value Change
      setPostInputBookCover(value);
      // 업로드 파일 세팅
      setFileObj(files[0]);
      setShowIcon(true);
    } else {
      // File Input 이미지 취소시
      setPostInputBookCover("");
      setFileObj("");
      setShowIcon(false);
    }
  };

  return (
    <WritePostPresenter
      postInputDate={postInputDate}
      postInputTitle={postInputTitle}
      postInputContents={postInputContents}
      postInputUploadBtn={postInputUploadBtn}
      postInputBookCover={postInputBookCover}
      setPostInputBookCover={setPostInputBookCover}
      postInputSecret={postInputSecret}
      writeOnSubmit={writeOnSubmit}
      onChangeFile={onChangeFile}
      postPreviewImg={postPreviewImg}
      showBookCover={showBookCover}
      setShowBookCover={setShowBookCover}
      book={book}
      loading={loading}
      data={data}
      showIcon={showIcon}
      setShowIcon={setShowIcon}
    />
  );
});
