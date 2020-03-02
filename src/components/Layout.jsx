import React from 'react';
import { Header, Sidebar, Footer } from '.';
import { Container } from 'react-bootstrap';

const Layout = (props) =>
  <div className="App">
    <Container>
      <Header />
      <main>
        {props.children}
      </main>
      <Sidebar />
      <Footer />
    </Container>
  </div>
;

export default Layout;
