import React, {Component} from 'react'
import ComList from './CommentList'
import PropTypes from 'prop-types'

export default class Section extends Component {
  static propTypes = {
    //shape - указывает какого вида должен быть обьект
    //(isR - сама статья не обязательна но если пришла то должна быть вот такого вот вида)
    section: PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired
  }
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