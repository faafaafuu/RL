import React from 'react'

export default function Comment({c}) {
  return (
    <div>
      <strong>{c.user}</strong>
      <section>{c.text}</section>
    </div>
  )
}