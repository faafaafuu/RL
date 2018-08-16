import React from 'react'
import Comment from './Comments'

export default class ComList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }
  render() {
    const that = this.props
    console.log(this.state)
    if(!that.comments || that.comments.length == 0){
      return <h4>'There is no comments man!'</h4>
    }
    return (
      <div>
        <button onClick={this.onClickHandler}>{this.btnName()}</button>
        {this.getComments()}
      </div>
    )
  }
  onClickHandler = (ev) => {
    ev.preventDefault()
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  getComments() {
    if(!this.state.isOpen) return null
    const comElements = this.props.comments.map((e) => <li key={e.id}><Comment comment={e}/></li>)
    return (
    
      <div>
        <h4>Comment({this.props.comments.length})</h4>
        <ul>{comElements}</ul>
      </div>
    )
  }
  btnName() {
    console.log(this.state)
    return this.state.isOpen ? 'hide' : 'show'
  }
}