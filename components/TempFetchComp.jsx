import React from 'react'
import {UilSun} from "@iconscout/react-unicons"
import {fetchIcons } from '../services/getAllWeatherServices'

function TempFetchComp({weather: {details, icon, temp, temp_min, temp_max}}) {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-white'>
            <p>Weather & Visibility - {details}</p>
        </div>

        <div className='flex flex-row items-center justify-between text-white '>
            <img src={fetchIcons(icon)} alt="" className='w-20'/>
            <UilSun></UilSun>
            <p className='font-light'>High: 
            <span className='font-medium ml-1'>{`${temp_max.toFixed()}°`}</span>
            </p>
            <p className='font-light'>|</p>
            <UilSun></UilSun>
            <p className='font-light'>Low: 
            <span className='font-medium ml-1'>{`${temp_min.toFixed()}°`}</span>
            </p>
            <p className='text-5xl'>{`${temp.toFixed()}°`}</p>
        </div>
    </div>
  )
}

export default TempFetchComp