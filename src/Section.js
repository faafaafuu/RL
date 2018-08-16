import React, {Component} from 'react'
import ComList from './CommentList'


export default class Section extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secOpen: false
    }
  }
  render() {
    const {section} = this.props
    const {secOpen} = this.state
    return (
      <div>
        <h2>{section.title}</h2>
        <button onClick={this.seccitonToggle}>{secOpen ? '-' : '+'}</button>
        {this.getSecText()}
      </div>
    )
  }
  getSecText() {
    if(!this.state.secOpen) return null
    const {section} = this.props
    console.log(section)
    return <section>{section.text} <ComList comments={section.comments}/></section>
  }
  seccitonToggle = () => {
    this.setState ({
      secOpen: !this.state.secOpen
    })
  }
}