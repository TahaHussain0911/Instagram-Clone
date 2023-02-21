import React from 'react'
import './More.scss'
import {ReactComponent as Hammenu} from '../../assets/More.svg'
const More = () => {
  return (
    <div className='more-container'>
        <a href="/" className='hide-icon'><Hammenu className='menu-icon'/> <span> More</span></a>
    </div>
  )
}

export default More