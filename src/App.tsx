import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import CompaniesPage from './components/CompaniesPage/CompaniesPage';

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
        <Route path="/profile" exact component={ProfilePage} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
