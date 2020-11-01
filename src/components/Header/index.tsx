/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint no-use-before-define: 0 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "react-transition-group";

import { Sling as Hamburger } from "hamburger-react";

import { Container, Modal, ModalArea } from "./styles";

const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const handleButtonClick = () => {
    setVisible(true);
  };

  const handleModalClick = () => {
    setVisible(false);
  };

  return (
    <Container>
      <header>
        <Link to="/">Eduardo Moreira</Link>

        <button onClick={handleButtonClick}>
          <Hamburger
            color="#81c043"
            duration={0.5}
            toggled={visible}
            toggle={setVisible}
          />
        </button>

        {visible && (
          <Modal onClick={handleModalClick}>
            <ModalArea>
              <Link to="/">
                <div>
                  <strong>Projetos</strong>
                </div>
              </Link>
              <Link to="/cursos">
                <div>
                  <strong>Cursos</strong>
                </div>
              </Link>
              <Link to="/blog">
                <div>
                  <strong>Blog</strong>
                </div>
              </Link>
              <Link to="/contato">
                <div>
                  <strong>Contato</strong>
                </div>
              </Link>
            </ModalArea>
          </Modal>
        )}
      </header>
    </Container>
  );
};

export default Header;
