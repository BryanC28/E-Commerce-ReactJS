import React from 'react'
import ship from '../../assets/images/icon/delivery-van.svg';
import money from '../../assets/images/icon/money-back.svg';
import service from '../../assets/images/icon/service-hours.svg';
const Feature = () => {
  return (
    <div className='container py-16'>
      <div className="md:w-10/12 w-full grid md:grid-cols-3 grid-cols-1 gap-6 md:mx-auto pb-2 justify-center">
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <img src={ship} alt="free-ship" className='w-12 h-12 object-contain' />
            <div>
                <h4 className="font-medium text-lg capitalize">free shipping</h4>
                <p className='text-gray-500 text-sm capitalize'>order over 200.000VND</p>
            </div>
        </div>
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <img src={money} alt="money-return" className='w-12 h-12 object-contain' />
            <div>
                <h4 className="font-medium text-lg capitalize">money returns</h4>
                <p className='text-gray-500 text-sm capitalize'>30 days money returns</p>
            </div>
        </div>
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <img src={service} alt="support" className='w-12 h-12 object-contain'/>
            <div>
                <h4 className="font-medium text-lg capitalize">24/7 support</h4>
                <p className='text-gray-500 text-sm capitalize'>customer support</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
