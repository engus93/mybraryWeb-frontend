// Import Modules
import React from "react";
import { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import { gql } from "apollo-boost";

// My Files
import Theme from "../Styles/Theme";
import GlobalStyles from "../Styles/GlobalStyles";
import AppRouter from "./Routes";
import { useQuery } from "react-apollo-hooks";

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
          <AppRouter isLoggedIn={isLoggedIn} />
        </Router>
      </>
    </ThemeProvider>
  );
};
