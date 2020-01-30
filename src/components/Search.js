import React from 'react'
import './search.scss'

import Filters from './Filters'

function Search() {
  return (
    <div className='search-container'>
      <div className='search-bar'>
        <input className='text-bar' type='text' placeholder='Search here...' />
        <button className='btn btn-reset'>Reset</button>
      </div>
      <Filters />
    </div>
  )
}

export default Search
