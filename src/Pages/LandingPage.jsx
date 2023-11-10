
import React from 'react'
import './LandingPage.css'
import Home from './Home'
import { Link } from 'react-router-dom'

const LandingPage = () => {


  
  


  return (

    <div className='LandingPage'>
        <div className='landinginfo'>
          
        <h1>AmpSmart Solutions</h1>
        
        </div>

        <div className='holster'>
          <h1>Information them things</h1>
          
          <div className='moreInfo'>
          </div>

        <div className='buttonHolder'>
           <Link to='/Create'> <button> Get Started </button></Link>

        </div>


        </div>

        <div className=''>

        </div>

    </div>
  )
}

export default LandingPage