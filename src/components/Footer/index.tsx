import React, { useState } from 'react';


import { FiMenu, FiLinkedin, FiGithub } from 'react-icons/fi';
import { Container } from './styles';


const Footer: React.FC = () => {


  return (
    <Container>
      <footer>
        <strong>@Copyright</strong>
        <strong>Alguns Direitos Reservados</strong>
        <div>
          <div>
            <a href="https://www.linkedin.com/in/eduardo-moreira-944413151/" target="blank"><FiLinkedin /></a>

            <a href="https://github.com/EduardoMoreira26" target="blank"><FiGithub /></a>
          </div>
        </div>

      </footer>
    </Container>
  );
};

export default Footer;
