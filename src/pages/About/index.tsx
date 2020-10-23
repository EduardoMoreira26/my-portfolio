/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint no-use-before-define: 0 */
import React, { useState } from "react";

import { FiXCircle } from "react-icons/fi";
import { Container, Content, Modal, ModalArea } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

import olxbg2 from "../../assets/olxbg2.png";
import olxcard from "../../assets/olxcard.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import bootstrap from "../../assets/bootstrap.png";
import react from "../../assets/react.png";
import node from "../../assets/node.png";

const Main: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const handleModal = () => {
    setVisible(true);
  };

  const handleModalClick = () => {
    setVisible(false);
  };

  return (
    <Container>
      <Header />

      <Content>
        <div className="intro">
          <h1>ME CONHEÇA</h1>
          <h3>Bem vindo ao meu Portfólio!</h3>
        </div>

        <h1>PROJETOS</h1>
        <strong>
          Projetos criados ao longo dos meus estudos e que me orgulho.
        </strong>

        <section className="projects_container">
          <div className="background-card">
            <button onClick={handleModal} className="card">
              <div className="effect-closed">
                <img src={olxcard} alt="" />
                <h2>OLX Clone</h2>
                <p>ReactJs</p>
              </div>
            </button>

            {visible && (
              <Modal onClick={handleModalClick}>
                <ModalArea>
                  <div className="close-button">
                    <FiXCircle size={44} />
                  </div>
                  <h1>OLX CLONE</h1>

                  <div className="imgs">
                    <img src={olxbg2} alt="Olx" />
                  </div>

                  <div className="description">
                    <p>
                      Projeto criado com principal objetivo de colocar em
                      prática todo o conhecimento adquirido no curso da
                      plataforma B7WEB, onde foi abordado todos os conceitos da
                      biblioteca React. Onde foi criado o clone da aplicação
                      OLX, através de uma SPA.
                    </p>
                    <br />
                    <a
                      href="https://github.com/EduardoMoreira26/FrontEnd-OLX"
                      target="blank"
                    >
                      Repositório GitHub
                    </a>
                  </div>
                </ModalArea>
              </Modal>
            )}
          </div>
        </section>

        <section className="skills_section">
          <h1>SKILLS</h1>
          <strong>
            Aqui está minha tech favorita, linguagens e frameworks que estudo e
            uso nos meus projetos.
          </strong>

          <div className="skills">
            <Card>
              <i className="devicon-html5-plain colored" />
              <h2>HTML5</h2>
            </Card>

            <Card>
              <i className="devicon-css3-plain colored" />
              <h2>CSS3</h2>
            </Card>

            <Card>
              <i className="devicon-javascript-plain colored" />
              <h2>Javascript</h2>
            </Card>

            <Card>
              <i className="devicon-react-original colored" />
              <h2>React</h2>
            </Card>

            <Card>
              <i className="devicon-typescript-plain colored" />
              <h2>Typescript</h2>
            </Card>

            <Card>
              <i className="devicon-bootstrap-plain colored" />
              <h2>Bootstrap</h2>
            </Card>

            <Card>
              <i className="devicon-nodejs-plain colored" />
              <h2>Node</h2>
            </Card>

            <Card>
              <i className="devicon-express-original colored" />
              <h2>Express</h2>
            </Card>

            <Card>
              <i className="devicon-docker-plain colored" />

              <h2>Docker</h2>
            </Card>
          </div>
        </section>
      </Content>

      <Footer />
    </Container>
  );
};

export default Main;
