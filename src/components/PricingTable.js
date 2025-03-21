// src/components/PricingTable.js
import React from 'react';
import './PricingTable.css';

const PricingTable = () => {
  return (
    <div className="pricing-table">
      <div className="pricing-card">
        <h3>Full stack development</h3>
        <p>16,000/only.</p>
      </div>
      <div className="pricing-card">
        <h3>APP Development</h3>
        <p>25,000/only.</p>
      </div>
      <div className="pricing-card">
        <h3>DSA</h3>
        <p>6,000/only.</p>
      </div>
    </div>
  );
};

export default PricingTable;