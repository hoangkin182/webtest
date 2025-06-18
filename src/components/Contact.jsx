import React from 'react';
import { Section, Container } from './ui';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <Section id="contact" background="white">
      <Container size="md">
        <div className="section-header">
          <h2 className="section-title">
            Liên hệ với chúng tôi
          </h2>
          <p className="section-subtitle">
            Hãy để lại thông tin để chúng tôi có thể hỗ trợ bạn
          </p>
        </div>
        <ContactForm />
      </Container>
    </Section>
  );
};

export default Contact; 