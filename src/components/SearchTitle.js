import React, { useState, Fragment } from 'react'
import './search.scss'

import gql from 'graphql-tag'
import { useLazyQuery } from '@apollo/react-hooks'

import Filters from './Filters'
import ResultTitle from './ResultTitle'

const POSTS_QUERY_TITLE = gql`
  query($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      media(id: $id, search: $search) {
        id
        title {
          english
        }
        type
        description
        bannerImage
        genres
        averageScore
      }
    }
  }
`

function Search() {
  const [searchQuery, setSearchQuery] = useState('')
  const [getSearchQuery, { loading, data }] = useLazyQuery(POSTS_QUERY_TITLE)

  if (loading) return <p>Loading ...</p>

  if (data && data.Page.media) {
    setSearchQuery(data.Page.media)
  }

  const searchTitle = (e) => {
    if (e.key === 'Enter') {
      getSearchQuery({ variables: { search: { searchQuery } } })
      console.log(searchQuery)
      console.log(getSearchQuery)
    }
  }

  return (
    <div>
      <div className='search-container'>
        <div className='search-bar'>
          <input
            className='text-bar'
            type='text'
            placeholder='Search here...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={searchTitle}
          />
          <button className='btn btn-reset'>Reset</button>
        </div>
        <Filters />
      </div>

      <ResultTitle />
    </div>
  )
}

export default Search
