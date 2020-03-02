import React from 'react';
import './App.css';
import { Layout, ArticleList } from './components';

const App = () =>
  <Layout>
    <h1>Mon beau blog</h1>
    <h2>Liste des articles</h2>
    <ArticleList />
  </Layout>
;

export default App;
