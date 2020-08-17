import React, { useContext } from 'react'
import Search from '../components/Search'
import Card from '../components/Card'
import { GithubContext } from '../context/github/githubContext'
import Loader from '../components/Loader/Loader'

export default function Home() {
  const { loading, users } = useContext(GithubContext)

  return (
    <>
      <Search />
      <div className="row">
        {loading ? <Loader /> : null}

        {cards.map(card => {
          return (
            <div className="col-sm-4 mb-4" key={card}>
              <Card />
            </div>
          )
        })}
      </div>
    </>
  )
}
