/* eslint no-use-before-define: 0 */

import React from "react";

import { Container, Content } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageConstruction from "../../components/ConstructionPage";

const Contact: React.FC = () => (
  <Container>
    <Header />

    <Content>
      <PageConstruction />
    </Content>

    <Footer />
  </Container>
);

export default Contact;
