import React from 'react'

import './mediaList.scss'

function MediaList({
  mediaItem: { title, description, type, bannerImage, genres, averageScore },
}) {
  return (
    <div className='media-item'>
      <h3>{title.english}</h3>
      <div className='visual'>
        <img src={bannerImage} alt='Poster anime' />
        <div className='score'>{averageScore}</div>
      </div>
      <div className='description'>
        <p>{description}</p>
      </div>
      <div className='style'>
        <span>{genres}</span> ||
        <span>{type}</span>
      </div>
    </div>
  )
}

export default MediaList
