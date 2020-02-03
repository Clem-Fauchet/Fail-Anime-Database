import React, { useState } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const GET_TYPE_QUERY = gql`
  query($id: Int, $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        currentPage
        lastPage
        perPage
      }
      media(type: $type) {
        id
        title {
          english
        }
        type
        genres
        averageScore
        status
        seasonYear
        description
        bannerImage
      }
    }
  }
`

function TypeList() {
  const [state, setState] = useState({
    anime: '',
    manga: '',
  })

  const handleClickAnime = () => {
    let anime = 'ANIME'
    setState((prevState) => {
      return { ...prevState, anime: anime }
    })
  }

  const handleClickManga = () => {
    let manga = 'MANGA'
    setState((prevState) => {
      return { ...prevState, manga: manga }
    })
  }

  return (
    <div className='filter type'>
      <button
        type='radio'
        className='btn filter anime'
        value={state}
        onClick={handleClickAnime}
      >
        ANIME
      </button>
      <button
        type='radio'
        className='btn filter manga'
        value={state}
        onClick={handleClickManga}
      >
        MANGA
      </button>
    </div>
  )
}

export default TypeList
