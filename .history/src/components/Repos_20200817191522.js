import React from 'react'

export default function Repos({ repos }) {
  return (
    <>
      {repos.map(repo => (
        <div className="card mb-3"></div>
      ))}
    </>
  )
}
