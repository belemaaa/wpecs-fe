import React from 'react'
import './Home.css'
import ElectricityPlan from './ElectricityPlan'
import Pin from './Pin'
import Create from './Create'
import Header from '../components/Header'
import Login from './Login'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import { useLocation } from 'react-router-dom'




const Home = () => {

  const location = useLocation();
  const value = location.state ? location.value.state : 110;
  


  return (

    <div className='UserPage'>

      <div className='dashboard'>
        <Header />

        <h2>Dashboard</h2>

        <div className='flexContainer'>

          <div className='flex0'>
          <CircularProgressbar 
          className='progressbar'
          value={value}
          maxValue={200}
          text={`${value/2}%`}
          styles={buildStyles({
            pathColor: `rgba(62, 152, 199, ${value / 100})`,
            textColor: 'white',
            trailColor: '#d6d6d6',
            strokeLinecap: 'round',
            pathTransitionDuration: '0.5'
          })}
        />

        <h3>You have {value/2} Credits left</h3>
          </div>

          <div className='flex1'>

            

          </div>

          <div className='flex2'>

          </div>

          <div className='flex3'>

          </div>

          <div className='flex4'>

          </div>

          <div className='flex5'>

          </div>

         </div>

        </div>


      </div>
      )
}

      export default Home