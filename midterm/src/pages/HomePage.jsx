import Button from '../components/button.jsx';
const HomePage = ({ onStartNewGame, onJoinGame }) => {
  return (
    <div className="min-h-screen bg-yellow-400 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-48 h-48 flex items-center justify-center">
            <img 
              src="/img/logo.png" 
              alt="Am I the Liar Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-3 drop-shadow-sm">
          Am I the Liar?
        </h1>
        <p className="text-gray-700 text-lg mb-8 font-medium">
          Your favorite party game
        </p>
         
        <div className="space-y-4">
          <Button 
            onClick={onStartNewGame} 
            variant="primary" 
            className="w-full md:w-64 text-lg py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-2xl shadow-lg border-4 border-gray-800 transition-transform hover:scale-105 active:scale-95"
          >
            Start a New Game
          </Button>
          <Button 
            onClick={onJoinGame} 
            variant="secondary" 
            className="w-full md:w-64 text-lg py-4 bg-amber-50 hover:bg-amber-100 text-gray-800 font-bold rounded-2xl shadow-lg border-4 border-gray-800 transition-transform hover:scale-105 active:scale-95"
          >
            Join a Game
          </Button>
        </div>
        
        {/* Three dots */}
        <div className="flex justify-center gap-3 mt-8">
          <div className="w-3 h-3 rounded-full bg-gray-800"></div>
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;