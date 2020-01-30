import React from 'react'

function Filters() {
  return (
    <div className='filters-container'>
      <select name='Genre' id='genre' className='filter-genre'>
        <option selected value='genre'>
          Genre
        </option>
        <option value='comedy'>Comedy</option>
        <option value='action'>Action</option>
        <option value='drama'>Drama</option>
      </select>
      <div className='year-container'>
        <input type='text' placeholder='Year' />
      </div>
    </div>
  )
}

export default Filters
