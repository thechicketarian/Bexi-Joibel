import React from "react";

function Project(props) {
    return(
        <div className="allCards">
            {props.projects.map(project =>(
                <div className="projectCard"  key={project.id}> 
                <span> emoji goes here </span>
                <h3 > {project.title}</h3> 
                <p> {project.description} </p>
                </div>
                
))}
        </div>

    );
}

export default Project;