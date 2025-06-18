import React from 'react';
import { Card } from './ui';

const FeatureCard = ({ icon, title, description, bgColor }) => {
  return (
    <Card className="text-center hover hover-lift">
      <div className={`feature-icon ${bgColor}`}>
        {icon}
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </Card>
  );
};

export default FeatureCard; 