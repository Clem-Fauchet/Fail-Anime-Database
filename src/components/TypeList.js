import React from 'react'

function TypeList({ state, setState }) {
  const loadAnime = (e) => {
    let anime = e.target.value
    setState((prevState) => {
      return { ...prevState, manga: '', anime: anime }
    })
  }

  const loadManga = (e) => {
    let manga = e.target.value
    setState((prevState) => {
      return { ...prevState, manga: manga, anime: '' }
    })
  }

  return (
    <div className='filter type'>
      <button
        type='radio'
        className='btn filter anime'
        value='anime'
        onClick={loadAnime}
      >
        ANIME
      </button>
      <button
        type='radio'
        className='btn filter manga'
        value='manga'
        onClick={loadManga}
      >
        MANGA
      </button>
    </div>
  )
}

export default TypeList
