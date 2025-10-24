// components/button.jsx
import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-500',
    secondary: 'bg-amber-50 hover:bg-amber-100 text-gray-800 border-2 border-gray-800 focus:ring-amber-300',
    success: 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
    custom: '' // No default styling, allows full customization
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses} 
        ${variantClasses[variant] || variantClasses.primary} 
        ${disabled ? disabledClasses : ''} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
