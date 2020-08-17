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
    following,
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
              <img src={avatar_url} style={{ width: 150, borderRadius: '50%' }} alt={name} />
              <h1>{name}</h1>
              {location && <p>Местоположение: {location}</p>}
              <a href={html_url} target="_blank" className="btn btn-dark">
                Открыть профиль
              </a>
            </div>
            <div className="col">
              {bio && (
                <>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </>
              )}

              <ul>
                {login && (
                  <li>
                    <strong>Имя пользователя: </strong>
                    {login}
                  </li>
                )}

                {company && (
                  <li>
                    <strong>Компания: </strong>
                    {company}
                  </li>
                )}

                {blog && (
                  <li>
                    <strong>Сайт: </strong>
                    {blog}
                  </li>
                )}
              </ul>

              <div className="badge badge-primary mr-3 p-3">Подписчики: {followers}</div>
              <div className="badge badge-success mr-3 p-3">Подписки: {following}</div>
              <div className="badge badge-info mr-3 p-3">Репозитории: {public_repos}</div>
              <div className="badge badge-dark mr-3 p-3">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
