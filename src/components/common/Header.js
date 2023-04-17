import { Menu } from "@mui/icons-material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navlink } from "../data/dummydata";
import logo from "../data/images/logo.png";

export default function Header() {
  const [responsive, setResponsive] = useState(false);
  return (
    <header>
      <div className="container flexsb">
        <div className="logo">
          <img src={logo} />
        </div>

        <div className={responsive ? "hideMenu" : "nav"}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <button className="toggle" onClick={() => setResponsive(!responsive)}>
          <Menu className="icon"></Menu>
        </button>
      </div>
    </header>
  );
}
