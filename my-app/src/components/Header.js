import React from "react";
import {Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import logo from '../images/bjlogo.svg'
import ResumeFile from "../images/BexiResume.pdf";

function Header() {

    //hides header on the homepage
    const { pathname } = useLocation();
    console.log(pathname);
    if (pathname === "/" ) return null;

  return (
    <nav className="container nav">
        {/* <div className="logo"> <Link to ="/"> <span role="img" aria-label="hen">🐔</span> Bexi Joibel </Link> </div> */}
        <div className="logo"> <Link to ="/">   <img className="bjlogo"src={logo} alt="bexi"/></Link> </div>
      
        <div className="navLinks">
          <Link to ="about"> About</Link>
          {/* <Link to ="design">Design</Link> */}
          {/* <Link to ="dev">Dev</Link> */}
          {/* <Link to ="resume">Resume</Link> */}
          <a className = "resumeDownload" href={ResumeFile}  target="_blank" rel="noopener noreferrer"> Resume</a>
          {/* <Link to ="contact">Contact</Link> */}
        </div>
    </nav>
  );
}

export default Header;
