import React from 'react'
import Section from './Section'

export default function SectionList({sections}) {
  const sectionElements = sections.map((e) => <li key={e.id}><Section section={e}/></li>)

  return (
    <ul>
      {sectionElements}
    </ul>
  )
}