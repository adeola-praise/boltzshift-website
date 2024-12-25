import React from 'react'
import { ConvertKitBlack, Quote } from '../assets';

type ReviewCardProps = {
  text: string;
  name: string;
  image: string;
  role: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({text, name, image, role}) => {
  return (
    <div className='w-[700px] lg:w-[850px] xl:w-[600px] sm:max-h-[650px] md:h-[400px] bg-white text-black px-8 md:px-6 py-8 space-y-6 relative lg:mt-20'>
          <img src={Quote} alt='quote' className='absolute top-[-35px] right-4 hidden xl:block'/>
          <h4 className='heading_4'>"{text}"</h4>
          <p>I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.</p>
          <div className='border-b border-gray-400'></div>

          <div className='space-y-6 md:space-y-0 md:flex justify-between items-center'>
            <div className='flex space-x-3 items-center'>
              <img src={image} alt='person'/>

              <div>
                <p className='font-semibold'>{name}</p>
                <p className='font-thin text-[14px]'>{role}</p>
              </div>
            </div>

            <img src={ConvertKitBlack} alt='convert kit'/>
          </div>
        </div>
  )
}

export default ReviewCard