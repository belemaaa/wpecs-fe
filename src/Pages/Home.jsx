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
          
          {/* <svg className='svg1' xmlns="http://www.w3.org/2000/svg" width="15vw" height="15vh" viewBox="0 0 27 27" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg><br></br>  */}

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