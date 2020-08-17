import React from 'react'
import { GithubContext } from '../context/github/githubContext'

export default function Profile({ match }) {
  const github = useContext(GithubContext)
  return (
    <div>
      <h1>Profile page</h1>
    </div>
  )
}
