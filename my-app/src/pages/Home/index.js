import React from "react"; 
import {Link } from "react-router-dom"
import '../../pages/Home/home.css'
import backgroundVideoHomePg from '../../images/header.mp4';

function Home(){
    return(
        <main> 
        <div className="video-container"> 

        </div>
        <div className="container"> 
        <video className="homepageVideo" autoPlay muted loop> <source src={backgroundVideoHomePg} type="video/mp4"/> </video> 

        <div className="hp-main-container"> 
        <h1> Bexi Joibel<span className="aka-span"> aka</span></h1> <h2 className="h2-home"> the chicketarian </h2>
        <div className="hp-menu"> 
        <Link to ="about"> About </Link>
        <Link to ="design"> Design </Link>
        <Link to ="development"> Dev </Link>
        <p> why the chicketarian? </p>
        </div>
        </div>
        
        </div>
        </main>
    )
}

export default Home; 