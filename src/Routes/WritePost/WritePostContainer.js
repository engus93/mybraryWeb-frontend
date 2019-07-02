// Import Modules
import React, { useState, useEffect, useRef } from "react";
import { useMutation, useQuery } from "react-apollo-hooks";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import decode from "unescape";

// Import My Files
import useInput from "../../Hooks/useInput";
import WritePostPresenter from "./WritePostPresenter";
import { storageRef } from "../../Firebase/ImageUpload";
import {
  WRITE_POST,
  WRITE_BOOK,
  ME,
  EDIT_POST_BRING,
  EDIT_POST
} from "./WritePostQueries";

export default withRouter(
  ({
    history,
    match: {
      params: { book, postId }
    }
  }) => {
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
    //
    const [postInputBookCover, setPostInputBookCover] = useState("");
    const postInputSecret = useInput(true);
    const postInputUploadBtn = useRef();
    const postPreviewImg = useRef();
    // Image display boolean
    const [showBookCover, setShowBookCover] = useState(false);
    // Icon display boolean
    const [showIcon, setShowIcon] = useState(false);
    // Files Array
    const [fileObj, setFileObj] = useState("");
    // 책 검색해서 뿌려두기
    const { loading, data } = useQuery(WRITE_BOOK, {
      skip: book === undefined,
      variables: {
        itemId: Number(book)
      }
    });
    const { loading: loadingEdit, data: dataEdit } = useQuery(EDIT_POST_BRING, {
      skip: postId === undefined,
      variables: {
        postId
      }
    });

    const [uploadLoading, setUploadLoading] = useState(true);

    const {
      data: { me }
    } = useQuery(ME);

    const MutationEditPost = useMutation(EDIT_POST, {
      variables: {
        postId,
        title: postInputTitle.value,
        contents: postInputContents.value.replace(/\n/g, "<br>"),
        secret: postInputSecret.value
      }
    });

    // 데이터가 있을 시에 자연스러운 로딩을 위해서
    useEffect(() => {
      if (book !== undefined || postId !== undefined) {
        setTimeout(() => {
          setUploadLoading(false);
        }, 3000);
      } else {
        setUploadLoading(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 책 정보 가져와서 글쓰기 할떄에 정보 세팅
    useEffect(() => {
      if (!loading && data && data.DetailBook) {
        postInputTitle.setValue(data.DetailBook.title);
        postPreviewImg.current.src = data.DetailBook.cover;
        setShowIcon(true);
      } else if (!loadingEdit && dataEdit && dataEdit.editPostBring) {
        const postDate = new Date(dataEdit.editPostBring.createdAt);
        postInputDate.setValue(
          `${postDate.getFullYear()} / ${postDate.getMonth() +
            1} / ${postDate.getDate()}`
        );
        postInputTitle.setValue(dataEdit.editPostBring.title);
        postInputContents.setValue(
          decode(dataEdit.editPostBring.contents.replace(/<br>/g, "\r\n"))
        );
        if (dataEdit.editPostBring.file) {
          postPreviewImg.current.src = dataEdit.editPostBring.file.url;
          setShowIcon(true);
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, dataEdit]);

    const MutationWritePost = useMutation(WRITE_POST);

    const writeOnSubmit = async event => {
      event.preventDefault();
      if (postInputTitle.value === "") {
        return toast.error("제목이 아직 없습니다. 🙄");
      } else if (postInputContents.value === "") {
        return toast.error("내용이 아직 없습니다. 🙄");
      } else {
        // 새로 작성하는 프로세스
        if (!postId) {
          // 업로드 시작
          setUploadLoading(true);
          // 사진이 존재 유무
          if (showIcon) {
            // 알라딘 API Cover URL
            if (data && data.DetailBook && data.DetailBook.cover) {
              MutationWritePost({
                variables: {
                  title: postInputTitle.value,
                  contents: postInputContents.value.replace(/\n/g, "<br>"),
                  secret: postInputSecret.value,
                  file: data.DetailBook.cover
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
                  setUploadLoading(false);
                },
                async () => {
                  // complete function ....
                  await uploadTask.task.snapshot.ref
                    .getDownloadURL()
                    .then(url => {
                      MutationWritePost({
                        variables: {
                          title: postInputTitle.value,
                          contents: postInputContents.value.replace(
                            /\n/g,
                            "<br>"
                          ),
                          secret: postInputSecret.value,
                          file: url
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
                secret: postInputSecret.value
              }
            });
          }
          // 수정하는 경우
        } else {
          await MutationEditPost();
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
        uploadLoading={uploadLoading}
        postId={postId}
      />
    );
  }
);
