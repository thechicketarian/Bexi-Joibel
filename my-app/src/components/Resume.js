import React from "react"; 
import ResumeFile from "../images/resume.pdf";

function Resume(){
    return(
        <div className="container"> 
        <h1> Resume </h1>
        <hr className="hr"></hr>
        <a className = "resumeDownload" href={ResumeFile}  download={ResumeFile}>Download Resume</a>
        </div>
    )
}

export default Resume; 