import React from "react";

import { Container, Typography } from "@material-ui/core";

import AppNavBar from "./components/navbar/AppNavBar";
import CardsGroup from "./components/cardGroup/CardsGroup";

const App: React.FC = () => {
  return (
    <Container>
      <Typography component="div">
        <AppNavBar />
        <CardsGroup />
      </Typography>
    </Container>
  );
};

export default App;
