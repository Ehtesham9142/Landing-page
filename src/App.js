// src/App.js

import React from 'react';
import HeroSection from './components/HeroSection';
import ServiceCard from './components/ServiceCard';
import PricingTable from './components/PricingTable';
import ContactForm from './components/ContactForm';
import UserSearch from './components/UserSearch';
import './styles/App.css';

function App() {
  return (
    <div className="App">

      <HeroSection />
      <ServiceCard />
      <PricingTable />
      <UserSearch />
      <ContactForm />
    </div>
  );
}

export default App;