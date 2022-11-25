import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

import "./Nav.scss";

const logoMarca =
  "https://bromteck.com/tv/wp-content/uploads/2021/02/logo_600_76_blue.png";
const avatar =
  "https://www.geekmi.news/__export/1652041486799/sites/debate/img/2022/05/08/geekmi_news_-_2022-05-08t142129_149.jpg_172596871.jpg";

function Nav() {
  /* -- evento para que al alhcer scroll se desvanezca el nav */
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 0) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.addEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__bg"}`}>
      <div className="nav__contents">
        <div className="left">
          {/*-- imagen del logo de la marca -- */}
          <img className="nav__logo" src={logoMarca} alt="logo" />
          <ul className="links">
            <li className="letras">Movie</li>
            <li>
              <span className="letras palabras-span">Tv Show</span>
            </li>
            <li>
              <span className="letras palabras-span">Radio</span>
            </li>
          </ul>
        </div>
        
        <div className="right">
          <SearchIcon className="icon" />
          <NotificationsIcon className="icon" />
          {/*--imagen del avatar--*/}
          <img className="nav__avatar" src={avatar} alt="avatar" />
          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="option">
              <span className="letras palabras-span">Profile</span>
              <span className="letras palabras-span">Setting</span>
              <span className="letras palabras-span">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
