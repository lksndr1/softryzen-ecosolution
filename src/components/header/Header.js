import React, { useState, useEffect } from 'react';
import logo from '../../img/logo.svg';
import logoHover from '../../img/logo-hover.svg';
import burger from '../../img/burger.svg';
import burgerHover from '../../img/burger-hover.svg';
import getInT from '../../img/get-in-t.svg';
import getInTHover from '../../img/get-in-t-hover.svg';
import './header.css';
import './burger-menu.css';

const Header = () => {

    // Burger-menu
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };


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
        <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
            <div className="container">
                <div className="header-row">
                    <div className="logo">
                        <img src={logo} alt="Logo" className="header-logo" />
                        <img src={logoHover} alt="Logo Hover" className="header-logo-hover" />
                    </div>
                    <div className="header-menu">
                        <div className="burger-wrapper" onClick={toggleMenu}>
                            <img src={burger} alt="burger icon" className="burger-icon" />
                            <img src={burgerHover} alt="burger icon" className="burger-icon-hover" />
                        </div>
                        <div className="getInTouch-wrapper">
                            <img src={getInT} alt="Get In Touch" className="getInTouch" />
                            <img src={getInTHover} alt="Get In Touch" className="getInTouch-hover" />
                        </div>
                    </div>
                </div>


        {/* Menu list for burger-menu */}
                {menuOpen && (
                    <div className="dropdown-menu">
                        <button className="close-menu" onClick={closeMenu}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.8335 5.83331L14.1668 14.1666M5.8335 14.1666L14.1668 5.83331" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>close</span>
                        </button>
                        <div className="menu-line"></div>
                        <ul>
                            <li>
                                <span>Main</span>
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.28418 3.49219L11.007 3.49219L11.007 9.21504" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2.99365 11.5061L10.9274 3.57237" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </li>
                            <li>
                                <span>About</span>
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.28418 3.49219L11.007 3.49219L11.007 9.21504" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2.99365 11.5061L10.9274 3.57237" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </li>
                            <li>
                                <span>Cases</span>
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.28418 3.49219L11.007 3.49219L11.007 9.21504" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2.99365 11.5061L10.9274 3.57237" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </li>
                            <li>
                                <span>FAQ</span>
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.28418 3.49219L11.007 3.49219L11.007 9.21504" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2.99365 11.5061L10.9274 3.57237" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </li>
                            <li>
                                <span>Contact Us</span>
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.28418 3.49219L11.007 3.49219L11.007 9.21504" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2.99365 11.5061L10.9274 3.57237" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </li>
                        </ul>
                        <div className="menu-socials">
                            <div className="facebook">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 9.3V12.2H16.6C16.8 12.2 16.9 12.4 16.9 12.6L16.5 14.5C16.5 14.6 16.3 14.7 16.2 14.7H14V22H11V14.8H9.3C9.1 14.8 9 14.7 9 14.5V12.6C9 12.4 9.1 12.3 9.3 12.3H11V9C11 7.3 12.3 6 14 6H16.7C16.9 6 17 6.1 17 6.3V8.7C17 8.9 16.9 9 16.7 9H14.3C14.1 9 14 9.1 14 9.3Z" fill="white" />
                                    <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className="instagram">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17.6361 7H17.6477" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        
                    </div>
                )}
            </div>
        </header>
    );
}
 
export default Header;