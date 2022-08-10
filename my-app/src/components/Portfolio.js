import React from "react"; 
import Project from "./Project";

const projects = [
    {
        id: 0,
        title: "Tech Blog",
        description: "Create an account and add blog posts!"
    },
    {
        id: 1,
        title: "Bootcampers",
        description: "Create an account and add review bootcamp graduates"
    },    {
        id: 2,
        title: "Weather App",
        description: "Create an account and add blog posts!"
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