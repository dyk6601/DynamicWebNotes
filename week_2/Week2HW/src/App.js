import RecipeCard from './components/RecipeCard'

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Recipe Collection</h1>
        <p className="app-subtitle">Discover and rate amazing recipes</p>
      </header>
      <main className="app-main">
        <RecipeCard />
      </main>
      <footer className="app-footer">
        <p>&copy; 2025 Recipe Collection App</p>
      </footer>
    </div>
  )
}

export default App
