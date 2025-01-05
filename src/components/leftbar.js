import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav-ul">
        <li className="nav-li">
          <Link className="nav" to="./home">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav" to="./projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="nav" to="./skillset">
            SkillSet
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
