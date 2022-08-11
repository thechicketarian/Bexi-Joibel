import React from "react";

function Project(props) {
    return(
        <div className="allCards">
            {props.projects.map(project =>(
                <div className="projectCard"  key={project.id}> 
                <div className="projectEmoji"> <span role="img" aria-label="computer"> {project.emoji}</span> </div>
                <h3 > {project.title}</h3> 
                <p> {project.description} </p>
                <hr className="hr"></hr>
                <p className="pLinks"> <a href={project.repo} target="_blank" rel="noopener noreferrer"> Github Repo </a> <a href={project.live} target="_blank" rel="noopener noreferrer"> live website </a></p>
                </div>
                
))}
        </div>

    );
}

export default Project;