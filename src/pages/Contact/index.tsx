/* eslint no-use-before-define: 0 */

import React from "react";

import { Container, Content } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Contact: React.FC = () => (
  <Container>
    <Header />

    <Content>
      <h1>COntato</h1>
    </Content>

    <Footer />
  </Container>
);

export default Contact;
