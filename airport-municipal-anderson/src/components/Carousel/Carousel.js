import React, { useState, useEffect } from 'react';
import classes from './Carousel.module.css';

const Carousel = ({ images, interval = 3000 }) => {
  const [sittingImage, setSittingImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSittingImage(prevIndex => (prevIndex + 1) % images.length);
    }, interval);
  
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={classes['carousel-container']}>
      <div
        className="carousel-slide"
        style={{ transform: `translateX(-${sittingImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} />
        ))}
      </div>
    </div>
  )
};

export default Carousel;