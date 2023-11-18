import React from 'react'
import './Create.css'
import { Link } from 'react-router-dom'

const Create = () => {
  return (
    <div className='Signup'>
      <div className='form2Holder'>
        <section className='section1'>
          <form className='form2'>
          <i class="fi fi-tr-circle-user"></i>
            <label className="formheader">  <h1>Signup</h1> </label>
            <input placeholder='First name' type='text' >
            </input><br></br>

            <input placeholder='Last name' type='text' >
            </input><br></br>

            <input placeholder='Username' type='text' >
            </input><br></br>

            <input placeholder='Email' type='email' >
            </input><br></br>

            <input placeholder='password' type='password' >
            </input><br></br>

            <Link to='/Login'><button>Sign up</button></Link>
          </form>
        </section>
      </div>

    </div>
  )
}

export default Create