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
                <strong>HTML & CSS</strong>
              </div>
            </button>

            {visible && (
              <Modal onClick={handleModalClick}>
                <ModalArea>
                  <div>
                    <div className="close-button">
                      <FiXCircle size={44} />
                    </div>
                    <h1>OLX CLONE</h1>

                    <div className="imgs">
                      <img src={background} alt="" />
                      <img src={background} alt="" />
                      <img src={background} alt="" />
                    </div>
                    <p>
                      Manfnsaddddddddddddddddddddddddddddddddddddddddddddddd
                    </p>
                    <p>
                      Manfnsaddddddddddddddddddddddddddddddddddddddddddddddd
                    </p>
                    <p>
                      Manfnsaddddddddddddddddddddddddddddddddddddddddddddddd
                    </p>
                    <p>
                      Manfnsaddddddddddddddddddddddddddddddddddddddddddddddd
                    </p>
                    <p>
                      Manfnsaddddddddddddddddddddddddddddddddddddddddddddddd
                    </p>
                    <p>
                      Manfnsaddddddddddddddddddddddddddddddddddddddddddddddd
                    </p>
                    <p>
                      Manfnsaddddddddddddddddddddddddddddddddddddddddddddddd
                    </p>
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
