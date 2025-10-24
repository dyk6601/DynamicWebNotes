import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import CardDemoPage from './pages/CardDemoPage';

const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <div>
        <Navbar />
      </div>
      <div className="col-span-5 relative">
        <Routes>
          <Route path="/" element={<CardDemoPage />} />
          {/* Add additional routes here as needed */}
        </Routes>
      </div>
    </div>
  )
}

export default App;
