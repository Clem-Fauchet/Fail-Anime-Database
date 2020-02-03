import React, { useState } from 'react'
import MediaList from './MediaList'

import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const POSTS_QUERY = gql`
  query($id: Int, $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        currentPage
        lastPage
        perPage
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

  const [count, setCount] = useState(1)

  const pageNext = () => {
    setCount((prevCount) => prevCount + 1)
    console.log(data.Page.pageInfo.currentPage)
    console.log(count)
  }

  const pageBefore = () => {
    setCount((prevCount) => prevCount - 1)
    console.log(count)
  }
  if (loading) return <p className='loading'>Loading ...</p>
  if (error) return <p>{error}</p>

  return (
    <div className='media-container'>
      <button onClick={pageNext}>Next</button>

      {data.Page.media.map((mediaItem) => (
        <MediaList key={mediaItem.id} mediaItem={mediaItem} />
      ))}
    </div>
  )
}

export default PageLoadingAnime
