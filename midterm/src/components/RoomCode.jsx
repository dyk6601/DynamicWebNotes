// components/RoomCode.jsx
import React from 'react';

const RoomCode = ({ code, className = '' }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    // You could add a toast notification here
    console.log('Room code copied to clipboard:', code);
  };

  return (
    <div className={`bg-white rounded-2xl p-6 border-4 border-gray-800 shadow-lg ${className}`}>
      <h3 className="text-lg font-bold text-gray-800 mb-2">Room Code</h3>
      <div 
        onClick={copyToClipboard}
        className="text-4xl font-mono font-bold text-red-500 cursor-pointer hover:text-red-600 transition-colors tracking-widest"
        title="Click to copy"
      >
        {code}
      </div>
      <p className="text-sm text-gray-600 mt-2">Click to copy</p>
    </div>
  );
};

export default RoomCode;
