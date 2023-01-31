import React from "react"; 
// import bexi from "../../images/aboutme.png"
import '../../pages/About/about.css'

function About(){
    return(
        <div className="main">
        <div className="aboutContainer"> 
        {/* <img className="introImg" src={bexi} alt="bexi"/> */}
        <div className="introP"> 
        <h2> about me. </h2> 
        <p>  Buenas, my name is Bexi Joibel, I am a Designer and Front-End Developer originally from Panamá currently living in Houston, Texas. I love to work in all aspects of web development and design, but ultimately obsess over front-end, UI/UX design, illustration and book design.
<br></br> <br></br>
As a designer/dev, I love to learn as I adapt my knowledge to ever evolving industries, whilst establishing my own style. I'm looking forward to joining a team with great opportunities to help enhance my skills, develop my potential, and build amazing applications. When I am not creating, I love to play sports, draw, travel, and get lost in the world of YouTube!  </p>
<div className="box"> <p> <span> thank you for visiting my website :D </span> </p> </div> 
</div>
        </div>

        </div>
    )
}

export default About; 