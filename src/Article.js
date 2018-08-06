import React, {Component} from 'react'
import Review from './Review'

export default class Article extends Component{
  // заводим состояние
  constructor(props) {
    //получить доступ к переменным из родительского класса.
    super(props)
    this.state = {
      isOpen: false
    }
  }
  render() {
    const {article} = this.props
    let {isOpen} = this.state
    // console.log(this.state.isOpen)
    return (
    <div>
      <h3>{article.title}</h3>
      <button onClick = {this.toggleOpen}>{isOpen ? 'Close' : 'Open'}</button>
      {this.getBody()}
    </div>
    ) 
  }

  getBody() {
    if(!this.state.isOpen) return null
    const {article} = this.props
    return <section>{article.text}</section>
  }

  //this.toggleOpen = this.toggleOpen.bind(this)
  // его this будет привязан к нашему инстэнсу
  toggleOpen = () => {
    // асинх. перестраивает виртуальный дом (change state)
    this.setState({
      isOpen: !this.state.isOpen
    })
    // console.log('--', this.state.isOpen)
  }
}
// export default function Article(props) {
//   const {article} = props;
//     return (
//     <div>
//       <h3>{article.title}</h3>
//       <section>{article.text}</section>
//     </div>
//   ) 
// }

