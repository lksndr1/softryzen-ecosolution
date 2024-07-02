import React, { useEffect } from 'react';
import logo from '../../img/logo.svg';
import logoHover from '../../img/logo-hover.svg';
import burger from '../../img/burger.svg';
import burgerHover from '../../img/burger-hover.svg';
import getInT from '../../img/get-in-t.svg';
import getInTHover from '../../img/get-in-t-hover.svg';
import './header.css';

const Header = () => {

    // Changed header colour on scroll;
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 0) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <div className="container">
                <div className="header-row">
                    <div className="logo">
                        <img src={logo} alt="Logo" className="header-logo" />
                        <img src={logoHover} alt="Logo Hover" className="header-logo-hover" />
                    </div>
                    <div className="header-menu">
                        <div className="burger-wrapper">
                            <img src={burger} alt="burger icon" className="burger-icon" />
                            <img src={burgerHover} alt="burger icon" className="burger-icon-hover" />
                        </div>
                        <div className="getInTouch-wrapper">
                            <img src={getInT} alt="Get In Touch" className="getInTouch" />
                            <img src={getInTHover} alt="Get In Touch" className="getInTouch-hover" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;