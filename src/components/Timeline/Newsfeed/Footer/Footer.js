import React from 'react'
import './Footer.scss'
import footer from '../../../../assets/footer.png'
const Footer = () => {
  return (
    <div className='footer-container'>
        <img src={footer} alt="" />
        <div className="footer-content">
            <p>You're all caught up</p>
            <span>You've seen all new posts from the past 5 days.</span>
            <button>View older posts</button>
        </div>
    </div>
  )
}

export default Footer