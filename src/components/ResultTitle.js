import React from 'react'

import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const POSTS_QUERY_TITLE = gql`
  query($id: Int, $search: String) {
    Media(id: $id, search: $search) {
      id
      title {
        english
      }
      type
      description
      bannerImage
      genres
      averageScore
    }
  }
`

function ResultTitle() {
  return <div></div>
}

export default ResultTitle
