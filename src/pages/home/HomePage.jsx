import React from 'react';
import { Section, Container, Button } from '../../components/ui';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import Services from '../../components/Services';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      <Hero />
      <Features />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage; 