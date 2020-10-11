import React, { useState } from 'react';

import { Sling as Hamburger } from 'hamburger-react'

import { Container, Modal, ModalArea } from './styles';

const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const handleButtonClick = () => {
    setVisible(true);
  }

  const handleModalClick = () => {
    setVisible(false);
  }

  return (
    <Container>
      <header>
        <h1>Eduardo Moreira</h1>

        <button onClick={handleButtonClick}><Hamburger color="#fff" toggled={visible} toggle={setVisible} /></button>

        {visible &&
          <Modal onClick={handleModalClick}>
            <ModalArea>
              <a href="/projetos"><div><strong>Projetos</strong></div></a>
              <a href="/cursos"><div><strong>Cursos</strong></div></a>
              <a href="/blog"><div><strong>Blog</strong></div></a>
              <a href="/contato"><div><strong>Contato</strong></div></a>

            </ModalArea>
          </Modal>
        }





      </header>
    </Container >
  );
};

export default Header;
