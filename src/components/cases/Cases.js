import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import './cases.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from '../../img/slide-1.png';
import slide2 from '../../img/slide-2.png';
import slide3 from '../../img/slide-3.png';
import slide4 from '../../img/slide-4.png';
import slide5 from '../../img/slide-5.png';

const Cases = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index) => setCurrentSlide(index)
    };

    const images = [slide1, slide2, slide3, slide4, slide5];

    const next = () => {
        sliderRef.current.slickNext();
    };

    const prev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <section className="cases">
            <div className="container">
                <div className="cases-flex-container">
                    <h2 className="cases-heading">Successful cases of our company</h2>
                    <div className="cases-line"></div>
                    <div className="slider-nav">
                        <div className="number-photos">
                            <p>{`${String(currentSlide + 1).padStart(2, '0')}`} <span className="number-photos-grey">/{`${String(images.length).padStart(2, '0')}`}</span></p>
                        </div>
                        <div className="arrows">
                            <div className="arrow-left" onClick={prev}>
                                <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="-0.5" y="0.5" width="83" height="83" rx="41.5" transform="matrix(-1 0 0 1 83 0)" stroke="#173D33"/>
                                    <path d="M38.3543 32.8935L29.2493 41.9985L38.3543 51.1035" stroke="#173D33" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M54.7491 41.9989H29.5041" stroke="#173D33" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className="arrow-right" onClick={next}>
                                <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)">
                                    <rect x="-0.5" y="0.5" width="83" height="83" rx="41.5" transform="matrix(-1 0 0 1 83 0)" stroke="#173D33"/>
                                    <path d="M38.3543 32.8935L29.2493 41.9985L38.3543 51.1035" stroke="#173D33" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M54.7491 41.9989H29.5041" stroke="#173D33" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-img">
                    <Slider ref={sliderRef} {...settings}>
                        {images.map((img, index) => (
                            <div key={index}>
                                <img src={img} alt={`Case ${index + 1}`} className="slider-img" />
                                <div className="slide-description">
                                    <div className="slide-address-arrow">
                                        <div className="slide-address">
                                            <p>Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”</p>
                                        </div>
                                        <div className="slide-arrow">
                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="60" height="60" rx="30" fill="#97D28B" />
                                                <path d="M26.9976 22.9867L37.0125 22.9867L37.0125 33.0017" stroke="#173D33" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M22.9888 37.0109L36.8728 23.1269" stroke="#173D33" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="slider-line"></div>
                                    <div className="slide-type-date">
                                        <div className="slide-type">
                                            <p>Wind Power for auto field irrigation</p>
                                        </div>
                                        <div className="slide-date">
                                            <p>July 2023</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Cases;
