import React from 'react'
import Newsfeed from './Newsfeed/Newsfeed'
import Storybox from './Storybox/Storybox'
import './Timeline.scss'
const Timeline = () => {
  return (
    <div className='timeline'>
      <Storybox/>
      <Newsfeed/>
    </div>
  )
}

export default Timeline