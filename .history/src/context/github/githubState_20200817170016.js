import React, { useReducer } from 'react'
import axios from 'axios'
import { GithubContext } from './githubContext'
import { githubReducer } from './githubReducer'
import { SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS, SET_LOADING } from '../types'

console.log(process.env.REACT_APP_CLIENT_SECRET)

export const GithubState = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: [],
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const clearUsers = () => dispatch({ type: CLEAR_USERS })

  const setLoading = () => dispatch({ type: SET_LOADING })

  const search = async value => {
    setLoading()

    dispatch({
      type: SEARCH_USERS,
      paylaod: [],
    })
  }

  const getUser = async name => {
    setLoading()

    dispatch({
      type: GET_USER,
      payload: {},
    })
  }

  const getRepos = async name => {
    setLoading()

    dispatch({
      type: GET_REPOS,
      payload: [],
    })
  }

  const { user, users, repos, loading } = state

  return (
    <GithubContext.Provider
      value={{ setLoading, search, getUser, getRepos, clearUsers, user, users, repos, loading }}
    >
      {children}
    </GithubContext.Provider>
  )
}
