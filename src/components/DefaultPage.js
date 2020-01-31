import React from 'react'
import MediaList from './MediaList'

import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const POSTS_QUERY = gql`
  query($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        currentPage
        lastPage
        perPage
      }
      media(id: $id, search: $search) {
        id
        title {
          english
        }
        type
        description
        bannerImage
        genres
        averageScore
        siteUrl
      }
    }
  }
`

function DefaultPage() {
  const { loading, error, data } = useQuery(POSTS_QUERY, {
    variables: { page: 26, perPage: 8 },
  })
  if (loading) return <p>Loading ...</p>
  if (error) return <p>{error}</p>
  console.log(data.Page.media)
  return (
    <div className='media-container'>
      {data.Page.media.map((mediaItem) => (
        <MediaList key={mediaItem.id} mediaItem={mediaItem} />
      ))}
    </div>
  )
}

export default DefaultPage
