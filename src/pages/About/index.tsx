/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint no-use-before-define: 0 */
import React, { useState } from "react";

import { FiXCircle } from "react-icons/fi";
import { Container, Content, Modal, ModalArea } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import background from "../../assets/background.png";

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
          <h3>Bem vindo ao meu Pórtfolio!</h3>
        </div>

        <h1>PROJETOS</h1>

        <section className="projects_container">
          <div className="background-card">
            <button onClick={handleModal} className="card">
              <div className="effect-closed">
                <img src={background} alt="" />
                <strong>OLX Clone</strong>
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
                    <img src={background} alt="" />
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
      </Content>

      <Footer />
    </Container>
  );
};

export default Main;
