import React, { useContext, useEffect } from 'react'
import { GithubContext } from '../context/github/githubContext'
import Loader from '../components/Loader/Loader'
import { Link } from 'react-router-dom'

export default function Profile({ match }) {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext)
  const urlName = match.params.name

  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
  }, [])

  if (loading) return <Loader />

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    public_repos,
    public_gists,
  } = user

  return (
    <>
      <Link to="/" className="btn btn-link">
        На главную
      </Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img src="" alt="" />
              <h1>Name</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  return
}
