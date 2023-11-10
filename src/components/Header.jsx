import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {



  return (
    <div className='header'>
      <div className='headerLinks'>
          <ul>
          <Link to='/'>  <li> User </li></Link>
           <Link to='/ElectricityPlan'> <li>Electricity Plan</li></Link>
           <Link to='/Pin'> <li>Pin</li></Link>
           
          </ul>
      </div>
    </div>
  )
}

export default Header