import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import search1 from "../../Image/search.svg";
import user1 from "../../Image/user.svg";
import logomain from "../../Image/logoUnwallpers.png";
const NavBar = () => {
  return (
    <div className="mainNavBar">
      <div className="navBarParantsWords">
        <NavLink to="/">
          <img
            className="navBarParantsWords logonavbar"
            id="logoMain"
            src={logomain}
            alt="image"
            title="На главную страницу"
          />
        </NavLink>

        <NavLink to="/type">
          <div className="navBarWords"> Тип</div>
        </NavLink>
        <NavLink to="/favorite">
          <div className="navBarWords"> Закладки</div>
        </NavLink>
        <NavLink to="/about">
          <div className="navBarWords"> О нас</div>
        </NavLink>
        <NavLink to="/add">
          <div className="navBarWords"> Добавить</div>
        </NavLink>
      </div>
      <div className="navBarAuthAndSearch">
        <img className="authAndSearch" src={user1} alt="user" />
        <img className="authAndSearch" src={search1} alt="search" />
      </div>
    </div>
  );
};

export default NavBar;
