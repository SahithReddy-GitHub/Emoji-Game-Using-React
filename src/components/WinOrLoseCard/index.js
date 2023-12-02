import './index.css'

const WinOrLoseCard = props => {
  const {score, onPlayClicked} = props
  const result = score === 12
  const imgUrl = result
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const headValue = result ? 'Won' : 'Lose'
  const para = result ? 'Best Score' : 'Score'

  const onPlay = () => {
    onPlayClicked()
  }

  return (
    <div className="bg">
      <div className="wl-con">
        <h1 className="head">You {headValue}</h1>
        <p className="para">{para}</p>
        <p className="score-para">{score}/12</p>
        <button type="button" onClick={onPlay}>
          Play Again
        </button>
      </div>
      <img className="wl-img" src={imgUrl} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
