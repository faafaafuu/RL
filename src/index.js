import React from 'react'
import ReactDOM, {render} from 'react-dom'
import ArtList from './ArtList'
import {articles} from './fixtures'
import Review from './Review'

render(
  <ArtList articles = {articles}/>,
  document.getElementById('container')
)