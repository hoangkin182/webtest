import React from 'react';

const Section = ({ 
  children, 
  className = '', 
  padding = 'lg',
  background = 'white',
  id,
  ...props 
}) => {
  const baseClasses = 'w-full';
  
  const paddingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-20',
    xl: 'py-24'
  };
  
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900',
    primary: 'bg-blue-50',
    gradient: 'bg-gradient-to-br from-blue-50 to-indigo-100'
  };
  
  const classes = `${baseClasses} ${paddingClasses[padding]} ${backgroundClasses[background]} ${className}`;
  
  return (
    <section className={classes} id={id} {...props}>
      {children}
    </section>
  );
};

export default Section; 