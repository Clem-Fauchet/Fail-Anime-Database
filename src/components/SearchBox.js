import React from 'react'
import './search.scss'
import TypeList from './TypeList'

function SearchBox() {
  return (
    <div className='search-container'>
      <TypeList />
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
