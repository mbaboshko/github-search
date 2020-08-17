import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { GithubContext } from '../context/github/githubContext'

export default function Search() {
  const [value, setValue] = useState('')
  const { show } = useContext(AlertContext)
  const github = useContext(GithubContext)

  const onSubmit = event => {
    if (event.key !== 'Enter') return
    if (value.trim()) {
      show(value)
      setValue('')
    } else {
      show('Поле не может быть пустым. Введите данные пользователя!')
    }
  }

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        name="search"
        id="search"
        placeholder="Введите ник пользователя GitHub"
        autoComplete="off"
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyUp={onSubmit}
      />
    </div>
  )
}
