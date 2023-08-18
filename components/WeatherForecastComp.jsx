import React from 'react'
import { fetchIcons } from '../services/getAllWeatherServices'

function WeatherForcastComp({title, items}) {
 
  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
            <p className='text-amber-500 font-medium uppercase'>{title}</p>
        </div>
        <hr className='my-2'></hr>

        <div className='flex flex-row items-center justify-between text-white'>
        {items.map((item, index) => {
           return(
            <div key={index} className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>{item.title}</p>
            <img src={fetchIcons(item.icon)} alt="" className='w-12 my-1' />
            <p className='font-medium'>{`${item.temp.toFixed()}°`}</p>
            </div>
           )
            
           
        })}
           
            
        </div>
    </div>
  )
}

export default WeatherForcastComp