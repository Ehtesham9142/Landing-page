// src/components/ServiceCards.js
import React from 'react';
import './ServiceCard.css';

const services = [
  { title: 'Service 1', description: 'Full stack development using mern' },
  { title: 'Service 2', description: 'APP development' },
  { title: 'Service 3', description: 'DSA' },
];

const ServiceCard = () => {
  return (
    <div className="service-cards">
      {services.map((service, index) => (
        <div className="card" key={index}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;