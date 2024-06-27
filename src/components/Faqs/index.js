// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="faq-bg-container">
        <div className="faq-sub-container">
          <h1>FAQs</h1>
          <ul className="ul-container">
            {faqsList.map(eachFaq => (
              <FaqItem faqDetails={eachFaq} key={eachFaq.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
