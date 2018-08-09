import React from 'react'
import Section from './Section'
import {render} from 'react-dom'
import {sections} from './fixtures'

render(<Section section={sections[0]}/>, document.getElementById('container'))