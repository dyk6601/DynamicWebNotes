import React, { useState } from 'react';
import Button from '../components/button.jsx';
import RoomCode from '../components/RoomCode.jsx';
import LiarWordToggle from '../components/LiarWordToggle.jsx';

const LobbyPage = ({ roomCode, players, onStartGame, onExitGame }) => {
  const [useLiarWord, setUseLiarWord] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-400 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-amber-100 rounded-3xl flex items-center justify-center shadow-lg border-4 border-gray-800 overflow-hidden">
            <img 
              src="/img/yappie_on_chair.png" 
              alt="Yappie on Chair"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h2 className="text-amber-100 text-4xl md:text-5xl font-bold mb-2 drop-shadow-sm">
          Game Lobby
        </h2>
        
        <RoomCode code={roomCode} className="mb-6" />

        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border-4 border-gray-800 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Players ({players.length})
          </h3>
          <div className="space-y-2">
            {players.map((player, index) => (
              <div key={index} className="bg-white/30 rounded-xl p-3 border-2 border-gray-600">
                <div className="font-semibold text-gray-800">{player}</div>
              </div>
            ))}
          </div>
        </div>

        <LiarWordToggle 
          useLiarWord={useLiarWord}
          setUseLiarWord={setUseLiarWord}
          isHost={true}
        />

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            onClick={onStartGame}
            className="md:w-48 text-lg py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-2xl shadow-lg border-4 border-gray-800"
          >
            Select Category
          </Button>
          
          <Button
            onClick={onExitGame}
            className="md:w-48 text-lg py-4 bg-amber-50 hover:bg-amber-100 text-gray-800 font-bold rounded-2xl shadow-lg border-4 border-gray-800"
          >
            Leave Game
          </Button>
        </div>

      </div>
    </div>
  );
};

export default LobbyPage;