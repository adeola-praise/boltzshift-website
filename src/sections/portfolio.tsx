import React from 'react'
import { work } from '../constants/data'
import { Link } from 'react-router'
import { Button } from 'antd'

const Portfolio:React.FC = () => {
  return (
    <div className='text-white w-full py-20 mt-6'>
      <div className='w-full text-center'>
        <h3 className='heading_4'>SELECTED WORK</h3>
        <p className='text-gray-400'>Our exceptional design services</p>
      </div>

      <div className='flex flex-wrap gap-12 justify-center mt-16 px-6 md:px-0'>
        {work.map((data, index) => (
            <div key={index} className='space-y-3 md:w-[300px] lg:w-[400px] xl:w-[500px]'>
              <img src={data.image} alt='fortknox' className='w-full'/>
              <Link to="/">
                <h4 className='heading_5 hover:underline'>{data.title}</h4>
                <p className='text-gray-400'>{data.category}</p>
              </Link>
            </div>
        ))}
      </div>

      <div className='w-full text-center mt-12'>
        <Button type='primary' className='text-black w-[130px] h-[56px] rounded-none font-semibold hover:bg-yellow-600 transition hover:text-black'>View More</Button>
      </div>
    </div>
  )
}

export default Portfolio