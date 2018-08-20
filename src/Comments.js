import React from 'react'
import PropTypes from 'prop-types'


export default function Comment({c}) {
  return (
    <div>
      <strong>{c.user}</strong>
      <section>{c.text}</section>
    </div>
  )
}

Comment.propTypes = {
  c: PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })

}