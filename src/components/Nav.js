



import React from 'react'
import gfdLogo from './gfdLogo.png'
import LoginPopup from './LoginPopup'
import NavMenu from './NavMenu'

export default function Nav() {
  return (
    <div className='border-b sticky top-0 z-20 bg-red-700 text-white'>
 
        <div className='flex items-center pt-2 px-4'>
        <NavMenu/>
    
        <div className='mx-auto '>
        <img className='w-12 inline md:w-16 lg:w-20 2xl:w-24' src={gfdLogo}/>
        <h1 className='text-xs lg:text-lg 2xl:text-3xl'>Gulfport Fire Department Training Site</h1>
        </div>
        
        <LoginPopup/>
        </div>
        
    </div>
  )
}
