import React from "react";
import logo from "../img/logo.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import {deepPurple } from '@mui/material/colors';
const Header = () => {
  return (
    <div className="header">
      <div className="logo-area">
        <img src={logo} alt="logo" />
        <p>Event</p>
      </div>
      <div className="search-area">
        <div className="search">
          <input type="search" placeholder="Search" />
        </div>
      </div>
      <div className="right-area">
        <div className="notofications">
          <i class="ri-notification-line"></i>
        </div>
        <div className="profiles">
          <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: deepPurple[500], width:35, height:35, cursor:"pointer" }}>FA</Avatar>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Header;
