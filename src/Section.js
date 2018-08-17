import React, {Component} from 'react'
import ComList from './CommentList'

export default class Section extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false
    }
  }
  render() {
    const {section} = this.props
    const {isOpen} = this.state
    return (
      <div>
        <h3>{section.title}</h3>
        <button className="btn btn-primary" onClick={this.btnHandler}>
          {isOpen ? 'Hide' : 'Open'}
        </button>
        {this.getSecText()}
      </div>
    )
  }
  getSecText() {

    if(!this.state.isOpen) return null
    const {section} = this.props
    const comments = section.comments

    return (
      <div>
        <section>{section.text} {this.getComment()}</section>
      </div>
    )
  }
  getComment() {
    const {section} = this.props
    const comments = section.comments
    if(!comments || comments.length == 0) {
    return <strong>There is no comments.</strong>
    }
    else{
      return <ComList comments={comments}/>
    }
  }
  btnHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

}