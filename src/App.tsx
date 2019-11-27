import React from "react";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { ApolloProvider } from "react-apollo";

import theme from "./utils/theme";
import { HASURA_GRAPHQL_ADMIN_SECRET } from "./utils/config";

import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import CompaniesPage from "./pages/CompaniesPage";
import DocumentsPage from "./pages/DocumentsPage";
import SurveyPage from "./pages/SurveyPage";
import EditSurveyPage from "./pages/EditSurveyPage";
<<<<<<< HEAD
=======
import ProfilePage from './pages/ProfilePage';
>>>>>>> 4949c7f33aec64a456926fff3bd95a195a872a93

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
<<<<<<< HEAD
          <Route path="/surveys" exact component={EditSurveyPage} />
=======
          <Route path="/surveys" exact component={SurveyPage} />
          <Route path="/editsurvey" exact component={EditSurveyPage} />
          <Route path="/profile" exact component={ProfilePage} />
>>>>>>> 4949c7f33aec64a456926fff3bd95a195a872a93
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
