import React from 'react';
import { Layout, ArticleList } from '../components';

const Home = (props) =>
  <Layout>
    <h1>Mon beau blog</h1>
    <h2>Liste des articles</h2>
    <ArticleList />
  </Layout>
;

export default Home;
