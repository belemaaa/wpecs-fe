import React from 'react'
import { useEffect } from 'react'

const ElectricityPlan = () => {

  const electricInfo = 'These are our various plans'

  const listPrices = ['$100', '$150', ]

  const units = [200, 300, 400, 500, 600, 700]


  return (
    <div className='ElectricityPlan'>
        <h1>
          {electricInfo}
        </h1>
        <div className='planInfo'>
          <ul>
            <li>{units}</li><br></br>
            <li>{listPrices}</li>
          </ul>

        </div>
    </div>
  )
}

export default ElectricityPlan