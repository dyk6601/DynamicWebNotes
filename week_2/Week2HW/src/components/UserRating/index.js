import {useState} from 'react'
import {ReactComponent as Favorite} from '@material-design-icons/svg/filled/favorite.svg'
import './UserRating.css'

export const UserRating = () => {
  const [count, setCount] = useState(0)

  const handlePlusClick = () => {
    if (count >= 5) {
      return
    }
    setCount(count + 1)
  }

  const handleMinusClick = () => {
    if (count <= 0) {
      return
    }
    setCount(count - 1)
  }

  return (
    <div className="user-rating-container">
      <h3 className="rating-title">Rate this recipe:</h3>
      <div className="user-rating-controls">
        <button 
          className={`rating-button ${count <= 0 ? 'hidden' : ''}`}
          onClick={handleMinusClick}
        >
          [-]
        </button>
        <div className="hearts-container">
          {[...Array(count)].map((i, index) => {
            return (
              <span key={index}>
                <Favorite className="heart-icon" />
              </span>
            )
          })}
        </div>
        {/* https://legacy.reactjs.org/docs/conditional-rendering.html */}
        <button 
          className={`rating-button ${count >= 5 ? 'hidden' : ''}`}
          onClick={handlePlusClick}
        >
          [+]
        </button>
      </div>
    </div>
  )
}

export default UserRating
