// Import Modules
import React from "react";
import { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import { gql } from "apollo-boost";
import { ToastContainer } from "react-toastify";
import { useQuery } from "react-apollo-hooks";
import "react-toastify/dist/ReactToastify.css";

// My Files
import Theme from "../Styles/Theme";
import GlobalStyles from "../Styles/GlobalStyles";
import AppRouter from "./Routes";
import Header from "./Header";
import FloatingBtn from "./FloatingBtn";
import Footer from "./Footer";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          {isLoggedIn && <Header />}
          {isLoggedIn && <FloatingBtn />}
          <AppRouter isLoggedIn={isLoggedIn} />
          {isLoggedIn && <Footer />}
        </Router>
        <ToastContainer autoClose={2500} position={"bottom-left"} />
      </>
    </ThemeProvider>
  );
};
