import React from "react";
import styled from "styled-components";

import Container from "../components/Container";

const Header = styled.h1`
  font-family: Roboto;
`;

const IndexPage = () => (
  <Container>
    <Header>Hello, World!</Header>
  </Container>
);

export default IndexPage;
