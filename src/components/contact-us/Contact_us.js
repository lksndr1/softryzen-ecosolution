import './contact-us.css';
import React, { useState } from 'react';
import { ReactComponent as SendBtn } from '../../img/send-btn.svg';

const Contact_us = () => {
  // Initialization state form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Changing data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Form validation
  const validate = () => {
    let tempErrors = {};
    if (!formData.name) {
      tempErrors.name = 'Wrong Fullname';
    } else if (/[^a-zA-Z\s]/.test(formData.name)) {
      tempErrors.name = 'Wrong Fullname';
    }

    if (!formData.email) {
      tempErrors.email = 'Wrong Email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Wrong Email';
    }

    // phone validation, only 12 digit. can be improved
    if (!formData.phone) {
      tempErrors.phone = 'Wrong Phone';
    } else if (/[^0-9]/.test(formData.phone) || formData.phone.length !== 12) {
      tempErrors.phone = 'Wrong Phone';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Form submit handling
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit imitation
      console.log('Form submitted:', formData);
      setSubmitted(true);
      // Form reset after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <section id="contact-us" className="contact-us">
      <div className="container">
        <h2 className="contact-us-heading">Contact us</h2>
        <div className="contacts-form-wrapper">
            <div className="contacts">
                <div className="contacts-type">
                    <p>Phone:</p>
                        <div className="img-value double-value">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="#173D33" stroke-width="1.5" stroke-miterlimit="10"/>
                            </svg>
                            <p>38 (098) 12 34 567</p>
                        </div>
                        <div className="img-value">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="#173D33" stroke-width="1.5" stroke-miterlimit="10"/>
                            </svg>
                            <p>38 (093) 12 34 567</p>
                        </div>
                </div>
                <div className="contacts-type">
                    <p>E-mail:</p>
                    <div className="img-value">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 21H7C4 21 2 19.5 2 16V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V16C22 19.5 20 21 17 21Z" stroke="#173D33" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17 9.5L13.87 12C12.84 12.82 11.15 12.82 10.12 12L7 9.5" stroke="#173D33" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>office@ecosolution.com</p>
                    </div>
                </div>
                <div className="contacts-type">
                    <p>Address:</p>
                    <div className="img-value">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.29004 8.27998V18.01C2.29004 19.91 3.64004 20.69 5.28004 19.75L7.63004 18.41C8.14004 18.12 8.99004 18.09 9.52004 18.36L14.77 20.99C15.3 21.25 16.15 21.23 16.66 20.94L20.99 18.46C21.54 18.14 22 17.36 22 16.72V6.98998C22 5.08998 20.65 4.30998 19.01 5.24998L16.66 6.58998C16.15 6.87998 15.3 6.90998 14.77 6.63998L9.52004 4.01998C8.99004 3.75998 8.14004 3.77998 7.63004 4.06998L3.30004 6.54998C2.74004 6.86998 2.29004 7.64998 2.29004 8.27998Z" stroke="#173D33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.56006 4.5V17.5" stroke="#173D33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.73 7.11914V20.4991" stroke="#173D33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className="contact-address-wrapper">
                            <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
                        </div>    
                    </div>
                </div>
                <div className="contacts-type socials-type">
                    <p>Social Networks:</p>
                    <div className="img-value socials-img">
                      <a href="https://www.facebook.com/">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 9.3V12.2H16.6C16.8 12.2 16.9 12.4 16.9 12.6L16.5 14.5C16.5 14.6 16.3 14.7 16.2 14.7H14V22H11V14.8H9.3C9.1 14.8 9 14.7 9 14.5V12.6C9 12.4 9.1 12.3 9.3 12.3H11V9C11 7.3 12.3 6 14 6H16.7C16.9 6 17 6.1 17 6.3V8.7C17 8.9 16.9 9 16.7 9H14.3C14.1 9 14 9.1 14 9.3Z" fill="#173D33" />
                            <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="#173D33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#173D33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="#173D33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.6361 7H17.6477" stroke="#173D33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </a>    
                    </div>
                </div>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className={`full-name field ${errors.name ? 'error-input' : ''}`}>
                        <label htmlFor="name">* Full name:</label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Rosie"
                        value={formData.name}
                        onChange={handleChange}
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div className={`email field ${errors.email ? 'error-input' : ''}`}>
                        <label htmlFor="email">* E-mail:</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="johnrosie@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className={`phone field ${errors.phone ? 'error-input' : ''}`}>
                        <label htmlFor="phone">* Phone:</label>
                        <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="380961234567"
                        value={formData.phone}
                        onChange={handleChange}
                        />
                        {errors.phone && <span className="error">{errors.phone}</span>}
                    </div>
                    <div className="message field">
                        <label htmlFor="message">Message:</label>
                        <textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="submit-wrapper">
                        <button type="submit">
                            <SendBtn className="send-icon" />
                        </button>
                    </div>
                </form>
                {submitted && <p>Form successfully submitted!</p>}
            </div>
        </div>
      </div>
    </section>
  );
}

export default Contact_us;
