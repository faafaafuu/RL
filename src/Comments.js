import React from 'react'

export default function Comment ({comment}) {
  return (
    <div>
      <strong>{comment.user}</strong>
      <p>{comment.text}</p>
    </div>
  )
}