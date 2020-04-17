import React from 'react'
import logo from './logo.svg'

import { StoreProvider } from './store-provider'
import GitHubUser from './GitHubUser'

import './App.css'

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <GitHubUser />
      </div>
    </StoreProvider>
  )
}

export default App
