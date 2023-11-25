import React, { useState, useEffect } from 'react';
import bulmaCarousel from 'bulma-carousel';
import './ImageCarousel.module.css';


const ImageCarousel = ({ images, interval }) => {

    bulmaCarousel.attach('#image-carousel', {
        slidesToScroll: 1,
        slidesToShow: 1
    });

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <section className="hero is-medium has-carousel">
            <div className="container">
                <div id='image-carousel' className='hero-carousel' >
                    {images.map((image, index) => (
                        <div key={index} style={{display: index === currentImageIndex ? 'block' : 'none'}}>
                            <img src={image} alt='carousel images'/>
                        </div>
                    ))}
                </div>
                <div className="hero-head"></div>
                <div className="hero-body"></div>
                <div className="hero-foot"></div>
            </div>
        </section>
    )
};

export default ImageCarousel;