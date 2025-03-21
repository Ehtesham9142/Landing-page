// src/components/ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted');
  };

  return (
    
    
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Submit your information</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        
        type="text"
        name="Coarse Name"
        placeholder="Enter your coarse name"
        
        value={formData.name}
        onChange={handleChange}

      />
      

      <input
        type="tel"
        name="Mobile-Number"
        placeholder="Your Mobile Number"
        required pattern="[0-9]{10}"
        value={formData.number}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
