import React, {useState} from 'react'
import {UilSearch} from "@iconscout/react-unicons"

function SearchComp({setQuery, units, setUnits}) {
  const [city, setCity] = useState('');

  const manipulateOnSearch = () => {
    if(city !== '') setQuery({q:city})
  }

  const manipulateOnUnits = (e) => {
    const selectedUnit = e.currentTarget.name;
    if(units !== selectedUnit) setUnits(selectedUnit);

  }
  
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input value={city} onChange={(e) => setCity(e.currentTarget.value)} type="text" 
            placeholder="Search for city..."
            className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'></input>
            <UilSearch onClick={manipulateOnSearch} size={25} className='text-white cursor-pointer transition ease-out hover:scale-125'></UilSearch>
        </div>

        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name="metric" onClick={manipulateOnUnits} className='text-xl text-white font-light transition ease-out hover:scale-125'>°C</button>
            <p className='text-xl text-white mx-1'>|</p>
            <button name="imperial" onClick={manipulateOnUnits} className='text-xl text-white font-light transition ease-out hover:scale-125'>°F</button>
        </div>
    </div>
  )
}

export default SearchComp