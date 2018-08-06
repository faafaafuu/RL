import React, {Component} from 'react'

export default class Review extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false
    }
  }
  render(){
    const {comment} = this.props
    const isShow = this.state
    return (
    <div>
      <button onClick={this.showComment}>{isShow ? 'hide' : 'show'}</button>
    </div>
    )
  }
  showComment() {
    if(!this.state.isShow) return null
    const {comment} = this.props
    return <textarea>{comment.comments}</textarea>
  }

}