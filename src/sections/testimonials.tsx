import React from 'react'
import { review } from '../constants/data'
import ReviewCard from '../components/review-card'

const Testimonials: React.FC = () => {
  return (
    <div className='mt-16'>
      <p className='w-full text-center heading_4 text-white'>TESTIMONIALS</p>

      <div className='flex flex-wrap xl:flex-nowrap justify-center xl:justify-between gap-8 lg:gap-0  xl:gap-6 px-4 xl:px-16 mt-20 lg:mt-10'>
        {review.map((data, index) => (
          <ReviewCard 
            key={index}
            text={data.text}
            name={data.name}
            image={data.image}
            role={data.role}
          />
        ))}
      </div>
    </div>
  )
}

export default Testimonials