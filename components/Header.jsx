import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png'
import {SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon} from '@heroicons/react/solid'


const Header = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Image 
                src={logo}
                layout='fill'
                objectFit="contain"
                objectPosition='left'
            />
        </div>
        <div className='flex flex-row items-center md:border-4 rounded-full py-2 md:shadow-sm'>
            <input className=' flex-grow pl-5 outline-none bg-transparent text-sm text-gray-600 placeholder-gray-400' type="text" placeholder='Start your search'/>
            <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
        </div>
        <div className='flex items-center justify-end space-x-4 text-gray-600'>
            <p className='hidden md:inline'>Become a host</p>
            <GlobeAltIcon className='h-6 cursor-pointer'/>
            <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                <MenuIcon className='h-6'/>
                <UserCircleIcon className='h-6'/>
            </div>
        </div>
    </header>
  )
}

export default Header