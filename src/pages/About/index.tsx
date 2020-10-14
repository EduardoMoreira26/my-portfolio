import React from 'react';

import { Container, Content } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import background from '../../assets/background.png';

const Main: React.FC = () => {

  return (

    <Container>

      <Header />

      <Content>
        <div className="intro">
          <h1>ME CONHEÇA</h1>
          <h3>Bem vindo ao meu Pórtfolio!</h3>
        </div>

        <h1>PROJETOS</h1>

        <section className="projects_container">
          <div className="background-card">
            <div className="card">
              <img src={background} alt="" />
              <strong>HTML & CSS</strong>


            </div>
            <div className="card">
              <img src={background} alt="" />
              <strong>HTML & CSS</strong>


            </div>

            <div className="card">
              <img src={background} alt="" />
              <strong>HTML & CSS</strong>



            </div>
            <div className="card">
              <img src={background} alt="" />
              <strong>HTML & CSS</strong>



            </div>
            <div className="card">
              <img src={background} alt="" />
              <strong>HTML & CSS</strong>



            </div>
            <div className="card">
              <img src={background} alt="" />

              <strong>HTML & CSS</strong>


            </div>
          </div>
        </section>
      </Content>

      <Footer />

    </Container>
  );
}

export default Main;
