import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { Header, ArticleList, Sidebar, Footer } from './components';

const App = () =>
  <div className="App">
    <Container>
      <Header />
      <main>
        <h1>Mon beau blog</h1>
        <h2>Liste des articles</h2>
        <ArticleList />
      </main>
      <Sidebar />
      <Footer />
    </Container>
  </div>
;

export default App;
