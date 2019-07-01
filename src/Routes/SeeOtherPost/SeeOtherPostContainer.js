// Import Modules
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useQuery, useMutation } from "react-apollo-hooks";

// Import My Files
import SeeOtherPostPresenter from "./SeeOtherPostPresenter";
import { SEE_BEST_POST_PAGING, SEE_BEST_POST } from "./SeeOtherPostQueries";
import { toast } from "react-toastify";

export default withRouter(({ history: { location } }) => {
  useEffect(() => {
    setActionBest(location.pathname.split("/seeOtherPost/")[1] === "best");
  }, [location.pathname]);

  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [page, setPage] = useState(1);
  const [pagingList, setPagingList] = useState([]);
  const [actionBest, setActionBest] = useState(
    location.pathname.split("/seeOtherPost/")[1] === "best"
  );
  const [eventPass, setEventPass] = useState(true);
  const [pagingLoading, setPagingLoading] = useState(false);

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

  const {
    loading,
    data: { seeAllPost }
  } = useQuery(SEE_BEST_POST, {
    skip: actionBest === undefined,
    variables: {
      isBest: actionBest,
      year,
      month
    },
    fetchPolicy: "no-cache"
  });

  const MutationSeeBestPostPaging = useMutation(SEE_BEST_POST_PAGING, {
    variables: {
      isBest: actionBest,
      page,
      year,
      month
    }
  });

  // Paging Process
  const pagingProcess = async () => {
    // 더 이상 내용이 없으면 페이징 차단
    if (eventPass) {
      // 페이징 로딩 띄우기
      setPagingLoading(true);

      const {
        data: { seeAllPostPaging }
      } = await MutationSeeBestPostPaging();
      // 더 이상 페이징 자료가 없으면 비활성화
      if (seeAllPostPaging.length > 0) {
        // 페이지 올리기
        setPage(page + 1);
        // 페이징 리스트 담기
        setPagingList([...pagingList, ...seeAllPostPaging]);
      } else {
        setEventPass(false);
        toast.error("더 이상 가져 올 서재가 없습니다.");
      }
      // 페이징 로딩 없애기
      setPagingLoading(false);
    }
  };

  return (
    <SeeOtherPostPresenter
      loading={loading}
      year={year}
      month={month}
      dateCountPlus={dateCountPlus}
      dateCountMinor={dateCountMinor}
      seeAllPost={seeAllPost}
      actionBest={actionBest}
      pagingList={pagingList}
      pagingProcess={pagingProcess}
      pagingLoading={pagingLoading}
      eventPass={eventPass}
    />
  );
});
