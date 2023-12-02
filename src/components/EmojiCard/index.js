import './index.css'

const EmojiCard = props => {
  const {emojiData, onEmojiClick} = props
  const {id, emojiName, emojiUrl} = emojiData

  const onEmoji = () => {
    onEmojiClick(id)
  }

  return (
    <li>
      <button className="btn" type="button">
        <img
          src={emojiUrl}
          alt={emojiName}
          className="card-img"
          onClick={onEmoji}
        />
      </button>
    </li>
  )
}

export default EmojiCard
