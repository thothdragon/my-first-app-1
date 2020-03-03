import React from 'react';
import PropsTypes from 'prop-types';
import exact from 'prop-types-exact';
import { ArticlePreview } from '.';
import { articles } from '../data';

const ArticleList = () =>
  <section className="card-list">
    {articles.map((item, index) =>
      <ArticlePreview
        key={`article-preview${index}`}
        title={item.title}
        text={item.text}
        index={index}
      />
    )}
  </section>
  ;

ArticleList.propsTypes = exact({
  articles: PropsTypes.array,
});

export default ArticleList;
