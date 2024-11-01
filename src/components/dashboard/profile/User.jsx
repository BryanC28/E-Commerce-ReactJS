import React from 'react'
import userAvt from '../../../assets/images/dashboard/user01.png'

const User = () => {
  return (
    <div
      className="flex gap-3 bg-white items-center p-4 rounded-full 
                    dark:bg-gray-600 dark:text-gray-300"
    >
      <img src={userAvt} alt="user img" className="w-14 h-14 rounded-full" />
      <div>
        <h3 className="font-semibold text-2xl ">John Doe</h3>
        <p>Developer</p>
      </div>
    </div>
  );
}

export default User
