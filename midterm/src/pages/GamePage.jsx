import { useState } from 'react';
import Button from '../components/button.jsx';
import Tips from '../components/Tips.jsx';

const GamePage = ({ selectedCategory, userWord, onPlayAgain, onExitGame }) => {
  const [wordRevealed, setWordRevealed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-400 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        
        <div className="mb-6">
          <p className="text-gray-700 text-lg mb-2">Category</p>
          <h2 className="text-teal-500 text-3xl md:text-4xl font-bold drop-shadow-sm">
            {selectedCategory?.replace(/_/g, ' ') || 'Demo Category'}
          </h2>
        </div>

        {/* Simple Word Revealer */}
        <div className="mb-6">
          <button
            className="w-96 h-40 rounded-3xl text-white text-3xl font-bold shadow-xl border-4 border-gray-800 bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 hover:scale-105 transition-transform"
            onClick={() => setWordRevealed(!wordRevealed)}
          >
            {wordRevealed ? userWord : 'Tap to Reveal Word'}
          </button>
        </div>

        <div className="mb-8">
          <Tips />
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            onClick={onPlayAgain}
            className="md:w-48 text-lg py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl shadow-lg border-4 border-gray-800"
          >
            Play Again
          </Button>
          
          <Button
            onClick={onExitGame}
            variant="secondary"
            className="md:w-48 text-lg py-4 bg-amber-50 hover:bg-amber-100 text-gray-800 font-bold rounded-2xl shadow-lg border-4 border-gray-800 transition-transform hover:scale-105 active:scale-95"
          >
            Exit Game
          </Button>
        </div>

      </div>
    </div>
  );
};

export default GamePage;