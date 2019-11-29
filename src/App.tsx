import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import CompaniesPage from "./components/CompaniesPage/CompaniesPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Hasura from "./services/hasura";

const App: React.FC = () => {
  return (
    <ApolloProvider client={Hasura}>
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/companies" exact component={CompaniesPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} />
      </Router>
    </ApolloProvider>
  );
};

export default App;
