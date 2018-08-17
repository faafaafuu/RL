import React from 'react'
import Section from './Section'
import SecList from './SectionList'
import {render} from 'react-dom'
import {sections} from './fixtures'

render(<SecList sections={sections}/>, document.getElementById('container'))