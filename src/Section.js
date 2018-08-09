import React, {Component} from 'react'

export default class Section extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openSec: false
    }
  }
  //при ооп подходе обязательно рэндэр
  render() {
    console.log(this.props)
    const {section} = this.props
    const {openSec} = this.state
    return (
      <div>
        <h2>{section.title}</h2>
        <button onClick={this.openSecToggle}>{openSec ? 'close':'open'}</button>
        {this.getSecitonBody()}
      </div>
    )
  }

  getSecitonBody() {
    if(!this.state.openSec) return null
    const {section} = this.props
    return <section>{section.text}</section>
  }
   // если записать как ar/func то this будет привязан к инстэнсу
  openSecToggle = () => {
    this.setState({
      openSec: !this.state.openSec
    })
  }
 
}