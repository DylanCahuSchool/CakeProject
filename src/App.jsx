import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  const name = localStorage.getItem('name');

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {name ? <Redirect to="components/pages/order" /> : <LoginPage />}
        </Route>
        <Route path="components/pages/order">
          {name ? <OrderPage /> : <Redirect to="/" />}
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;