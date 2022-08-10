import React from "react";
import {Link } from "react-router-dom"

function Header() {
  return (
    <nav className="nav">
        <div className="logo"> <Link to ="/"> <span role="img" aria-label="hen">🐔</span> The Chicketarian </Link> </div>
        <div className="navLinks">
          <Link to ="/"> About </Link>
          <Link to ="portfolio"> Portfolio </Link>
          <Link to ="resume"> Resume </Link>
          <Link to ="contact">Contact </Link>
        </div>
    </nav>
  );
}

export default Header;
