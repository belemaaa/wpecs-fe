import React from 'react'
import './Home.css'
import ElectricityPlan from './ElectricityPlan'
import Pin from './Pin'
import Create from './Create'
import Header from '../components/Header'
import Login from './Login'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LandingPage from './LandingPage'




const Home = () => {
  return (

    <div className='UserPage'>
        
        <div className='dashboard'>
          <Header />
          
          <h2>Dashboard</h2>


          <div className='contents'>

            <h3>User Information</h3>
            
             <p>Username</p>
             <p>Email</p>
             <p>Credits left</p>
             <p>Active plan</p>
            

        </div>
        </div>
        
        
    </div>
  )
}

export default Home