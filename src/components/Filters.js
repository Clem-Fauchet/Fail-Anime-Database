import React from 'react'

function Filters() {
  return (
    <div className='filters-container'>
      <select name='Genre' id='genre' className='filter-genre'>
        <option value='DEFAULT'>Genre</option>
        <option value='adventure'>Adventure</option>
        <option value='action'>Action</option>
        <option value='comedy'>Comedy</option>
        <option value='drama'>Drama</option>
        <option value='fantasy'>Fantasy</option>
        <option value='romance'>Romance</option>
        <option value='sports'>Sports</option>
      </select>
      <button type='radio' className='filter-review'>
        Per Review
      </button>

      <input type='text' placeholder='Year' className='filter-year' />

      <div className='btn btn-search'>Search</div>
    </div>
  )
}

export default Filters
