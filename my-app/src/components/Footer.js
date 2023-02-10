import React from "react"; 
// import {Link} from "react-router-dom"
import ResumeFile from "../images/BexiResume.pdf";
// import { useLocation } from "react-router-dom";

function Footer() {
  
  //hides footer on the homepage
  // const { pathname } = useLocation();
  // console.log(pathname);
  // if (pathname === "/" ) return null;
  
  return (
    <footer>
      <h4> est. 2023 Bexi Joibel Creative</h4>
          <a href="https://github.com/thechicketarian/React-Porftolio" rel="noopener noreferrer" target="_blank"> GitHub</a>
          {/* <Link to ="portfolio"> Portfolio </Link> */}
          {/* <Link to ="resume"> Resume </Link> */}
          <a className = "resumeDownload" href={ResumeFile}  download={ResumeFile} >Download Resume</a>
          <a href="mailto:bexijoibel@gmail.com">Contact </a>
    </footer>
  );
}

export default Footer;
