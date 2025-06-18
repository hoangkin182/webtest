import React from 'react';
import { Card } from './ui';

const ServiceCard = ({ title, description, onLearnMore }) => {
  return (
    <Card className="service-card hover hover-lift">
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <button 
        onClick={onLearnMore}
        className="service-link"
      >
        Tìm hiểu thêm →
      </button>
    </Card>
  );
};

export default ServiceCard; 