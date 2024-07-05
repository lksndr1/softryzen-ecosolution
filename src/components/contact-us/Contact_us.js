import './contact-us.css';
import React, { useState } from 'react';

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
    <section className="contact-us">
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
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 9.3V12.2H16.6C16.8 12.2 16.9 12.4 16.9 12.6L16.5 14.5C16.5 14.6 16.3 14.7 16.2 14.7H14V22H11V14.8H9.3C9.1 14.8 9 14.7 9 14.5V12.6C9 12.4 9.1 12.3 9.3 12.3H11V9C11 7.3 12.3 6 14 6H16.7C16.9 6 17 6.1 17 6.3V8.7C17 8.9 16.9 9 16.7 9H14.3C14.1 9 14 9.1 14 9.3Z" fill="#173D33" />
                            <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="#173D33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#173D33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="#173D33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.6361 7H17.6477" stroke="#173D33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>    
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
                            <svg width="99" height="39" viewBox="0 0 99 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="98" height="38" rx="19" stroke="#97D28B"/>
                                <path d="M20.32 13.284C21.056 13.284 21.6853 13.3907 22.208 13.604C22.7307 13.8067 23.2373 14.1267 23.728 14.564L22.896 15.492C22.48 15.1613 22.0693 14.9213 21.664 14.772C21.2693 14.612 20.8427 14.532 20.384 14.532C19.808 14.532 19.3333 14.6653 18.96 14.932C18.5867 15.1987 18.4 15.588 18.4 16.1C18.4 16.42 18.464 16.692 18.592 16.916C18.72 17.1293 18.9547 17.3267 19.296 17.508C19.648 17.6893 20.1547 17.8813 20.816 18.084C21.5093 18.2973 22.0853 18.5267 22.544 18.772C23.0027 19.0173 23.3707 19.3587 23.648 19.796C23.936 20.2227 24.08 20.7667 24.08 21.428C24.08 22.068 23.92 22.6333 23.6 23.124C23.2907 23.6147 22.8373 23.9987 22.24 24.276C21.6533 24.5533 20.9547 24.692 20.144 24.692C18.6187 24.692 17.3707 24.2173 16.4 23.268L17.232 22.34C17.68 22.7027 18.1333 22.98 18.592 23.172C19.0507 23.3533 19.5627 23.444 20.128 23.444C20.8107 23.444 21.376 23.2787 21.824 22.948C22.272 22.6067 22.496 22.116 22.496 21.476C22.496 21.1133 22.4267 20.8147 22.288 20.58C22.1493 20.3347 21.9093 20.116 21.568 19.924C21.2373 19.732 20.752 19.54 20.112 19.348C18.9813 19.0067 18.1547 18.596 17.632 18.116C17.1093 17.636 16.848 16.9853 16.848 16.164C16.848 15.6093 16.992 15.1133 17.28 14.676C17.5787 14.2387 17.9893 13.8973 18.512 13.652C19.0453 13.4067 19.648 13.284 20.32 13.284ZM31.9668 20.036C31.9668 20.2813 31.9561 20.532 31.9348 20.788H26.5587C26.6227 21.716 26.8574 22.3987 27.2627 22.836C27.6681 23.2733 28.1907 23.492 28.8307 23.492C29.2361 23.492 29.6094 23.4333 29.9507 23.316C30.2921 23.1987 30.6494 23.012 31.0227 22.756L31.6628 23.636C30.7668 24.34 29.7854 24.692 28.7188 24.692C27.5454 24.692 26.6281 24.308 25.9667 23.54C25.3161 22.772 24.9907 21.716 24.9907 20.372C24.9907 19.4973 25.1294 18.724 25.4067 18.052C25.6947 17.3693 26.1001 16.836 26.6227 16.452C27.1561 16.068 27.7801 15.876 28.4948 15.876C29.6147 15.876 30.4734 16.244 31.0707 16.98C31.6681 17.716 31.9668 18.7347 31.9668 20.036ZM30.5107 19.604C30.5107 18.772 30.3454 18.1373 30.0148 17.7C29.6841 17.2627 29.1881 17.044 28.5268 17.044C27.3214 17.044 26.6654 17.9293 26.5587 19.7H30.5107V19.604ZM37.6455 15.876C38.4135 15.876 39.0108 16.1053 39.4375 16.564C39.8748 17.0227 40.0935 17.652 40.0935 18.452V24.5H38.6215V18.66C38.6215 18.0627 38.5095 17.6413 38.2855 17.396C38.0615 17.1507 37.7308 17.028 37.2935 17.028C36.8455 17.028 36.4508 17.156 36.1095 17.412C35.7682 17.668 35.4482 18.036 35.1495 18.516V24.5H33.6775V16.068H34.9415L35.0695 17.316C35.3682 16.868 35.7362 16.516 36.1735 16.26C36.6215 16.004 37.1122 15.876 37.6455 15.876ZM48.9405 12.676V24.5H47.6445L47.5005 23.332C47.2232 23.7587 46.8765 24.0947 46.4605 24.34C46.0445 24.5747 45.5805 24.692 45.0685 24.692C44.0658 24.692 43.2818 24.2973 42.7165 23.508C42.1618 22.7187 41.8845 21.6573 41.8845 20.324C41.8845 19.46 42.0178 18.692 42.2845 18.02C42.5512 17.348 42.9352 16.8253 43.4365 16.452C43.9378 16.068 44.5245 15.876 45.1965 15.876C46.0605 15.876 46.8178 16.2227 47.4685 16.916V12.5L48.9405 12.676ZM45.3885 23.524C45.8365 23.524 46.2205 23.4227 46.5405 23.22C46.8605 23.0067 47.1698 22.692 47.4685 22.276V18.148C47.1912 17.7853 46.8925 17.5133 46.5725 17.332C46.2632 17.14 45.9112 17.044 45.5165 17.044C44.8658 17.044 44.3592 17.316 43.9965 17.86C43.6445 18.404 43.4685 19.2147 43.4685 20.292C43.4685 21.38 43.6338 22.1907 43.9645 22.724C44.2952 23.2573 44.7698 23.524 45.3885 23.524Z" fill="#173D33"/>
                                <rect x="63" y="3.5" width="32" height="32" rx="16" fill="#97D28B"/>
                                <path d="M80.62 15.4531L84.6667 19.4998L80.62 23.5465" stroke="#173D33" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M73.3333 19.5H84.5533" stroke="#173D33" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
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
