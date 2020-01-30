import React from 'react'

import ApolloClient, { gql } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import './App.scss'
import Search from './components/Search'
// import ResultTest from './components/ResultTest'
import ExchangeRate from './components/ExchangeRate'

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
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
            <ExchangeRate />
          </main>
        </div>
      </div>
    </ApolloProvider>
  )
}

export default App
