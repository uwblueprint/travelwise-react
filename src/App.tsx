import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import CompaniesPage from './components/CompaniesPage/CompaniesPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import { HASURA_GRAPHQL_ADMIN_SECRET } from './utils/config'

const client = new ApolloClient({
  uri: "https://travelwise-hasura.herokuapp.com/v1/graphql",
  headers: {
    'X-Hasura-Admin-Secret': HASURA_GRAPHQL_ADMIN_SECRET,
  }
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/companies" exact component={CompaniesPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
