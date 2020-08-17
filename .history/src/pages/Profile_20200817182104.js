import React, { useContext, useEffect } from 'react'
import { GithubContext } from '../context/github/githubContext'
import Loader from '../components/Loader/Loader'

export default function Profile({ match }) {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext)
  const name = match.params.name

  useEffect(() => {
    getUser(name)
    getRepos(name)
  }, [])

  return (
    {
      loading ? (
        <Loader />
      ) : (
        <div>
          <h1>Profile page</h1>
        </div>
      )
    }
  )

  return
}
