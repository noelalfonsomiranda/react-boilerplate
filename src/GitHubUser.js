import React, { useEffect } from 'react'
import { useStore } from './store-provider'

export default function GitHubUser() {
  const { state, fetchGithubUser } = useStore()
  const json = JSON.stringify(state.gitHubUser)

  useEffect(() => {
    fetchGithubUser()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <section className="github-user">{json}</section>
}
