import React from 'react';
import './App.css';
import { HomePage, NotFoundPage, ContactPage } from './pages';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () =>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
;

export default App;
