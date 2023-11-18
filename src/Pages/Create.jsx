import React, {useState} from 'react'
import './Create.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Create = () => {
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [error_message, setError_message] = useState('')

    const handleSubmit = async (e) => {
      e.preventDefault();
      const headers = {
          'Content-Type': 'application/json'
      }
      try{
        const response = await fetch('http://127.0.0.1/api/signup', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
              first_name: first_name,
              last_name: last_name,
              username: username,
              password: password,
              email: email,
              phone_number: phone_number
            }),
        })
        if (response.status === 200){
            console.log('signup was successful')
            navigate('/Login')
        }
      }catch(error){
          console.error('errors: ', error)
          setError_message('An error occurred. Please try again later.')
      }
    }
  return (
    <div className='Signup'>
      <div className='form2Holder'>
        <section className='section1'>
        <label className="formheader">  <h1>Signup</h1> </label>
          <form className='form2' onSubmit={handleSubmit}>
          <i class="fi fi-tr-circle-user"></i>
            <input placeholder='First name' type='text' value={first_name} onChange={(e) => setFirst_name(e.target.value)} >
            </input><br></br>

            <input placeholder='Last name' type='text' value={last_name} onChange={(e) => setLast_name(e.target.value)}>
            </input><br></br>

            <input placeholder='Username' type='text' value={username} onChange={(e) => setUsername(e.target.value)}>
            </input><br></br>

            <input placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}>
            </input><br></br>

            <input placeholder='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}>
            </input><br></br>

            <button type='submit'>Sign up</button>
          </form>
        </section>
      </div>

    </div>
  )
}

export default Create