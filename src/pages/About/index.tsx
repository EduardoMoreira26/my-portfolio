/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint no-use-before-define: 0 */
import React, { useState } from "react";

import { FiXCircle, FiLinkedin, FiGithub } from "react-icons/fi";
import { Transition } from "react-transition-group";
import { Container, Content, Modal, ModalArea, CardCursos } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

import olxbg2 from "../../assets/olxbg2.png";
import olxcard from "../../assets/olxcard.png";
import rocketseat from "../../assets/rocketseat.png";
import origamid from "../../assets/origamid.png";
import b7web from "../../assets/b7web.png";
import bitcompany from "../../assets/bitcompany.png";
import pitagoras from "../../assets/pitagoras.png";

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
        <Transition timeout={4000} in appear>
          <div className="intro">
            <h1>ME CONHEÇA</h1>
            <h3>Bem vindo ao meu Portfólio!</h3>
          </div>
        </Transition>

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

        <h1>CURSOS</h1>
        <section className="projects_container section_cursos">
          <CardCursos>
            <img src={rocketseat} alt="rocketseat" />
            <div className="infoCursos">
              <h2>
                2020 <br />
                Rocketseat - Gostack 11
              </h2>
              <p>
                Bootcamp imersivo nas tecnologias Node, React e ReactNative.
              </p>
            </div>
          </CardCursos>

          <CardCursos>
            <img className="b7web" src={b7web} alt="B7WEB" />
            <div className="infoCursos">
              <h2>
                2020 <br />
                B7WEB
              </h2>
              <p>
                Web Design - 22 horas. <br />
                CSS Avançado Posicionamento - 9 horas. <br />
                CSS Flexbox - 3 horas. <br />
                CSS Grid Layout - 5 horas. <br />
                CSS com SASS - 6 horas. <br />
                Javascript - 37 horas.
              </p>
            </div>
          </CardCursos>

          <CardCursos>
            <img src={origamid} alt="Origamid" />
            <div className="infoCursos">
              <h2>
                {" "}
                2020
                <br />
                Origamid
              </h2>
              <p>
                Web Design - 22 horas. <br />
                CSS Avançado Posicionamento - 9 horas. <br />
                CSS Flexbox - 3 horas. <br />
                CSS Grid Layout - 5 horas. <br />
                CSS com SASS - 6 horas. <br />
                Javascript - 37 horas.
              </p>
            </div>
          </CardCursos>

          <CardCursos>
            <img src={pitagoras} alt="Origamid" />
            <div className="infoCursos">
              <h2>
                2015 - 2019
                <br />
                Faculdade Pitágoras - Bacharel em Contabilidade
              </h2>
              <p>
                Web Design - 22 horas. <br />
                CSS Avançado Posicionamento - 9 horas. <br />
                CSS Flexbox - 3 horas. <br />
                CSS Grid Layout - 5 horas. <br />
                CSS com SASS - 6 horas. <br />
                Javascript - 37 horas.
              </p>
            </div>
          </CardCursos>

          <CardCursos>
            <img src={bitcompany} alt="Bitcompany" />
            <div className="infoCursos">
              <h2>
                2011 - 2012 <br />
                BitCompany - Técnico em Informática
              </h2>
              <p>
                Manutenção de Computadores. <br /> Redes de Computadores. <br />{" "}
                Sistemas Operacionais. <br /> Arquitetura de Computadores.{" "}
                <br /> Lógica de Programação. <br /> Desenvolvimento de
                Sistemas(HTML CSS PHP). <br /> Banco de Dados(MySQL).
              </p>
            </div>
          </CardCursos>
        </section>

        <h1>CONTATO</h1>
        <section className="contact_container">
          <div className="container_card">
            <div className="contact_card">
              <h2>Telefone</h2> <br />
              <a href="tel:+351934854234">934854234</a>
            </div>

            <div className="contact_card">
              <h2>Email</h2> <br /> <strong>du_du.mba@hotmail.com</strong>
            </div>

            <div className="contact_card">
              <h2>Redes Sociais</h2>
              <br />
              <a
                href="https://www.linkedin.com/in/eduardo-moreira-944413151/"
                target="blank"
              >
                <i className="devicon-linkedin-plain colored" />
              </a>

              <a href="https://github.com/EduardoMoreira26" target="blank">
                <i className="devicon-github-plain colored" />
              </a>
            </div>
          </div>
        </section>
      </Content>

      <Footer />
    </Container>
  );
};

export default Main;
