import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'




const Login = () => {
    
        const [email, setEmail] = useState ('')
        const [password, setPassword] = useState ('')

        const handleSubmit = (event) => {
            event.preventDefault()
            axios.post('http://localhost:8082/login', {email , password})
            .then(res => console.log(res))
            // .catch(err => console.log(error))
        }


    
    const welcome = ' Login'




  return (

    <div className='Logins'>
         <section className='section2'>
        <div className='formHolder'>
            <h1 className='welcome'>{welcome}</h1>
            

            <form  className='formm' onSubmit={handleSubmit}>
            
                

                <label>Email</label><br></br>
                <input placeholder='Input your Email' type='email' name='email' onChange={e => setEmail(e.target.value)} >
                </input>
                <p className='warning'>{}</p>
                <label>Password</label><br></br>
                <input placeholder='Input your password' type='password' name='password' onChange={e => setPassword(e.target.value)} >
                </input>
                <p className='warning'>{}</p>
                <Link to='/dash'><button type='submit'><p>Login</p></button></Link>
                {/* <p>Input your email and password to sign into your account.</p> */}
                <p className='last1'>Don't have an account?<Link to='/Create'> Signup</Link> </p>
            </form> 
           
        </div>
        </section>
       
    </div>

  )
}

export default Login