import React from 'react';
import { Section, Container } from './ui';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      title: "Thiết kế Web",
      description: "Tạo ra những website đẹp mắt và chuyên nghiệp"
    },
    {
      title: "Phát triển App",
      description: "Xây dựng ứng dụng di động hiện đại"
    },
    {
      title: "Tư vấn IT",
      description: "Tư vấn giải pháp công nghệ tối ưu"
    }
  ];

  const handleLearnMore = (serviceTitle) => {
    alert(`Bạn đã click vào dịch vụ: ${serviceTitle}`);
  };

  return (
    <Section id="services" background="gray">
      <Container>
        <div className="section-header">
          <h2 className="section-title">
            Dịch vụ của chúng tôi
          </h2>
          <p className="section-subtitle">
            Những gì chúng tôi có thể làm cho bạn
          </p>
        </div>
        <div className="grid-responsive">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              onLearnMore={() => handleLearnMore(service.title)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Services; 