import React, { useState } from 'react'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import './App.scss'
import SearchBox from './components/SearchBox'

import PageLoadingAnime from './components/PageLoadingAnime'
import PageLoadingManga from './components/PageLoadingManga'

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
})

function App() {
  const [state, setState] = useState({
    anime: 'anime',
    manga: '',
  })

  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <div className='container'>
          <header>
            <h1>Anime & Manga</h1>
          </header>
          <main>
            <SearchBox state={state} setState={setState} />
            {state.anime === 'anime' ? (
              <PageLoadingAnime />
            ) : (
              <PageLoadingManga />
            )}
          </main>
        </div>
      </div>
    </ApolloProvider>
  )
}

export default App
