import React from 'react'
import './Screenloader.scss'
import Logo from '../assets/instaLogo.jpeg'
import Meta from '../assets/meta.jpeg'
const Screenloader = () => {
  return (
    <div className='screenloader'>
        <img src={Logo} className="loader-logo" alt="" />
        <div className="insta-footer">
            <p>from</p>
            <img src={Meta} alt="" />
        </div>
    </div>
  )
}

export default Screenloader