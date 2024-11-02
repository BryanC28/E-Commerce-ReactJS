import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Cards = ({data}) => {
  return (
    <div
      className="bg-white flex items-center gap-4 p-6 rounded-2xl 
                    dark:bg-gray-700 dark:text-gray-300"
    >
      <FontAwesomeIcon icon={data.icon} className={`${data.bgColor} px-3 py-6 w-6 text-2xl dark:bg-gray-500`} />
      <div>
        <h2 className='text-xl '><span className='text-2xl font-bold'>{data.count}</span>/250</h2>
        <p className='font-bold'>{data.title}</p>
      </div>
    </div>
  );
}

export default Cards
