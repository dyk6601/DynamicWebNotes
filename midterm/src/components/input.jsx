// components/input.jsx
import React from 'react';

const Input = ({ 
  placeholder, 
  value, 
  onChange, 
  className = '', 
  maxLength,
  ...props 
}) => {
  const baseClasses = 'w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none text-lg';

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      className={`${baseClasses} ${className}`}
      {...props}
    />
  );
};

export default Input;
