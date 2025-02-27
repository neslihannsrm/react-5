import React from "react";
import arrowIcon from "../assets/arrow.svg";

const NavBar = () => (
  <header className="nav">
    <div className="nav-left">
      <h1 className="logo">Seker</h1>
    </div>
    <nav className="nav-center">
      <ul>
        {["Images", "Videos", "Maps", "News", "Product"].map((item, index) => (
          <li key={index}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
    <div className="nav-right">
      <a className="signIn">
        Sign in
        <img className="arrowIcon" src={arrowIcon} alt="Arrow Icon" />
      </a>
    </div>
  </header>
);

export default NavBar;
