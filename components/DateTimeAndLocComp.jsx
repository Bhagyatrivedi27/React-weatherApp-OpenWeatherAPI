import React from 'react'
import { ConvertToLocalTime } from '../services/getAllWeatherServices'

function DateTimeAndLocComp({weather: {dt, timezone, name, country}}) {
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
            <p className='text-white text-xl font-extralight'>
               {ConvertToLocalTime(dt, timezone)}
            </p>
        </div>

        <div className='flex items-start justify-center my-3'>
            <p className='text-lime-400 text-3xl font-medium'>
                {`${name} city, ${country}`}
            </p>
        </div>
    </div>
  )
}

export default DateTimeAndLocComp