import React, { Component } from 'react'

import gql from 'graphql-tag'
import { Query } from 'react-apollo'

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

class Results extends Component {
  render() {
    return (
      <div>
        <Query query={POSTS_QUERY}>
          {({ loading, data, error }) => {
            if (loading) return <h1>Loading...</h1>
            if (error) console.log(error)
            console.log(data)
            return <h1>Test</h1>
          }}
        </Query>
      </div>
    )
  }
}

export default Results
