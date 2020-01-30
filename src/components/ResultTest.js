import React, { useEffect } from 'react'

function ResultTest() {
  const query = `
query ($id: Int) { # Define which variables will be used in the query (id)
  Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
    id
    title {
      english
    }
    type
      description
      bannerImage
      genres
      averageScore
      seasonYear
      siteUrl
  }
}
`

  // Define our query variables and values that will be used in the query request
  const variables = {
    id: 15125,
  }

  // Define the config we'll need for our Api request
  const url = 'https://graphql.anilist.co',
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    }

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
      .catch((err) => console.log(err))
  }, [options])

  return (
    <div>
      <h1>Test</h1>
    </div>
  )
}

export default ResultTest
