// components/Tips.jsx
import React from 'react';

const Tips = ({ className = '' }) => {
  return (
    <div className={`${className}`}>
      <p className="text-gray-700 text-sm">
        Stay calm and act natural
      </p>
    </div>
  );
};

export default Tips;
