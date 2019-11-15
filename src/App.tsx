import React from "react";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { ApolloProvider } from "react-apollo";
import HomePage from './components/HomePage/HomePage';
import theme from "./utils/theme";
import { HASURA_GRAPHQL_ADMIN_SECRET } from "./utils/config";

import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import CompaniesPage from "./components/CompaniesPage/CompaniesPage";
import DocumentsPage from "./components/DocumentsPage/DocumentsPage";

const client = new ApolloClient({
  uri: "https://travelwise-hasura.herokuapp.com/v1/graphql",
  headers: {
    "X-Hasura-Admin-Secret": HASURA_GRAPHQL_ADMIN_SECRET
  }
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Route path="/" exact component={LandingPage} />
          <Route path="/home" exact component={HomePage} />
          <Route path="/companies" exact component={CompaniesPage} />
          <Route path="/documents" exact component={DocumentsPage} />
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
