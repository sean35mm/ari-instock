import React from "react";
import Logo from "../../Assets/Logo/InStock-Logo.svg";
import { NavLink } from "react-router-dom";

import "../Header/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <a className="header__logo-link" href="/">
          <img className="header__logo" alt="inStock logo" src={Logo} />
        </a>
      </div>
      <nav className="header__links">
        <NavLink to="/warehouse" activeClassName="selected">
          <div className="header__link">Warehouses</div>
        </NavLink>
        <NavLink to="inventory" activeClassName="selected">
          <div className="header__link">Inventory</div>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
