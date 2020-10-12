import React from 'react';

import { Container, Content } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Main: React.FC = () => (
  <Container>

    <Header />

    <Content>
      <div className="intro">
        <h3>Bem vindo ao meu Pórtfolio!</h3>
        <h1>ME CONHEÇA</h1>
      </div>

      <h1>PROJETOS</h1>

      <section className="projects_container">
        <div className="background-card">
          <div className="card">

          </div>
          <div className="card">

          </div>
          <div className="card">

          </div>
          <div className="card">

          </div>
          <div className="card">

          </div>
          <div className="card">

          </div>
        </div>
      </section>
    </Content>

    <Footer />

  </Container>
);

export default Main;
