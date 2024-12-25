import React from 'react'
import { Design, DirectionArrow } from '../assets'

const Services:React.FC = () => {
  return (
    <div>
      <div className='text-white'>
        <h4 className='heading_4'>KNOW OUR SERVICES</h4>
        <p className='text-gray-400'>Our exceptional design services</p>
      </div>

      <div>
        <div className='w-[392px] h-[368px] bg-[#39393b] p-6 space-y-16 text-white hover:text-black hover:bg-primary'>
          <div className='flex justify-between'>
            <img src={Design} alt='design' className='w-[64px] h-[64px]'/>
            <img src={DirectionArrow} alt='direction arrow' className='hidden hover:block'/>
          </div>
          <div className='max-w-[340px]'>
            <h5 className='heading_4'>Branding</h5>
            <p className='text-gray-400 mt-4 hover:text-black'>I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services