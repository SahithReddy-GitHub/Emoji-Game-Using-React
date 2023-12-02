import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  constructor(props) {
    super(props)

    // Initialize state with emojisList from props
    this.state = {
      topScore: 0,
      isPlay: true,
      emojisList: props.emojisList,
      clickedList: [],
    }
  }

  onEmojiClick = id => {
    const {clickedList} = this.state
    let isIncrement = true

    clickedList.forEach(each => {
      if (each === id) {
        isIncrement = false

        this.setState(prevState => ({
          isPlay: !prevState.isPlay,
        }))
      }
    })

    if (isIncrement) {
      this.setState(prevState => ({
        clickedList: [...prevState.clickedList, id],
      }))
    }

    this.setState(prevState => ({
      emojisList: prevState.emojisList.sort(() => Math.random() - 0.5),
    }))

    if (clickedList.length === 11) {
      this.setState({isPlay: false})
    }
  }

  onPlayClicked = () => {
    const {clickedList, topScore} = this.state

    if (clickedList.length > topScore) {
      // Update top score if the current score is greater
      this.setState({topScore: clickedList.length})
    }

    this.setState(prevState => ({
      isPlay: !prevState.isPlay,
      clickedList: [],
      emojisList: prevState.emojisList.sort(() => Math.random() - 0.5), // Shuffle emojis for the next round
    }))
  }

  render() {
    const {clickedList, topScore, isPlay} = this.state
    const {emojisList} = this.state
    console.log(clickedList)
    return (
      <div className="background">
        <NavBar
          score={clickedList.length}
          topScore={topScore}
          isPlay={isPlay}
        />
        <div className="bg-custom">
          {isPlay ? (
            <ul>
              {emojisList.map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  emojiData={eachEmoji}
                  onEmojiClick={this.onEmojiClick}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              score={clickedList.length}
              onPlayClicked={this.onPlayClicked}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
