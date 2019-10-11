import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import CompaniesPage from './components/CompaniesPage/CompaniesPage';
import { HASURA_GRAPHQL_ADMIN_SECRET } from './utils/config'
import { createBrowserHistory } from 'history';

const client = new ApolloClient({
  uri: "https://travelwise-hasura.herokuapp.com/v1/graphql",
  headers: {
    'X-Hasura-Admin-Secret': HASURA_GRAPHQL_ADMIN_SECRET,
  }
});

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    /*<BrowserRouter>*/
      <ApolloProvider client={client}>
        <Router /*history={history}*/>
          <Navbar /*history={history}*//>
          <Switch>
            <Route path="/" exact component={LandingPage}/>
            <Route path="/companies" exact component={CompaniesPage}/>
          </Switch>
          
        </Router>
      </ApolloProvider>
    /*</BrowserRouter>*/
    
  );
}

export default App;
