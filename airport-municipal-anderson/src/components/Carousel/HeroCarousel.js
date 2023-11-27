import React, { useEffect, useState } from 'react';
import 'bulma-carousel';
import customStyles from './HeroCarousel.module.css';


const HeroCarousel = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        const newIndex = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newIndex);
    };

    const prevSlide = () => {
        const newIndex = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
        setCurrentSlide(newIndex);
    };

    useEffect(() => {
        if (window.bulmaCarousel) {
            window.bulmaCarousel.attach('#image-carousel', {
                slidesToScroll: 1,
                slidesToShow: 1
            });
        } else {
            console.error('bulmaCarousel is not defined');
        }
    }, []);

    return (
        <section className="hero is-medium has-carousel">
            <div className="container">
                <div id="image-carousel"  className="hero-carousel">
                    <figure className={`image ${customStyles['is-512x512']}`}> 
                        <img src={images[currentSlide]} alt={`Airshow Slide ${currentSlide + 1}`} />
                    </figure>
                </div>
            </div>
            <button
                className={`${customStyles.carouselButton} ${customStyles.carouselButtonLeft}`}
                onClick={prevSlide}
            >
                {'<'}
            </button>
            <button
                className={`${customStyles.carouselButton} ${customStyles.carouselButtonRight}`}
                onClick={nextSlide}
            >
                {'>'}
            </button>
            {/* <div className="hero-head"></div>
            <div className="hero-body"></div>
            <div className="hero-foot"></div> */}
        </section>
    );
};

export default HeroCarousel;