import './index.css'

const NavBar = props => {
  const {score, topScore, isPlay} = props
  let includeValue
  if (isPlay === true) {
    includeValue = (
      <div className="cona">
        <p className="emoji-para">Score: {score}</p>
        <p className="emoji-para">Top Score: {topScore}</p>
      </div>
    )
  }

  return (
    <nav className="nav">
      <div className="emojiLogo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="img-emoji"
        />
        <h1 className="emoji-para">Emoji Game</h1>
      </div>
      {includeValue}
    </nav>
  )
}

export default NavBar
