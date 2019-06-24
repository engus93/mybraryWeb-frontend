// Import Modules
import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";

// My Files
import Auth from "../Routes/Auth";
import Main from "../Routes/Main";
import BookDetail from "../Routes/BookDetail";
import MyPage from "../Routes/MyPage";
import Search from "../Routes/Search";
import SeeAllPost from "../Routes/SeeAllPost";
import SeeBestPost from "../Routes/SeeBestPost";
import SeeMyPost from "../Routes/SeeMyPost";
import WritePost from "../Routes/WritePost";
import BookList from "../Routes/BookList";
import ScrollToTop from "./ScrollToTop";

// When Logged In
const LoggedInRoutes = () => (
  <ScrollToTop>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/myPage" component={MyPage} />
      <Route exact path="/seeAllPost" component={SeeAllPost} />
      <Route exact path="/seeBestPost" component={SeeBestPost} />
      <Route exact path="/seeMyPost" component={SeeMyPost} />
      <Route exact path="/writePost" component={WritePost} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/book-list/:gener" component={BookList} />
      <Route exact path="/:itemId" component={BookDetail} />
      <Redirect from="*" to="/" />
    </Switch>
  </ScrollToTop>
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
