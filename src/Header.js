import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
/* import MicOutlinedIcon from "@material-ui/icons/MicOutlined"; */

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt=""
        />
      </div>

      <div className="header__input">
        <input placeholder="Rechercher" type="text" />
        <SearchIcon className="header__inputButton" />
        
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt=""
          src="https://media-exp1.licdn.com/dms/image/C4D03AQEQLUvnWbNRYA/profile-displayphoto-shrink_800_800/0/1635442006354?e=1643241600&v=beta&t=CHr_IuBnVfc64dGx9Yeh96Xba_iwrrrxnglzfkX7CGk"
        />
      </div>
    </div>
  );
};

export default Header;
