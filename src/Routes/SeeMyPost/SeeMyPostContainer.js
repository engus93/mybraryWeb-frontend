// Import Modules
import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "react-apollo-hooks";

// Import My Files
import SeeMyPostPresenter from "./SeeMyPostPresenter";
import { SEE_MY_POST, SEE_MY_POST_PAGING } from "./SeeMyPostQueries";

export default () => {
  const [page, setPage] = useState(1);
  const [pagingLoading, setPagingLoading] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

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
  const seeMyPostPaging = useMutation(SEE_MY_POST_PAGING, {
    variables: {
      page,
      year,
      month
    }
  });

  // 날짜 이동 프로세스
  const dateCountPlus = () => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const dateCountMinor = () => {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const infinitiScroll = () => {
    if (
      window.innerHeight + window.scrollY + 150 >=
      document.body.offsetHeight
    ) {
      document.removeEventListener("scroll", infinitiScroll);
      setPagingLoading(true);
      document.addEventListener("scroll", infinitiScroll);
    }
  };

  // Auto Scroll Paging
  useEffect(() => {
    document.addEventListener("scroll", infinitiScroll);
    return () => {
      document.removeEventListener("scroll", infinitiScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SeeMyPostPresenter
      loading={loading}
      seeMyPost={seeMyPost}
      year={year}
      month={month}
      dateCountPlus={dateCountPlus}
      dateCountMinor={dateCountMinor}
      pagingLoading={pagingLoading}
    />
  );
};
