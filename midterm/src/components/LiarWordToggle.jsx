import React from 'react';
import Toggle from './Toggle.jsx';

const LiarWordToggle = ({ useLiarWord, setUseLiarWord, isHost = false }) => {
  return (
    // Keep the width full to avoid any weird overflow issues 
    <div className="mb-6 w-full max-w-full">
      {/* Container with padding that adjusts for mobile*/}
      <div className="p-3 md:p-4 rounded-2xl border-4 border-gray-800 bg-amber-100 shadow-lg overflow-hidden">
        {/* Stack everything vertically on mobile, then side-by-side on bigger screens */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          {/* Text section - let it shrink if needed */}
          <div className="min-w-0 flex-1">
            <div className="text-sm font-bold text-gray-800">Game Mode</div>
            {/* Break long words if they're too wide  */}
            <div className="text-xs text-gray-600 mt-1 break-words">
              {useLiarWord ? 'Liars get the word "LIAR!"' : 'Liar receives a different word'}
            </div>
          </div>
          {/* Toggle section - center it on mobile, right-align on desktop */}
          <div className="flex items-center justify-center sm:justify-end flex-shrink-0">
            <Toggle
              isOn={useLiarWord}
              onToggle={setUseLiarWord}
              disabled={!isHost}
              size="md"
              colorScheme={{ on: 'bg-red-500', off: 'bg-green-500' }}
            />
            {/* Fixed width so the toggle doesn't jump around */}
            <div className="ml-3 text-sm font-bold text-center sm:text-left w-20 sm:w-24">
              {useLiarWord ? (
                <span className="text-red-600">"LIAR!"</span>
              ) : (
                <span className="text-green-600">Category Word</span>
              )}
            </div>
          </div>
        </div>
        {!isHost && <div className="text-xs text-gray-600 mt-2 font-medium">Controlled by host</div>}
      </div>
    </div>
  );
};

export default LiarWordToggle;
