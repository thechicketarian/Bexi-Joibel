import React from "react"; 
import {Link } from "react-router-dom"

function Footer() {
  return (
    <footer> made by bexi 
          <a href="https://github.com/thechicketarian/React-Porftolio" rel="noopener noreferrer" target="_blank">My link</a>
          <Link to ="projects"> Portfolio </Link>
          <Link to ="resume"> Resume </Link>
          <Link to ="contact">Contact </Link>
    </footer>
  );
}

export default Footer;
