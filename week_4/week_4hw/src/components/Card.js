import React from 'react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

// Main Card component
const Card = ({ 
  children, 
  className, 
  variant = 'default',
  shadow = 'md',
  hover = false,
  ...props 
}) => {
  const baseClasses = 'rounded-lg border bg-white overflow-hidden';
  
  const variantClasses = {
    default: 'border-gray-200',
    primary: 'border-blue-200 bg-blue-50',
    success: 'border-green-200 bg-green-50',
    warning: 'border-yellow-200 bg-yellow-50',
    danger: 'border-red-200 bg-red-50',
    dark: 'border-gray-800 bg-gray-900 text-white'
  };
  
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  };
  
  const hoverClasses = hover ? 'hover:shadow-lg transition-shadow duration-200 cursor-pointer' : '';
  
  const cardClasses = twMerge(
    classNames(
      baseClasses,
      variantClasses[variant],
      shadowClasses[shadow],
      hoverClasses,
      className
    )
  );

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

// Card Header component
const CardHeader = ({ 
  children, 
  className,
  variant = 'default',
  ...props 
}) => {
  const baseClasses = 'px-6 py-4 border-b';
  
  const variantClasses = {
    default: 'border-gray-200 bg-gray-50',
    primary: 'border-blue-200 bg-blue-100',
    success: 'border-green-200 bg-green-100',
    warning: 'border-yellow-200 bg-yellow-100',
    danger: 'border-red-200 bg-red-100',
    dark: 'border-gray-700 bg-gray-800'
  };

  const headerClasses = twMerge(
    classNames(
      baseClasses,
      variantClasses[variant],
      className
    )
  );

  return (
    <div className={headerClasses} {...props}>
      {children}
    </div>
  );
};

// Card Body component
const CardBody = ({ 
  children, 
  className,
  padding = 'default',
  ...props 
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8'
  };

  const bodyClasses = twMerge(
    classNames(
      paddingClasses[padding],
      className
    )
  );

  return (
    <div className={bodyClasses} {...props}>
      {children}
    </div>
  );
};

// Card Footer component
const CardFooter = ({ 
  children, 
  className,
  variant = 'default',
  ...props 
}) => {
  const baseClasses = 'px-6 py-4 border-t';
  
  const variantClasses = {
    default: 'border-gray-200 bg-gray-50',
    primary: 'border-blue-200 bg-blue-100',
    success: 'border-green-200 bg-green-100',
    warning: 'border-yellow-200 bg-yellow-100',
    danger: 'border-red-200 bg-red-100',
    dark: 'border-gray-700 bg-gray-800'
  };

  const footerClasses = twMerge(
    classNames(
      baseClasses,
      variantClasses[variant],
      className
    )
  );

  return (
    <div className={footerClasses} {...props}>
      {children}
    </div>
  );
};

// Card Title component
const CardTitle = ({ 
  children, 
  className,
  size = 'lg',
  ...props 
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  const titleClasses = twMerge(
    classNames(
      'font-bold text-gray-900',
      sizeClasses[size],
      className
    )
  );

  return (
    <h3 className={titleClasses} {...props}>
      {children}
    </h3>
  );
};

// Card Text component
const CardText = ({ 
  children, 
  className,
  muted = false,
  ...props 
}) => {
  const textClasses = twMerge(
    classNames(
      'text-gray-600',
      muted && 'text-gray-500 text-sm',
      className
    )
  );

  return (
    <p className={textClasses} {...props}>
      {children}
    </p>
  );
};

// Card Image component
const CardImage = ({ 
  src, 
  alt, 
  className,
  position = 'top',
  ...props 
}) => {
  const positionClasses = {
    top: '',
    bottom: 'order-last'
  };

  const imageClasses = twMerge(
    classNames(
      'w-full h-48 object-cover',
      positionClasses[position],
      className
    )
  );

  return (
    <img 
      src={src} 
      alt={alt} 
      className={imageClasses} 
      {...props} 
    />
  );
};

// PropTypes
Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger', 'dark']),
  shadow: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
  hover: PropTypes.bool
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger', 'dark'])
};

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  padding: PropTypes.oneOf(['none', 'sm', 'default', 'lg'])
};

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger', 'dark'])
};

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl'])
};

CardText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  muted: PropTypes.bool
};

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom'])
};

// Export all components
export default Card;
export { 
  CardHeader, 
  CardBody, 
  CardFooter, 
  CardTitle, 
  CardText, 
  CardImage 
};
