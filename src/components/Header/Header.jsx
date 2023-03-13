import React from "react";
import "./Header.css";

import Logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <div className="header__content">
          <NavLink to="/" replace>
            <img src={Logo} alt="logo star wars" className="header__logo" />
          </NavLink>
          <nav className="header__nav">
            <NavLink
              to="/"
              replace
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <span className="header__nav-item">Home</span>
            </NavLink>
            <NavLink
              to="/characters"
              replace
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <span className="header__nav-item">Characters</span>{" "}
            </NavLink>
            ;
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
