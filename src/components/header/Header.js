import React, { useState, useEffect } from 'react';
import { ReactComponent as Logo } from '../../img/logo.svg';
import { ReactComponent as GetInTouch } from '../../img/get-in-t.svg';
import { ReactComponent as MenuArrow } from '../../img/menuArrow.svg';
import { ReactComponent as Burger } from '../../img/burger.svg';
import './header.css';
import './burger-menu.css';

const Header = () => {
    // Burger-menu
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

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

    // Scroll to section by menu, scroll to section contact-us by Get-in-touch
    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (sectionId === 'contact-us') {
            window.scrollTo({
                top: section.offsetTop - 80,
                behavior: 'smooth'
            });
        } else if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        closeMenu();
        setActiveSection(sectionId);
    };

    return (
        <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
            <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
            <div className="container">
                <div className="header-row">
                    <div className="logo">
                        <Logo className="header-logo-img" />
                    </div>
                    <div className="header-menu">
                            <Burger className="burger-icon" onClick={toggleMenu}/>
                        <button onClick={(e) => scrollToSection(e, 'contact-us')}>
                            <GetInTouch className="getInTouch-icon" />
                        </button>
                    </div>
                </div>

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
                            <li className={activeSection === 'main' ? 'active' : ''}>
                                <a href="#main" onClick={(e) => scrollToSection(e, 'main')}>
                                    <span>Main</span>
                                    <MenuArrow className={`menu-arrow ${activeSection === 'main' ? 'active-svg' : ''}`} />
                                </a>
                            </li>
                            <li className={activeSection === 'about' ? 'active' : ''}>
                                <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
                                    <span>About</span>
                                    <MenuArrow className={`menu-arrow ${activeSection === 'about' ? 'active-svg' : ''}`} />
                                </a>
                            </li>
                            <li className={activeSection === 'cases' ? 'active' : ''}>
                                <a href="#cases" onClick={(e) => scrollToSection(e, 'cases')}>
                                    <span>Cases</span>
                                    <MenuArrow className={`menu-arrow ${activeSection === 'cases' ? 'active-svg' : ''}`} />
                                </a>
                            </li>
                            <li className={activeSection === 'faq' ? 'active' : ''}>
                                <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')}>
                                    <span>FAQ</span>
                                    <MenuArrow className={`menu-arrow ${activeSection === 'faq' ? 'active-svg' : ''}`} />
                                </a>
                            </li>
                            <li className={activeSection === 'contact-us' ? 'active' : ''}>
                                <a href="#contact-us" onClick={(e) => scrollToSection(e, 'contact-us')}>
                                    <span>Contact Us</span>
                                    <MenuArrow className={`menu-arrow ${activeSection === 'contact-us' ? 'active-svg' : ''}`} />
                                </a>
                            </li>
                        </ul>
                        <div className="menu-socials">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 9.3V12.2H16.6C16.8 12.2 16.9 12.4 16.9 12.6L16.5 14.5C16.5 14.6 16.3 14.7 16.2 14.7H14V22H11V14.8H9.3C9.1 14.8 9 14.7 9 14.5V12.6C9 12.4 9.1 12.3 9.3 12.3H11V9C11 7.3 12.3 6 14 6H16.7C16.9 6 17 6.1 17 6.3V8.7C17 8.9 16.9 9 16.7 9H14.3C14.1 9 14 9.1 14 9.3Z" fill="white" />
                                    <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17.6361 7H17.6477" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
