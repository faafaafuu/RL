import React from 'react'
import Article from './Article'

export default function ArtList({articles}) {
  const artElements = articles.map(
    (article) => <li key={article.id}><Article article = {article}/></li>)
  return (
    <ul>
      {artElements}
    </ul>
  )
}