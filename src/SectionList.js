import React from 'react'
import Section from './Section'


export default function SecList({sections}) {
  const secElements = sections.map((e, index) => <li key={e.id}><Section section={e}/></li>)
  return (
    <ul>
      {secElements}
    </ul>
  )
}