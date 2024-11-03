import React from 'react'
import Title from '../ui/Title'
import { users } from '../../../assets/constants'
import Member from './Member'

const Team = () => {
  return (
    <div className='bg-white rounded-2xl dark:bg-gray-700 p-3 dark:text-gray-300 flex-1 flex flex-col gap-5'>
      <Title>Team</Title>
      {users.map((users,index)=>(
        <Member key={index} user={users}/>
      ))}
    </div>
  )
}

export default Team
