import React, { useState } from 'react';
import { Input, Textarea, Button } from './ui';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Vui lòng nhập họ và tên';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Vui lòng nhập tiêu đề';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Vui lòng nhập nội dung tin nhắn';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-group">
      <div className="form-row">
        <Input
          label="Họ và tên"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nhập họ và tên"
          error={errors.name}
          required
        />
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Nhập email"
          error={errors.email}
          required
        />
      </div>
      <Input
        label="Tiêu đề"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Nhập tiêu đề"
        error={errors.subject}
        required
      />
      <Textarea
        label="Nội dung"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Nhập nội dung tin nhắn"
        error={errors.message}
        required
      />
      <div className="form-actions">
        <Button 
          type="submit"
          variant="primary"
          size="lg"
          className="hover-lift"
        >
          Gửi tin nhắn
        </Button>
      </div>
    </form>
  );
};

export default ContactForm; 