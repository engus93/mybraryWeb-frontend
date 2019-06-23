import { useEffect } from "react";
import { withRouter } from "react-router-dom";

export default withRouter(({ children, location: { pathname } }) => {
  useEffect(() => {
    // 스크롤 위로 올라가는거 방지
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
});
