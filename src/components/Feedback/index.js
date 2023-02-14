// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackContainer: false}

  onClickEmoji = () => {
    this.setState({isFeedbackContainer: true})
  }

  renderFeedbackContainer = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-question-container">
        <h1 className="feedback-question">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="emojis-list">
          {emojis.map(eachItem => (
            <li key={eachItem.id}>
              <button
                type="button"
                className="emoji-btn"
                onClick={this.onClickEmoji}
              >
                <img
                  src={eachItem.imageUrl}
                  alt={eachItem.name}
                  className="emoji"
                />
                <br />
                <span className="emoji-name">{eachItem.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankyouContainer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thank-you-text">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackContainer} = this.state
    const {resources} = this.props
    console.log(resources)
    return (
      <div className="app-container">
        <div className="feedback-card">
          {isFeedbackContainer
            ? this.renderThankyouContainer()
            : this.renderFeedbackContainer()}
        </div>
      </div>
    )
  }
}

export default Feedback
