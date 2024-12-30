import React from 'react';
import './ProjectDetail.css';
import {useState} from 'react'

const ProjectDetail = ({ project, onClose }) => {
    const { title, description, images } = project;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="project-detail-overlay">
            <div className="project-detail-modal">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <div className="modal-content">
                    <div className="text-section">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                    <div className="image-section">
                        <button className="arrow-button left-arrow" onClick={handlePreviousImage}>
                            &#8249;
                        </button>
                        <img 
                            src={images[currentImageIndex]} 
                            alt={`${title} image ${currentImageIndex + 1}`} 
                            className="large-image" 
                        />
                        <button className="arrow-button right-arrow" onClick={handleNextImage}>
                            &#8250;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
