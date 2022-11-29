import React from "react"; 
import Project from "./project";

const projects = [
    {
        id: 0,
        emoji: "💻",
        title: "Tech Blog",
        description: "Application using the model-view-controller model blogging appliction",
        repo:"https://github.com/thechicketarian/Tech-Blog",
        live:" https://thawing-reaches-82099.herokuapp.com/"
    },
    {
        id: 1,
        emoji:"👩🏽‍🎓",
        title: "Bootcampers",
        description: "Interactice Full-Stack Application. Allows you to get/post jobs and resumes",
        repo:"https://github.com/raphson1/groupproject2",
        live: "https://bootcampersut.herokuapp.com/"
    },   {
        id: 2,
        emoji:"🦅",
        title: "Eagle Eye",
        description: "This application pulls data from the National Parks API and Weather API. This allows users to keep an eye on the current weather conditions at each park.",
        repo:"https://github.com/surfinsofia/groupproject1",
        live: "https://surfinsofia.github.io/groupproject1/"
    }
]


function Portfolio(){
    return(
        <div className="container"> 
        <h1> Projects </h1>
        <Project projects={projects}/>
        </div>
    )
}

export default Portfolio; 