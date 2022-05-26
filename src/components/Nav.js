



import React from 'react'
import gfdLogo from './gfdLogo.png'
import NavMenu from './NavMenu'

export default function Nav() {
  return (
    <div className='border-b sticky top-0 z-20 bg-red-700 text-white'>
 
        <div className='flex items-center pt-2 px-4'>
        <NavMenu/>
    
        <div className='mx-auto '>
        <img className='w-16 inline md:w-20 lg:w-24 2xl:w-28' src={gfdLogo}/>
        <h1 className='text-xs lg:text-lg 2xl:text-3xl'>Gulfport Fire Department Training Site</h1>
        </div>
       
        <NavMenu/>
        </div>
        
    </div>
  )
}
