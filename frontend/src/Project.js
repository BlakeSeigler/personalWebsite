import react from "react"
import "./Project.css"

const Project = ({data}) => {
    // Data will have, project title, description, picture, updated last, and probably an id number
    function project_highlight_window(data) = {
        a ="temp"
    }

    return (
        <html>
            <h2 className="project-name"></h2>
            <p className="project-description"></p>
            <img className="project-image"></img>
            <button onClick={project_highlight_window()}></button>
        </html>
    )
}

export {Project}