import React, { useState, Fragment } from 'react'
import './search.scss'

function SearchBox() {
  return (
    <div className='search-container'>
      <div className='filter type'>
        <button type='radio' className='btn filter anime'>
          ANIME
        </button>
        <button type='radio' className='btn filter manga'>
          MANGA
        </button>
      </div>

      <div className='filter selection'>
        <select name='Genre' id='genre' className='btn filter genre'>
          <option value='DEFAULT'>Genre</option>
        </select>

        <select name='status' id='status' className=' btn filter status'>
          <option value='DEFAULT'>Status</option>
        </select>

        <input type='text' placeholder='Year' className='filter year' />
      </div>

      <div className='load-search'>
        <div className='btn btn-search'>Search</div>
        <button className='btn btn-reset'>Reset</button>
      </div>
    </div>
  )
}

export default SearchBox
