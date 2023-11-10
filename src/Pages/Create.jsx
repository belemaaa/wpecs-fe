import React from 'react'
import './Create.css'
import { Link } from 'react-router-dom'

const Create = () => {



  return (


    <div className='Signup'>
      <div className='form2Holder'>
        <section className='section1'>

          <form className='form2'>

            <label className="formheader">  <h1>Create your account</h1> </label>

            <label>Name </label>
            <br></br>
            <input placeholder='eg: John Doe' name='' type='text' >
            </input><br></br>

            <label> Phone Number </label>
            <br />
            <input placeholder='eg: +23491234567887' name='' type='tel' >
            </input><br></br>

            <label> House Address</label>
            <br />
            <input placeholder='eg: 23 Adebayo lane, Texas.' name='' type='text' >
            </input><br></br>

            <label>Email</label>
            <br />
            <input placeholder='eg: someone@gmail.com' name='' type='email' >
            </input><br></br>

            <label> Password</label>
            <br />
            <input placeholder='' name='' type='password' >
            </input><br></br>

            <Link to='/Login'><button>Sign up</button></Link>
          </form>
        </section>
      </div>

    </div>
  )
}

export default Create