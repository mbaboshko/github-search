import React from 'react'

export default function Repos({ repos }) {
  return (
    <>
      {repos.map(repo => (
        <div className="card mb-3" key={repo.key}>
          <div className="card-body">
            <h5>
              <a href={repo.html_url} target="_blank">
                {repo.name}
              </a>
            </h5>
          </div>
        </div>
      ))}
    </>
  )
}