import React from "react";
import {Link } from "react-router-dom"
import { useLocation } from "react-router-dom";

function Header() {

    //hides header on the homepage
    const { pathname } = useLocation();
    console.log(pathname);
    if (pathname === "/" ) return null;

  return (
    <nav className="container nav">
        {/* <div className="logo"> <Link to ="/"> <span role="img" aria-label="hen">🐔</span> Bexi Joibel </Link> </div> */}
        <div className="logo"> <Link to ="/"> bCdD </Link> </div>
        <div className="navLinks">
          <Link to ="about"> About</Link>
          <Link to ="design">Design</Link>
          <Link to ="development">Dev</Link>
          <Link to ="resume">Resume</Link>
          <Link to ="contact">Contact</Link>
        </div>
    </nav>
  );
}

export default Header;
