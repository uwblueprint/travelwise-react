import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import CompaniesPage from './components/CompaniesPage';

const client = new ApolloClient({
  uri: "https://travelwise-hasura.herokuapp.com/v1/graphql"
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Route path="/" exact component={LandingPage} />
        <Route path="/companies" exact component={CompaniesPage} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
