import React, { useState } from 'react';


import { FiMenu } from 'react-icons/fi';

import { Container, Modal, ModalArea } from './styles';

const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <header>
        <h1>Eduardo Moreira</h1>

        <button>Abrir Modal</button>

        <Modal>

          <ModalArea>

            <div><strong>Projetos</strong></div>
            <div><strong>Cursos</strong> </div>
            <div><strong>Blog</strong></div>
            <div><strong>Contato</strong> </div>

          </ModalArea>

        </Modal>





      </header>
    </Container>
  );
};

export default Header;
