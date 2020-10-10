import React, { useState } from 'react';


import { FiMenu, FiLinkedin, FiGithub } from 'react-icons/fi';

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

        <button onClick={handleButtonClick}><FiMenu /></button>

        {visible &&
          <Modal onClick={handleModalClick}>
            <ModalArea>
              <div><strong>Projetos</strong></div>
              <div><strong>Cursos</strong> </div>
              <div><strong>Blog</strong></div>
              <div><strong>Contato</strong> </div>

              <div>
                <a href="https://www.linkedin.com/in/eduardo-moreira-944413151/" target="blank"><FiLinkedin /></a>

                <a href="https://github.com/EduardoMoreira26" target="blank"><FiGithub /></a>
              </div>
            </ModalArea>
          </Modal>
        }





      </header>
    </Container>
  );
};

export default Header;
