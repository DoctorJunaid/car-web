import { MyAvatarGroup } from '@/components/MyAvatarGroup'
import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="hero-section">
      <div className="left-section">
        <h2>Your Journey,<br /> Your Car,<br />
         Your Way</h2>
        <p>Experience the ultimate freedom of choice with GoCar - tailor your adventure by choosing from our premium fleet of vehicles.</p>
        <button className="btn-get-started"></button>
      </div>
      <div className="right-section">
        <div className="avatar-section">
        <MyAvatarGroup /> 
        <h3>12.5K+ People</h3>
        <p>has used our services such as renting, buying, or even selling their car.</p>
         </div>
         <div className="btn-all">
        <button className='button-hero-last'>Rent</button>
        <button className='button-hero-last'>Buy</button>
        <button className='button-hero-last'>Sell</button>
        <button className='button-hero-last'>Consult</button>
        </div>
      </div>

    </div>
  )
}

export default Home