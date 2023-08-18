import React from 'react'
import { Link} from 'react-router-dom';

function DaysComp({setQuery}) {


    const days = [
        {
            id:1,
            title: 'Monday'
        },
        {
            id:2,
            title: 'Tuesday'
        },
        {
            id:3,
            title: 'Wednesday'
        },
        {
            id:4,
            title: 'Thursday'
        },
        {
            id:5,
            title: 'Friday'
        },
    ]

  return (
    <div className='flex items-center justify-around my-8 text-white'>
        {days.map((day) => {
        //    return <button key={day.id} className='text-white text-lg font-medium' onClick={() => routeChange(day.title)}>{day.title}</button>
              return <Link key={day.id} to={`http:localhost:3000/${day.title}`}>{day.title}</Link>
        })}
    </div>
  );
}

export default DaysComp