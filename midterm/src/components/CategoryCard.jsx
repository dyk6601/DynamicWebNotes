// components/CategoryCard.jsx
import React from 'react';

const CategoryCard = ({ 
  category, 
  isSelected, 
  onClick,
  className = ''
}) => {
  const baseClasses = 'p-6 rounded-2xl border-4 cursor-pointer transition-all duration-200 transform hover:scale-105';
  const selectedClasses = isSelected 
    ? 'bg-red-500 text-white border-gray-800 shadow-lg' 
    : 'bg-white text-gray-800 border-gray-300 hover:border-gray-400 shadow-md';

  const handleClick = () => {
    if (onClick) {
      onClick(category);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`${baseClasses} ${selectedClasses} ${className}`}
    >
      <h3 className="text-xl font-bold mb-2">{category}</h3>
      <p className="text-sm opacity-80">
        {isSelected ? 'Selected' : 'Click to select'}
      </p>
    </div>
  );
};

export default CategoryCard;
