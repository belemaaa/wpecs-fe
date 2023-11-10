import React from 'react'
import './Create.css'

const Create = () => {
  return (
    <div className='Signup'> 
    <div className='form2Holder'>
         <form className='form2'>
            <label>Name </label>
            
            <input placeholder='Input your first name' name='' type='text' >
            </input><br></br>

            <label> Phone Number </label>
            
            <input placeholder='Input your phone Number' name='' type='tel' >
            </input><br></br>

            <label> House Address</label>
            
            <input placeholder='Input your house address' name='' type='text' >
            </input><br></br>

            <label>Email</label>
            
            <input placeholder='Input your email' name='' type='email' >
            </input><br></br>

            <label> Password</label>
            
            <input placeholder='Input your password' name='' type='password' >
            </input><br></br>
            

            <button>Submit</button>
         </form>
         </div>
    </div>
  )
}

export default Create