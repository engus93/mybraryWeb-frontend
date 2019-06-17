// Import Modules
import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";

// My Files
import Auth from "../Routes/Auth";
import BookDetail from "../Routes/BookDetail";
import Main from "../Routes/Main";
import MyPage from "../Routes/MyPage";
import Search from "../Routes/Search";
import SeeAllPost from "../Routes/SeeAllPost";
import SeeBestPost from "../Routes/SeeBestPost";
import SeeMyPost from "../Routes/SeeMyPost";
import WritePost from "../Routes/WritePost";

// When Logged In
const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Redirect from="*" to="/" />
  </Switch>
);
// When Logged Out

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Redirect from="*" to="/" />
  </Switch>
);

// Render
const AppRouter = ({ isLoggedIn }) =>
  isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

// PropTypes
AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;
