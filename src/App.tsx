import React from "react";

import { Container, Typography } from "@material-ui/core";

import styles from "styles/helpers.module.css";

import AppNavBar from "./components/navbar/AppNavBar";
import CardsGroup from "./components/cardGroup/CardsGroup";

const App: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Typography component="div" className={styles.Height100VH}>
        <AppNavBar />
        <CardsGroup />
      </Typography>
    </Container>
  );
};

export default App;
