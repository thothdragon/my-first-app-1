import React from 'react';
import { Layout, ArticleList } from '../components';
import { articles } from '../data';

const Search = (props) => {
  const argument = props.match.params.argument;

  const selectedArticles = articles.filter((articles) =>
    articles.title.toLowerCase().includes(argument) ||
    articles.text.toLowerCase().includes(argument)
  );

  return (
    <Layout>
      <h1>Recheche</h1>
      <h2>Article correspondant à votre recherche : {argument}</h2>
      <ArticleList articles={selectedArticles} />
    </Layout>
  )
}

export default Search;