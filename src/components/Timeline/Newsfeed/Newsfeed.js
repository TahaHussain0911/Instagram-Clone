import React,{useContext} from 'react'
import Card from './Card/Card'
import './Newsfeed.scss'
import InstaContext from '../../../context/InstaContext'
import Footer from './Footer/Footer'
const Newsfeed = () => {
  const getContext=useContext(InstaContext);
  const {newsfeed,liked}=getContext
  return (
    <div className='newsfeed'>
        {newsfeed.map((element)=>{
          return <Card data={element} react={liked.indexOf(element.id)===-1?false:true}/>
        })}
        <Footer/>
    </div>
  )
}

export default Newsfeed