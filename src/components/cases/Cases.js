import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './cases.css';

import slide1 from '../../img/slide-1.png';
import slide2 from '../../img/slide-2.png';
import slide3 from '../../img/slide-3.png';
import slide4 from '../../img/slide-4.png';
import slide5 from '../../img/slide-5.png';

const Cases = () => {
    // Slider-Cards img and Text
    const slides = [
        { img: slide1, slide_address: "Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”", slide_type: "Wind Power for auto field irrigation", slide_date: "July 2023", href: '#first' },
        { img: slide2, slide_address: "Zhytomyr city Private Enterprise “Bosch”", slide_type: "Solar Panels for industrial use", slide_date: "November 2023", href: '#second' },
        { img: slide3, slide_address: "Rivne city Private Enterprise “Biotech”", slide_type: "Thermal modules", slide_date: "October 2023", href: '#third' },
        { img: slide4, slide_address: "Kherson city Private Enterprise “HealthyFarm”", slide_type: "Wind power", slide_date: "September 2021", href: '#fourth' },
        { img: slide5, slide_address: "Zaporizhia city Private Enterprise “Biotech”", slide_type: "Mini nuclear stations", slide_date: "May 2021", href: '#fifth' },
    ];

    // Switched between one or two slides-card on page
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Arrows
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + (isMobile ? 1 : 2)) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - (isMobile ? 1 : 2) + slides.length) % slides.length);
    };

    const handlers = useSwipeable({
        onSwipedLeft: nextSlide,
        onSwipedRight: prevSlide,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <section id="cases" className="cases">
            <div className="container">
                <div className="cases-flex-container">
                    <h2 className="cases-heading">Successful cases of our company</h2>
                    <div className="cases-line"></div>
                    <div className="slider-nav">
                        <div className="number-photos">
                            <p>{String(currentSlide + 1).padStart(2, '0')} <span className="number-photos-grey">/{String(slides.length).padStart(2, '0')}</span></p>
                        </div>
                        <div className="arrows">
                            <button className="arrow-left" onClick={prevSlide}>
                                <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="-0.5" y="0.5" width="83" height="83" rx="41.5" transform="matrix(-1 0 0 1 83 0)" stroke="#173D33"/>
                                    <path d="M38.3543 32.8935L29.2493 41.9985L38.3543 51.1035" stroke="#173D33" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M54.7491 41.9989H29.5041" stroke="#173D33" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <button className="arrow-right" onClick={nextSlide}>
                                <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)">
                                    <rect x="-0.5" y="0.5" width="83" height="83" rx="41.5" transform="matrix(-1 0 0 1 83 0)" stroke="#173D33"/>
                                    <path d="M38.3543 32.8935L29.2493 41.9985L38.3543 51.1035" stroke="#173D33" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M54.7491 41.9989H29.5041" stroke="#173D33" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="slider-container" {...handlers}>
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`slide-card ${index === currentSlide || (!isMobile && index === (currentSlide + 1) % slides.length) ? 'active' : ''}`}
                            style={{ display: index === currentSlide || (!isMobile && index === (currentSlide + 1) % slides.length) ? 'block' : 'none' }}
                        >
                            <img src={slide.img} className="slider-img" alt={`Slide ${index + 1}`} />
                            <div className="slide-description">
                                <div className="slide-address-arrow">
                                    <div className="slide-address">
                                        <p>{slide.slide_address}</p>
                                    </div>
                                    <button className="slide-arrow">
                                        <a href={slide.href} target="_blank" rel="noopener noreferrer">
                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="60" height="60" rx="30" fill="#97D28B" />
                                                <path d="M26.9976 22.9867L37.0125 22.9867L37.0125 33.0017" stroke="#173D33" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M22.9888 37.0109L36.8728 23.1269" stroke="#173D33" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </button>
                                </div>
                                <div className="slider-line"></div>
                                <div className="slide-type-date">
                                    <div className="slide-type">
                                        <p>{slide.slide_type}</p>
                                    </div>
                                    <div className="slide-date">
                                        <p>{slide.slide_date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cases;


<div className="slide-description">
    <div className="slide-address-arrow"></div>
    <div className="slider-line"></div>
    <div className="slide-type-date"></div>
</div>