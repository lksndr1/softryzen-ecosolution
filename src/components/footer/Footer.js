import React from 'react';
import './footer.css';
import { ReactComponent as Logo } from '../../img/logo.svg';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer>
            <div className="container">
                <div className="footer-wrapper">
                    <div className="logo-socials">
                        <div className="logo-topbth-wrapper">
                            <div className="footer-logo">
                                <Logo className="footer-logo-img" />
                            </div>
                            <button className="to-top-btn" onClick={scrollToTop}>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="32" width="32" height="32" rx="16" transform="rotate(-90 0 32)" fill="#97D28B" />
                                    <path d="M11.9531 14.3799L15.9998 10.3332L20.0465 14.3799" stroke="#173D33" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16 21.6667L16 10.4467" stroke="#173D33" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>    
                        </div>
                        <div className="footer-socials">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 9.3V12.2H16.6C16.8 12.2 16.9 12.4 16.9 12.6L16.5 14.5C16.5 14.6 16.3 14.7 16.2 14.7H14V22H11V14.8H9.3C9.1 14.8 9 14.7 9 14.5V12.6C9 12.4 9.1 12.3 9.3 12.3H11V9C11 7.3 12.3 6 14 6H16.7C16.9 6 17 6.1 17 6.3V8.7C17 8.9 16.9 9 16.7 9H14.3C14.1 9 14 9.1 14 9.3Z" fill="#173D33" />
                                    <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="#173D33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#173D33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="#173D33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17.6361 7H17.6477" stroke="#173D33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="footer-text">
                        <div className="footer-address">
                            <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
                        </div>
                        <div className="footer-email-copyrights">
                            <div className="footer-email">
                                <p>office@ecosolution.com</p>
                            </div>
                            <div className="footer-copyrights">
                                <p>ecosolution © 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;