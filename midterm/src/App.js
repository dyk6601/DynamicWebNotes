import { useState } from 'react';
import HomePage from './pages/HomePage';
import LobbyPage from './pages/LobbyPage';
import CategoryPage from './pages/CategoryPage';
import GamePage from './pages/GamePage';
import NicknameModal from './components/NicknameModal';
import RulesModal from './components/RulesModal';
import { WORD_CATEGORIES } from './data/Categories';

// Generate random 6-digit room code
const generateRoomCode = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};

function App() {
  // Simple page navigation
  const [currentPage, setCurrentPage] = useState('home');
  const [showNicknameModal, setShowNicknameModal] = useState(false);
  const [showRulesModal, setShowRulesModal] = useState(true);
  const [isJoining, setIsJoining] = useState(false);
  
  // Game data (all local, no database)
  const [roomCode, setRoomCode] = useState('');
  const [nickname, setNickname] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentWords, setCurrentWords] = useState({ majority: '', minority: '' });
  
  // Mock player list for demo
  const mockPlayers = [
    'Alice (Host)', 'Bob', 'Charlie', 'Diana'
  ];

  // Button handlers
  const handleStartNewGame = () => {
    setIsJoining(false);
    setShowNicknameModal(true);
  };

  const handleJoinGame = () => {
    setIsJoining(true);
    setShowNicknameModal(true);
  };

  const handleNicknameSubmit = ({ nickname: nicknameValue, roomCode: roomCodeValue }) => {
    setNickname(nicknameValue);
    setRoomCode(isJoining ? roomCodeValue : generateRoomCode());
    setShowNicknameModal(false);
    setCurrentPage('lobby');
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleStartGame = () => {
    setCurrentPage('category');
  };

  // Generate random words from selected category
  const generateRandomWords = (category) => {
    if (!category || !WORD_CATEGORIES[category]) {
      return { majority: 'Demo Word', minority: 'Demo Word' };
    }
    
    const categoryWords = WORD_CATEGORIES[category];
    const randomIndex = Math.floor(Math.random() * categoryWords.length);
    return categoryWords[randomIndex];
  };

  const handleCategoryConfirm = () => {
    const words = generateRandomWords(selectedCategory);
    setCurrentWords(words);
    setCurrentPage('game');
  };

  const handlePlayAgain = () => {
    setCurrentPage('category');
    setCurrentWords({ majority: '', minority: '' });
  };

  const handleExitGame = () => {
    setCurrentPage('home');
    setRoomCode('');
    setNickname('');
    setSelectedCategory('');
    setCurrentWords({ majority: '', minority: '' });
  };

  // Render the current page
  if (currentPage === 'home') {
    return (
      <>
        <HomePage 
          onStartNewGame={handleStartNewGame}
          onJoinGame={handleJoinGame}
        />
        {showRulesModal && (
          <RulesModal 
            isOpen={showRulesModal}
            onClose={() => setShowRulesModal(false)}
          />
        )}
        {showNicknameModal && (
          <NicknameModal 
            isOpen={showNicknameModal}
            isHost={!isJoining}
            onSubmit={handleNicknameSubmit}
            onClose={() => setShowNicknameModal(false)}
          />
        )}
      </>
    );
  }

  if (currentPage === 'lobby') {
    return (
      <LobbyPage 
        roomCode={roomCode}
        players={mockPlayers}
        onStartGame={handleStartGame}
        onExitGame={handleExitGame}
      />
    );
  }

  if (currentPage === 'category') {
    return (
      <CategoryPage 
        categories={Object.keys(WORD_CATEGORIES)}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        onStartGame={handleCategoryConfirm}
      />
    );
  }

  if (currentPage === 'game') {
    return (
      <GamePage 
        selectedCategory={selectedCategory}
        userWord={currentWords.majority}
        onPlayAgain={handlePlayAgain}
        onExitGame={handleExitGame}
      />
    );
  }
}

export default App;