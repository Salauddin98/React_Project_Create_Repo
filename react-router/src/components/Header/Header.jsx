import React from "react";
import { Link, useNavigation } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <nav className="font-bold text-1xl">
      <ul className="flex gap-20">
        <li>
          <ActiveLink to="/">Home</ActiveLink>
        </li>

        <li>
          <ActiveLink to="/about">about</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/contact">Contact</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/friends">Friends</ActiveLink>
        </li>
      </ul>
      {/* <ul className="flex gap-20">
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          {" "}
          <Link to="/service">Service</Link>
        </li>
        <li>
          {" "}
          <Link to="/friends">Friends</Link>
        </li>
      </ul> */}
    </nav>
  );
};

export default Header;
