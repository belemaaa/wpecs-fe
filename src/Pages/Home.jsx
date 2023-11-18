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

  // const userDetails{

  // }

  const Options = [
    { label: '1000 Credits for $100', value: 100 },
    { label: '1500 Credits for $150', value: 150 },
    { label: '2000 Credits for $200', value: 200 },
    { label: '2500 Credits for $250', value: 250 },
    { label: '3000 Credits for $300', value: 300 },
    { label: '4500 Credits for $450', value: 450 }
  ]
  

  let navigate = useNavigate();

  const gotoPayment = () => {
    let path = '/payment';
    navigate(path)
  }


  return (

    <div className='UserPage'>

      <div className='dashboard'>
        <Header />

        <h2>Dashboard</h2>

        <div className='sidebar'>
          <h1>User Details</h1>
          <p>Username: {}</p>
          <p>Email: {}</p>
          <p>Phone Number: {}</p>


        </div>

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
            <h1>Select a paid plan below</h1>
          </div>

            {Options.map(option => {
              return (
                
          <div className='flex3' onClick={gotoPayment}>
            <p>{option.label}</p>

          </div>

              )
              })}
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