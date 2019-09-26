import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import CompaniesPage from './components/CompaniesPage/CompaniesPage';
<<<<<<< HEAD
import { HASURA_GRAPHQL_ADMIN_SECRET } from './utils/config'
=======
<<<<<<< HEAD
>>>>>>> adding profile page
import ProfilePage from './components/ProfilePage/ProfilePage';
=======
import ProfilePage from './components/ProfilePage';
>>>>>>> adding profile page

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
        <Navbar />
        <Route path="/" exact component={LandingPage} />
        <Route path="/companies" exact component={CompaniesPage} />
        <Route path="/profile" exact component={ProfilePage} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
