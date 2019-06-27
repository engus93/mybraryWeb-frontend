// Import Modules
import React, { useState } from "react";
import { useQuery, useMutation } from "react-apollo-hooks";

// Import My Files
import SeeMyPostPresenter from "./SeeMyPostPresenter";
import { SEE_MY_POST, SEE_MY_POST_PAGING } from "./SeeMyPostQueries";
import { toast } from "react-toastify";

export default () => {
  const [page, setPage] = useState(1);
  const [pagingLoading, setPagingLoading] = useState(false);
  const [pagingList, setPagingList] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [eventPass, setEventPass] = useState(true);

  // First Data Response
  const {
    loading,
    data: { seeMyPost }
  } = useQuery(SEE_MY_POST, {
    variables: {
      year,
      month
    }
  });

  // Next Data Response
  const seeMyPostPagingMutation = useMutation(SEE_MY_POST_PAGING, {
    variables: {
      page,
      year,
      month
    }
  });

  // 날짜 이동 프로세스
  const dateCountPlus = () => {
    // 페이지 초기화
    setPage(1);
    setPagingList([]);
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const dateCountMinor = () => {
    // 페이지 초기화
    setPage(1);
    setPagingList([]);
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  // Infinity Scroll Process
  const pagingProcess = async () => {
    // 더 이상 내용이 없으면 페이징 차단
    if (eventPass) {
      // 페이징 로딩 띄우기
      setPagingLoading(true);
      // To Do Paging Function
      const {
        data: { seeMyPostPaging }
      } = await seeMyPostPagingMutation();
      console.log(seeMyPostPaging);
      // 더 이상 페이징 자료가 없으면 비활성화
      if (seeMyPostPaging.length > 0) {
        // 페이지 올리기
        setPage(page + 1);
        // 페이징 리스트 담기
        setPagingList([...pagingList, ...seeMyPostPaging]);
      } else {
        setEventPass(false);
        toast.error("더 이상 가져 올 서재가 없습니다.");
      }
      // 페이징 로딩 없애기
      setPagingLoading(false);
    }
  };

  return (
    <SeeMyPostPresenter
      loading={loading}
      seeMyPost={seeMyPost}
      year={year}
      month={month}
      dateCountPlus={dateCountPlus}
      dateCountMinor={dateCountMinor}
      pagingLoading={pagingLoading}
      pagingList={pagingList}
      eventPass={eventPass}
      pagingProcess={pagingProcess}
    />
  );
};
