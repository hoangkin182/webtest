import React from 'react';
import { Section, Container, Button } from './ui';

const Hero = () => {
  return (
    <Section id="home" padding="xl" background="gradient" className="pt-32">
      <Container>
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in-up">
            Chào mừng đến với
            <span className="text-gradient"> Website</span>
          </h1>
          <p className="hero-subtitle animate-fade-in-up">
            Đây là một trang web cơ bản được tạo bằng React và Tailwind CSS. 
            Thiết kế hiện đại và responsive cho mọi thiết bị.
          </p>
          <div className="btn-group animate-fade-in-up">
            <Button variant="primary" size="lg" className="hover-lift">
              Bắt đầu ngay
            </Button>
            <Button variant="secondary" size="lg" className="hover-lift">
              Tìm hiểu thêm
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero; 