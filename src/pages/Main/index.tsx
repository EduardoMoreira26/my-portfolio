/* eslint no-use-before-define: 0 */

import React from "react";

import { Container, Content } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Main: React.FC = () => (
  <Container>
    <Header />

    <Content />

    <Footer />
  </Container>
);

export default Main;
