import React, { createContext, useReducer, useContext } from 'react'

const defaultState = {
  gitHubUser: {}
}

function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case 'GET_GITHUB_USER':
      return {
        ...state,
        gitHubUser: action.payload
      }

    default:
      return state
  }
}

const StoreContext = createContext(null)

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState)

  /* eslint-disable no-undef */
  const fetchGithubUser = async () => {
    const result = await fetch(
      'https://api.github.com/users/noelalfonsomiranda'
    )
    const data = await result.json()
    console.log('asd: fetchGitHubUser -> data', data)

    dispatch({ type: 'GET_GITHUB_USER', payload: data })
  }

  const value = {
    state,
    dispatch,
    fetchGithubUser
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext)
