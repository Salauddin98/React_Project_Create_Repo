import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      {/* a*4[href=$]{$} */}
      <div>
        <a href="/Order">Order</a>
        <a href="/Shop">Shop</a>
        <a href="/Manage Inventory">Manage Inventory</a>
        <a href="/Login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
