import React from 'react';
import classes from './ProjectDetail.module.scss';
import ImageGallery from '../ImageGallery/ImageGallery'; // Импортируем новый компонент

const ProjectDetail = ({ project, onClose }) => {
    return (
        <div className={classes.overlay} onClick={onClose}>
            <div className={classes.detailBox} onClick={(e) => e.stopPropagation()}>
                <button className={classes.closeButton} onClick={onClose}>×</button>
                <div className={classes.detailContent}>
                    <h2>{project.title}</h2>
                    <ImageGallery images={project.imageGalery} /> {/* Используем компонент галереи */}
                    <p>{project.description}</p>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;