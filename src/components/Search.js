import React from 'react'
import Filters from './Filters'

import './search.scss'

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
