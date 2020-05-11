import React from "react";

import MenuIcon from "@material-ui/icons/Menu";

import {
  IconButton,
  Toolbar,
  AppBar,
  Typography,
  Avatar,
} from "@material-ui/core";

import styles from "styles/helpers.module.css";

const AppNavBar: React.FC = () => {
  return (
    <AppBar
      position="static"
      className={`${styles.FlexGrow} ${styles.BackgroundColorFFF} ${styles.NoBoxShadow} ${styles.Color242321}`}
    >
      <Toolbar className={`${styles.MarginTop10P} ${styles.NoPadding}`}>
        <Avatar
          className={styles.MarginRight10Px}
          src="https://media-exp1.licdn.com/dms/image/C5603AQEuTFDLUs4peQ/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=SiT9ttqDOaNJSZQ7EM0RuZweP9bir3rATVhR6iLWCJ8"
        ></Avatar>
        <Typography variant="h4" className={styles.FlexGrow}>
          Inês Portfolio
        </Typography>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon fontSize="large" />
        </IconButton>
      </Toolbar>
      <p className={styles.Color898989}>
        Inês Mendes Magalhães, I was born in Porto and I'm 23 years old. <br />I
        currently live in Coimbra, and I am currently working as a Front-End
        Developer at Talkdesk.
      </p>
    </AppBar>
  );
};

export default AppNavBar;
