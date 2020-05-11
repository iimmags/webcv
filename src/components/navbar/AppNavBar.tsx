import React from "react";

import MenuIcon from "@material-ui/icons/Menu";

import {
  IconButton,
  Toolbar,
  AppBar,
  Typography,
  Avatar,
} from "@material-ui/core";

const AppNavBar: React.FC = () => {
  return (
    <div className="flex-grow bg-gray-200 shadow-none rounded mt-10">
      <AppBar position="static">
        <div className="p-0 pt-10 bg-gray-200">
          <Toolbar>
          <div className="mr-6">
            <Avatar
              src={require('../../assets/avatar.jpg')}
            ></Avatar>
            </div>
            <div className="flex-grow text-gray-900">
            <Typography variant="h4">
              Inês Portfolio
            </Typography>
            </div>
            <IconButton className="focus:outline-none" edge="start" aria-label="menu" >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Toolbar>
        </div>
        <p className="bg-gray-200 pb-10 pl-5 text-gray-900">
          Inês Mendes Magalhães, I was born in Porto and I'm 23 years old.{" "}
          <br />I currently live in Coimbra, and I am currently working as a
          Front-End Developer at Talkdesk.
        </p>
      </AppBar>
    </div>
  );
};

export default AppNavBar;
