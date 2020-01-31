import React, { useState } from 'react'
import './search.scss'

import Filters from './Filters'

function Search() {
  const [searchQuery, setSearchQuery] = useState({
    search: '1',
    results: [],
  })

  const handleInput = (e) => {
    let search = e.target.value
    setSearchQuery((prevState) => {
      return { ...prevState, search: search }
    })
  }

  const searchTitle = (e) => {
    if (e.key === 'Enter') {
      console.log('Enter')
    }
  }

  return (
    <div className='search-container'>
      <div className='search-bar'>
        <input
          className='text-bar'
          type='text'
          placeholder='Search here...'
          onChange={handleInput}
          onKeyPress={searchTitle}
        />
        <button className='btn btn-reset'>Reset</button>
      </div>
      <Filters />
    </div>
  )
}

export default Search
