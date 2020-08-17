import React from 'react'

export default function Profile({ match }) {
  console.log(match.params.name)
  return (
    <div>
      <h1>Profile page</h1>
    </div>
  )
}
