import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import CompaniesPage from "./components/CompaniesPage/CompaniesPage";
import { HASURA_GRAPHQL_ADMIN_SECRET } from "./utils/config";
import DocumentsPage from "./components/DocumentsPage/DocumentsPage";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./utils/theme";

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
          <Route path="/companies" exact component={CompaniesPage} />
          <Route path="/documents" exact component={DocumentsPage} />
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
