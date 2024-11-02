import React from 'react'
import Title from '../ui/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import Barchart from './Barchart'

const Balance = ({darkmode}) => {
  return (
    <div className='bg-white p-5 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1'>
      <div className='flex justify-between items-center'>
          <Title>Balance</Title>
          <FontAwesomeIcon icon={faPaperPlane} className='bg-gray-500 p-2 rounded-full text-gray-300 text-2xl'/>
      </div>
      <div>
        <h1 className='font-bold text-2xl'>$600 <span className='font-medium text-xl'>USD</span></h1>
        <span>on November 2024</span>
      </div>
      <Barchart darkmode={darkmode}/>
    </div>
  )
}

export default Balance
