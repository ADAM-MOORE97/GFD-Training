
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import React from 'react'
import gfdLogo from './gfdLogo.png'

export default function Nav() {
  return (
    <div className='border-b sticky top-0 z-20 bg-red-700 text-blue-900'>
        <div className='flex items-center pt-2 px-4'>
        
        <i className="fa-regular fa-hose text-2xl md:text-3xl lg:text-4xl"></i>
        <div className='mx-auto '>
        <img className='w-16 inline md:w-20 lg:w-24 2xl:w-28' src={gfdLogo}/>
        <p className='text-xs font-bold lg:text-lg 2xl:text-3xl'>Gulfport Fire Department Training Site</p>
        </div>
        
     
        </div>
        
    </div>
  )
}
