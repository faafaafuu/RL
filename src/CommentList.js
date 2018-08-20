import React, {Component} from 'react'
import Comment from './Comments'

export default class ComList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }
  render() {
    return (
      <div>
      <strong className="str">Comments({this.props.comments.length})</strong>
      <button className="btn btn-info" onClick={this.getState}>{this.btnState()}</button>
      {this.getComents()}
      </div>
    )
  }
  getComents() {
    if(!this.state.isOpen) return null
    const {comments} = this.props
    const comElements = comments.map((e) => <li key={e.id}><Comment c={e}/></li>)
    return (
      <ul>
        {comElements}
      </ul>
    )
  }
  btnState() {
    return this.state.isOpen ? 'Hide' : 'Show'
  }
  getState = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}
