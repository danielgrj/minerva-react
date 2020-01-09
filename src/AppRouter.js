import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import client from './config/ApolloClient';

import Login from './pages/Login';
import Signup from './pages/Signup';

const AppRouter = () => (
  <ApolloProvider client={client}>
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </Router>
  </ApolloProvider>
);

export default AppRouter;
