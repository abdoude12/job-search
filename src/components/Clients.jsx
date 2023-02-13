import React from 'react'
import { feedback } from '../constants/constants';

const Clients = () => {
  return (
    <div className='p-[1rem] flex flex-col gap-5'>
      <div className='flex flex-col gap-5'>
        <h2 className='text-white text-3xl font-bold'>
          What people are <br /> saying about us
        </h2>
        <p className='text-gray-400'>
          Everything you need to accept card payments  and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className='flex flex-col gap-5'>
        {
          feedback.map((Element) => {
            return (
              <div className="feedback-card p-5 rounded-[20px] flex flex-col gap-5">
                <img className='w-1/5' src=".././assets/quotes.svg" />
                <p className="text-white">{Element.content}</p>
                <div className="flex items-center">
                  <img src={Element.img} className='w-1/3 mr-4'/>
                  <div>
                    <p className="text-white">{Element.name}</p>
                    <p className="text-gray-400">{Element.title}</p>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Clients