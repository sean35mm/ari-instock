<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import Logo from "../../Assets/Logo/InStock-Logo.svg";
import { Link } from "react-router-dom";
=======
import React from 'react';
import Logo from '../../Assets/Logo/InStock-Logo.svg';
import {NavLink} from "react-router-dom";
>>>>>>> main
=======

import React from "react";
import Logo from "../../Assets/Logo/InStock-Logo.svg";
import { Link, NavLink } from "react-router-dom";


>>>>>>> main

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
<<<<<<< HEAD
<<<<<<< HEAD
        <Link className="header__link active">Warehouses</Link>
        <Link className="header__link">Inventory</Link>
=======
=======
        <Link className="header__link active">Warehouses</Link>
        <Link className="header__link">Inventory</Link>
>>>>>>> main
        <NavLink to="/warehouse" activeClassName="selected">
          <div className="header__link">Warehouses</div>
        </NavLink>
        <NavLink to="inventory" activeClassName="selected">
          <div className="header__link">Inventory</div>
        </NavLink>
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> main
      </nav>
    </header>
  );
};

export default Header;
