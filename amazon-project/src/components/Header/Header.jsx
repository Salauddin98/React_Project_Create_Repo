import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const signOut = () => {
    logOut()
      .then((result) => {})
      .catch();
  };
  return (
    <nav className="header">
      <img src={logo} alt="" />
      {/* a*4[href=$]{$} */}
      <div>
        <Link to="/">Shop</Link>
        <Link to="/order">Order</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Log in</Link>
        <Link to="/register">Sign up</Link>
        {user && (
          <span style={{ color: "white", marginLeft: "10px" }}>
            {user.email} <button onClick={signOut}>Sign out</button>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
