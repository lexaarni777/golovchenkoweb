import React, { useState } from 'react';
import classes from './ImageGallery.module.scss';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const ImageGallery = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className={classes.gallery}>
            <div className={classes.galleryGoriz}>
                <button className={classes.navButton} onClick={prevImage}>
                    <IoIosArrowBack />
                </button>
                <div className={classes.imageContainer}>
                    <img src={images[currentIndex]} alt={`Project image ${currentIndex}`} className={classes.currentImage} />
                </div>
                <button className={classes.navButton} onClick={nextImage}>
                    <IoIosArrowForward />
                </button>
            </div>
            <div>
                <div className={classes.pagination}>
                    {images.map((_, index) => (
                    <span key={index} className={`${classes.dot} ${index === currentIndex ? classes.active : ''}`}></span>
                ))}
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;