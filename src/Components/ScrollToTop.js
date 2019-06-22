import { useEffect } from "react";
import { withRouter } from "react-router-dom";

export default withRouter(props => {
  useEffect(() => {
    console.log(props);
    window.onload = () => {
      window.scrollTo(0, 0);
    };
  }, [props.location]);

  return props.children;
});
