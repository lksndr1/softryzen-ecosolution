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
            <p>skajvkjfekfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</p>
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
              <button type="submit">Submit</button>
            </form>
            {submitted && <p>Form successfully submitted!</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact_us;
