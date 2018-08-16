import React from 'react'
import Section from './Section'
import SectionList from './SectionList'
import {render} from 'react-dom'
import {sections} from './fixtures'

render(<SectionList sections={sections}/>, document.getElementById('container'))
