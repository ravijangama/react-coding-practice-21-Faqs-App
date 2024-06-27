// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isDisplay: false}

  clickOnPlus = () => {
    this.setState(prevState => ({isDisplay: !prevState.isDisplay}))
  }

  clickOnMinus = () => {
    this.setState(prevState => ({isDisplay: !prevState.isDisplay}))
  }

  render() {
    const {isDisplay} = this.state
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    return (
      <li className="faqItem-container">
        <div className="question-container">
          <h1>{questionText}</h1>
          {isDisplay ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png "
              alt="minus"
              onClick={this.clickOnMinus}
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
              alt="plus"
              onClick={this.clickOnPlus}
            />
          )}
        </div>
        {isDisplay && <hr />}
        {isDisplay && <p>{answerText}</p>}
      </li>
    )
  }
}
export default FaqItem
