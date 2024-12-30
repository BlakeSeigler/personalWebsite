import react from "react"
import "./Project.css"

export const Project = ({ title, image, onClick }) => {
    return (
        <div className="project" onClick={onClick}>
            <h3 className="project-title">{title}</h3>
            <img src={image} alt={`${title} thumbnail`} className="project-image" />
        </div>
    );
};
