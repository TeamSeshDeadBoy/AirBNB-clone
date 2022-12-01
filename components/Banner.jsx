import React from 'react'
import Image from 'next/image'
import cabin from '../assets/cabin.jpg'

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] xxl:h-[700px]'>
        <Image 
            src={cabin}
            layout="fill"
            objectFit='cover'
        />
        <div className='absolute text-white top-1/3 w-full text-center'>
            <p className='text-sm sm:text-lg font-bold'>Not sure where to go? Perfect.</p>

            <button className='text-red-500 bg-white rounded-full px-10 py-4 font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>I &apos;m flexible</button>
        </div>

    </div>
  )
}

export default Banner