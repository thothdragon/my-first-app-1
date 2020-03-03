import React from 'react';
import './App.css';
import { HomePage, NotFoundPage, ContactPage, Category } from './pages';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () =>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/category/:id(\d+)" component={Category} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
  ;

export default App;
