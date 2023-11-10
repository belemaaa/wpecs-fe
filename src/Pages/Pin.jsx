import React from 'react'

const Pin = () => {
    const pinInfo = 'click this button to generate a pin'
    const buttonInfo = 'Generate pin'

    const handleClick = () => {
        console.log(Math.floor(Math.random() * 2090900990))
    } 
    

  return (
    <div className='PinPage'>
        <h1>Your generated pin</h1>
        <div className='pinengine'>
            <h3>{pinInfo}</h3>
            <button onClick={handleClick}>
                <p>{buttonInfo}</p>
            </button>
            <p>{}</p>
        
        </div>
    </div>
  )
}

export default Pin