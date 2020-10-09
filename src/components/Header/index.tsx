import React from 'react';

import { Link } from 'react-router-dom'

import { Container } from './styles';

const Header: React.FC = () => (

  <Container>
    <header>
      <h1>Eduardo Moreira</h1>

      <nav>
        <a href="/">GitHub</a>
        <a href="/">LinkdIn</a>
        <a href="/">Blog</a>
      </nav>

    </header>
  </Container>
);

export default Header;
