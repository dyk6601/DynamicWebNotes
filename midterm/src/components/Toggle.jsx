import React from 'react';

// components/Toggle.jsx
// Reusable toggle switch component
// Props:
//  - isOn: boolean - current state of the toggle
//  - onToggle: function - called when toggle is clicked
//  - disabled: boolean - whether the toggle is disabled
//  - size: 'sm' | 'md' | 'lg' - size of the toggle
//  - colorScheme: object - colors for on/off states
//  - className: string - additional CSS classes
const Toggle = ({ 
  isOn = false, 
  onToggle, 
  disabled = false, 
  size = 'md',
  colorScheme = { on: 'bg-green-500', off: 'bg-red-500' },
  className = '' 
}) => {
  const sizes = {
    sm: { container: 'h-6 w-10', toggle: 'h-4 w-4', translate: 'translate-x-5' },
    md: { container: 'h-8 w-14', toggle: 'h-6 w-6', translate: 'translate-x-7' },
    lg: { container: 'h-10 w-16', toggle: 'h-8 w-8', translate: 'translate-x-8' }
  };

  const currentSize = sizes[size];

  return (
    <div className="relative">
      <button
        onClick={() => !disabled && onToggle && onToggle(!isOn)}
        disabled={disabled}
        className={`
          relative inline-flex ${currentSize.container} items-center rounded-full 
          transition-colors duration-200 ease-in-out border-2 border-gray-800
          ${isOn ? colorScheme.on : colorScheme.off}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-105'}
          ${className}
        `}
        aria-pressed={isOn}
        aria-label="Toggle switch"
      >
        <span
          className={`
            absolute inline-block ${currentSize.toggle} rounded-full bg-white border-2 border-gray-800 
            transition-transform duration-200 ease-in-out
            ${isOn ? `transform ${currentSize.translate}` : 'transform translate-x-0.5'}
          `}
        />
      </button>
    </div>
  );
};

export default Toggle;
