import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import './App.scss'
import Search from './components/Search'
import ResultTest from './components/ResultTest'

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <div className='container'>
          <header>
            <h1>Anime & Manga</h1>
          </header>
          <main>
            <Search />
            <ResultTest />
          </main>
        </div>
      </div>
    </ApolloProvider>
  )
}

export default App
