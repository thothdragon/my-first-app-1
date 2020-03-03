import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { articles, categories } from '../data';

const Sidebar = () =>
  <aside>
    <h2>Articles</h2>
    <ListGroup>
      {articles.map((item, index) =>
        <ListGroup.Item key={`article-link${index}`}>{item.title}</ListGroup.Item>
      )}
    </ListGroup>
    <h2>Categories</h2>
    <ListGroup>
      {categories.map((item, index) =>
        <ListGroup.Item key={`article-link${index}`}>{item.name}</ListGroup.Item>
      )}
    </ListGroup>
  </aside>
  ;

export default Sidebar;
