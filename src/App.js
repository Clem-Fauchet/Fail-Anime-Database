import React from 'react'

import './App.scss'
import Search from './components/Search'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <header>
          <h1>Anime & Manga</h1>
        </header>
        <main>
          <Search />
        </main>
      </div>
    </div>
  )
}

export default App
