import React, { useState } from 'react';

import { Container, Content, Modal, ModalArea } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import background from '../../assets/background.png';

const Main: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const handleModal = () => {
    setVisible(true);
  }

  const handleModalClick = () => {
    setVisible(false);
  }

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

            <button
              onClick={handleModal}
              className="card">
              <div className="effect-closed">
                <img src={background} alt="" />
                <strong>HTML & CSS</strong>
              </div>
            </button>

            {visible &&
              <Modal onClick={handleModalClick}>
                <ModalArea>
                  <div>
                    <h1>OLX CLONE</h1>
                    <p>Manfnsaddddddddddddddddddddddddddddddddddddddddddddddd</p>
                    <p>Manfnsaddddddddddddddddddddddddddddddddddddddddddddddd</p>
                    <p>Manfnsaddddddddddddddddddddddddddddddddddddddddddddddd</p>
                    <p>Manfnsaddddddddddddddddddddddddddddddddddddddddddddddd</p>
                    <p>Manfnsaddddddddddddddddddddddddddddddddddddddddddddddd</p>
                    <p>Manfnsaddddddddddddddddddddddddddddddddddddddddddddddd</p>
                    <p>Manfnsaddddddddddddddddddddddddddddddddddddddddddddddd</p>
                  </div>

                </ModalArea>
              </Modal>
            }

            <button onClick={handleModal} className="card">
              <div className="effect-closed">
                <img src={background} alt="" />
                <strong>HTML & CSS</strong>
              </div>
            </button>

            {visible &&
              <Modal onClick={handleModalClick}>
                <ModalArea>

                </ModalArea>
              </Modal>
            }

            <button onClick={handleModal} className="card">
              <div className="effect-closed">
                <img src={background} alt="" />
                <strong>HTML & CSS</strong>
              </div>
            </button>

            {visible &&
              <Modal onClick={handleModalClick}>
                <ModalArea>

                </ModalArea>
              </Modal>
            }

            <button onClick={handleModal} className="card">
              <div className="effect-closed">
                <img src={background} alt="" />
                <strong>HTML & CSS</strong>
              </div>
            </button>

            {visible &&
              <Modal onClick={handleModalClick}>
                <ModalArea>

                </ModalArea>
              </Modal>
            }

            <button onClick={handleModal} className="card">
              <div className="effect-closed">
                <img src={background} alt="" />
                <strong>HTML & CSS</strong>
              </div>
            </button>

            {visible &&
              <Modal onClick={handleModalClick}>
                <ModalArea>

                </ModalArea>
              </Modal>
            }

            <button onClick={handleModal} className="card">
              <div className="effect-closed">
                <img src={background} alt="" />
                <strong>HTML & CSS</strong>
              </div>
            </button>

            {visible &&
              <Modal onClick={handleModalClick}>
                <ModalArea>

                </ModalArea>
              </Modal>
            }

          </div>
        </section>
      </Content>

      <Footer />

    </Container >
  );
}

export default Main;
