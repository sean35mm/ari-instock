import React from "react";
import Logo from "../../Assets/Logo/InStock-Logo.svg";
import { Link } from "react-router-dom";

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
        <Link className="header__link active">Warehouses</Link>
        <Link className="header__link">Inventory</Link>
      </nav>
    </header>
  );
};

export default Header;
