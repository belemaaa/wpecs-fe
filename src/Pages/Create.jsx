import React, {useState} from 'react'
import './Login.css'
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
    <div className='Logins'>
      <section className='section2'>
        <div className='formHolder'>
            <h1 className='welcome'>Signup</h1>
            <form  className='formm' onSubmit={handleSubmit}> 
              <svg className='svg1' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 27 27" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg><br></br>

                <label>First name</label><br></br>
                <input placeholder='Input your first name' type='text' value={first_name} onChange={(e) => setFirst_name(e.target.value)} >
                </input>
                <br/><br/>

                <label>Last name</label><br></br>
                <input placeholder='Input your last name' type='text' value={last_name} onChange={(e) => setLast_name(e.target.value)} >
                </input>
                <br/><br/>

                <label>Email</label><br></br>
                <input placeholder='Input your Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} >
                </input>
                <br/><br/>

                <label>Phone number</label><br></br>
                <input placeholder='Input your phone number' type='phone' value={phone_number} onChange={(e) => setPhone_number(e.target.value)} >
                </input>
                <br/><br/>

                <label>Password</label><br></br>
                <input placeholder= 'Input your password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} >
                </input>
                <br/><br/>
                <button type='submit'><p>Create account</p></button>
                <p className='last1'>Not a new user?<Link to='/Login'> Login</Link> </p>
            </form> 
            
        </div>
      </section>

    </div>
  )
}

export default Create