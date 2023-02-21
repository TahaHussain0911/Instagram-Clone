import React from 'react'
import './Menu.scss'
import {ReactComponent as Home} from '../../assets/Home.svg'
import {ReactComponent as Explore} from '../../assets/Explore.svg'
import {ReactComponent as Messages} from '../../assets/Messages.svg'
import {ReactComponent as Notify} from '../../assets/Notify.svg'
import {ReactComponent as Search} from '../../assets/Search.svg'
import {ReactComponent as Reels} from '../../assets/Reels.svg'
import {ReactComponent as Create} from '../../assets/Create.svg'
import logo from '../../assets/taha.jpeg'
import Profile from '../Profile/Profile'

const Menu = () => {
  return (
    <div className='menu-container'>
        <a href="#"><Home className='menu-icon'/> <span className='active'> Home</span></a>
        <a href="#" className='hide-icon'><Search className='menu-icon'/> <span className='search-bar'> Search</span></a>
        <a href="#"><Explore className='menu-icon'/> <span> Explore</span></a>
        <a href="#"><Reels className='menu-icon'/> <span> Reels</span></a>
        <a href="#"><Messages className='menu-icon'/> <span> Messages</span></a>
        <a href="#" className='hide-icon'><Notify className='menu-icon'/> <span> Notifications</span></a>
        <a href="#"><Create className='menu-icon'/> <span> Create</span></a>
        <a href="#"><Profile className="menu-icon" hoverscale={true} image={logo} imageSize="small" border={false} id={0} visited={false}/> <span> Profile</span></a>
    </div>
  )
}

export default Menu