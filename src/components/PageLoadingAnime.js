import React, { useState } from 'react'
import MediaList from './MediaList'

import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const POSTS_QUERY = gql`
  query($id: Int, $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        currentPage
        perPage
        hasNextPage
      }
      media(id: $id, type: ANIME) {
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

function PageLoadingAnime() {
  const { loading, error, data } = useQuery(POSTS_QUERY, {
    variables: { perPage: 8 },
  })

  const [page, setPage] = useState({
    currentPage: '',
    hasNextPage: '',
  })

  if (loading) return <p className='loading'>Loading ...</p>
  if (error) return <p>{error}</p>

  const nextPage = () => {}

  return (
    <div className='media-container'>
      <div className='page-container'>
        <span>{data.Page.pageInfo.currentPage}</span>
        <button onClick={nextPage}>Next</button>
      </div>
      {data.Page.media.map((mediaItem) => (
        <MediaList key={mediaItem.id} mediaItem={mediaItem} />
      ))}
    </div>
  )
}

export default PageLoadingAnime
