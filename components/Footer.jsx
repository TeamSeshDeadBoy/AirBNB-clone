import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 gap-y-10 px-32 py-14 text-gray-600 bg-gray-200'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How AirBnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>AirBnb Plus</p>
            <p>AirBnb Luxe</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>MADE BY</h5>
            <p>Stepan Lebedev</p>
            <p>30.11.2022</p>
            <p>React</p>
            <p>Tailwind</p>
            <p>Next.js</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>   
            <h5 className='font-bold'>HOSTS</h5>
            <p>How AirBnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>AirBnb Plus</p>
            <p>AirBnb Luxe</p>
        </div >
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Youtube</p>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>Github</p>
            <p>Vkontakte</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help center</p>
            <p>Trust & Safety</p>
            <p>Funds</p>
        </div>
    </div>
  )
}

export default Footer