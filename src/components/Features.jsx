import React from 'react';
import { Section, Container } from './ui';
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Hiệu suất cao",
      description: "Tối ưu hóa hiệu suất với công nghệ hiện đại",
      bgColor: "bg-blue-100"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Responsive",
      description: "Tương thích hoàn hảo trên mọi thiết bị",
      bgColor: "bg-green-100"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Thân thiện",
      description: "Giao diện đẹp mắt và dễ sử dụng",
      bgColor: "bg-purple-100"
    }
  ];

  return (
    <Section id="about" background="white">
      <Container>
        <div className="section-header">
          <h2 className="section-title">
            Tính năng nổi bật
          </h2>
          <p className="section-subtitle">
            Những điểm mạnh của chúng tôi
          </p>
        </div>
        <div className="grid-features">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              bgColor={feature.bgColor}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Features; 