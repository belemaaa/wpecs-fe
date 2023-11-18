import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword]  = useState('')
  const [loginError, setLoginError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    try{
      const headers={
        'Content-Type': 'application/json',
      }
      const response = await axios.post('http://127.0.0.1:8000/api/login/',
      { email: email,
        password: password
      },
      {headers: headers}
      )
      if (response.status === 200){
        console.log('login was successful')
        // setAccessToken(response.data.access_token);
        // setUser_Id(response.data.user.id)
        navigate('/home')
      }
    } catch(error){
      setLoginError('Invalid username or password. Please try again.')
      // setUsername('')
      // setPassword('')
      console.error('Error received: ', error)
    }
  }
    const welcome = ' Login'
  return (

    <div className='Logins'>
         <section className='section2'>
        <div className='formHolder'>
            <h1 className='welcome'>{welcome}</h1>
            <form  className='formm' method='POST' onSubmit={handleLogin}> 
              <svg className='svg1' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 27 27" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg><br></br>

                <label>Email</label><br></br>
                <input placeholder='Input your Email' type='email' name='email' onChange={e => setEmail(e.target.value)} >
                </input>
                <p className='warning'>{}</p>
                <label>Password</label><br></br>
                <input placeholder= ' Input your password' type='password' name='password' onChange={e => setPassword(e.target.value)} >
                </input>
                <p className='warning'>{}</p>
                <button type='submit'>Login</button>
                {/* <p>Input your email and password to sign into your account.</p> */}
                <p className='last1'>Don't have an account?<Link to='/Create'> Signup</Link> </p>
            </form> 
           
        </div>
        </section>
       
    </div>

  )
}

export default Login