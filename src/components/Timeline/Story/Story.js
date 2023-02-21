import React,{useContext} from 'react'
import Profile from '../../Profile/Profile'
import './Story.scss'
import InstaContext from '../../../context/InstaContext'
const Story = (props) => {
    const {story,id}=props
  const getContext=useContext(InstaContext)
  const {background}=getContext
  // console.log(background) 
  return (
    <div className='story'>
        <Profile imageSize={"large"} image={story.image} border={true} hoverscale={false} id={id} visited={background.indexOf(id)!==-1?true:false}/>
        <span className={`username ${background.indexOf(id)!==-1?"opacity":""}`}>{story.name.length>10?story.name.substring(0,8)+"...":story.name}</span>
    </div>
    )
}

export default Story