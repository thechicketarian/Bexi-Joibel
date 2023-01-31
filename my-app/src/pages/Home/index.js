import React from "react"; 
import {Link } from "react-router-dom"
import '../../pages/Home/home.css'
import backgroundVideoHomePg from '../../images/header.mp4';
import designImg from '../../images/vidthumb.jpg'
import devImg from '../../images/gymRats.jpg'
import artImg from '../../images/artImg.jpg'

function Home(){
    return(
        <main> 
        <div className="homecontainer" > 
        <p> bexijoibel.com </p>
        <hr></hr>
        <p className="splinterQuote"> <span> "We choose what holds us back and moves us forward" - master splinter </span> </p>
        <video className="homepageVideo" autoPlay muted loop> <source src={backgroundVideoHomePg} type="video/mp4"/> </video>
        </div>
        
        <h1 className="homeH1"> artist. designer. developer.  </h1>
        <div className="hp-menu"> 
        <Link to ="development"> hey, i coded this && collabed with that</Link>
        <hr></hr>
        <Link to ="about"> all about me</Link> 
        <hr></hr>
        <Link to="design"> all kind of designs </Link> 
        </div>
        
        <div className="boxes"> 

        <div> <h2> explore. </h2> <span> Proudly designing since 2016, coding fluently since 2021, and happily creating since 94.</span> from my heart, Bexi Joibel C. </div>


        <div>
        <span className="spanImgTitle"> Idle Hands // 2012 </span>
        <img className="artImg" src={artImg}></img>
            <p> <Link to="design"> my first love & my roots ---  visit the ARTchive </Link> </p>
            </div>


            <div className="designPic"> 
            <span className="spanImgTitle"> 1970s Abecedarium // 2016 </span> 
            <img className="designImg" src={designImg}></img>
            <p>  my passion, design --- view all </p> 
            </div>


            <div>    
            <span className="spanImgTitle">  Gym Ratz // 2022  </span>
                <img className="devImg" src={devImg}></img>
            <p> my new obsession, development --- click away</p>
            </div>



        </div>
        </main>
        
    )
}

export default Home; 