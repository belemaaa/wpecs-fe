import React from 'react'
import './ElectricityPlan.css'
import Header from '../components/Header'
import { useEffect } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'


const ElectricityPlan = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [value, setValue] = useState('')
  const [currentCredits, setCurrentCredits] = useState(0)
  const [paymentSuccess, setPaymentSuccess] = useState(false)


  const Options = [
    { label: '1000 Credits for $100', value: 100 },
    { label: '1500 Credits for $150', value: 150 },
    { label: '2000 Credits for $200', value: 200 }
  ]

  const handleSelect = (e) => {
    setValue(e.target.value)
  }

  const onSubmit = (data) => {
    console.log(data);
    setCurrentCredits(prevCredits => prevCredits + Number(value));
  };

  return (

    <div className='ElectricityPlan'>
      {/* <Header /> */}
      <h2 className='eleh1'>
        Available Plans and Payment page
      </h2>
      <div className='planInfo'>
        <h1>Available Plans</h1>
        <label htmlFor="selectOption" >Select an option: </label>
        <br></br>
        <br></br>
        <select onChange={handleSelect}>
          {Options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
            <p>Available Credits: {currentCredits}</p>
      </div>

      <div className='paymentsystem'>
        <h2>Payment Details</h2>

        <form className='paymentform' onSubmit={handleSubmit(onSubmit)}>
          <label>Card Holder Name</label><br></br>
          <input placeholder='Enter your full name' name='cardholder' type='text'></input><br></br>

          <label>Card Number</label><br></br>
          <input placeholder='1234 4567 7890 0123' name='cardnumber' type='number'></input><br></br>

          <label>MM/YY</label><br></br>
          <input type="date" placeholder='expiry date' name='month' />

          <label>CVV/CVC</label>
          <input placeholder='000' type='number' name='cvv'></input>

          <p>Amount to pay: {value} </p>

          <button className='.paymentformbutton' type='submit'>Pay</button>
        </form>
      </div>
    </div>
  )


}


export default ElectricityPlan