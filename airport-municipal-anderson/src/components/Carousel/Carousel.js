import React, { useState, useEffect } from 'react';
import classes from './Carousel.module.css';

const Carousel = ({ images, interval = 500 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={classes['carousel-container']}>
      <div
        className="carousel-slide"
        // style={{ transform: `translateX(-${sittingImage * 100}%)` }}
      >
        <img key={currentImageIndex} src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
       
      </div>
    </div>
  )
};

export default Carousel;