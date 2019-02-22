import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.h1`
  font-family: Roboto;
`;

const IndexPage = () => (
  <React.Fragment>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      />
    </Helmet>
    <Container>
      <Header>Hello, World!</Header>
    </Container>
  </React.Fragment>
);

export default IndexPage;
