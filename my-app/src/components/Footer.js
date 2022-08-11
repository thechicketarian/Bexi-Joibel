import React from "react"; 
import {Link } from "react-router-dom"
import ResumeFile from "../images/resume.pdf";

function Footer() {
  return (
    <footer> made by bexi 
          <a href="https://github.com/thechicketarian/React-Porftolio" rel="noopener noreferrer" target="_blank"> GitHub</a>
          <Link to ="portfolio"> Portfolio </Link>
          {/* <Link to ="resume"> Resume </Link> */}
          <a className = "resumeDownload" href={ResumeFile}  download={ResumeFile} >Download Resume</a>
          <Link to ="contact">Contact </Link>
    </footer>
  );
}

export default Footer;
