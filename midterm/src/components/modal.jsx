// components/modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, title, children, showClose = true }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border-4 border-gray-800">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          {showClose && (
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-lg font-bold"
            >
              ×
            </button>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
