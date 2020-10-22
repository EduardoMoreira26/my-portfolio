/* eslint-disable react/prop-types */
/* eslint no-use-before-define: 0 */

import React, { useState } from "react";

import { Container } from "./styles";

const Card: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Card;
