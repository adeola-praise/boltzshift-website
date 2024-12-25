import React from 'react'

type ProcessCardProps = {
  index: string;
  title: string;
  description: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({index, title, description}) => {
  return (
    <div className='bg-[#18150a] w-[390px] md:w-[340px] lg:w-[400px] h-[300px] p-6 space-y-4'>
          <p className='heading_3 text-primary'>{index}</p>
          <div className='space-y-4'>
            <p className='heading_4'>{title}</p>
            <p>{description}</p>
          </div>
    </div>
  )
}

export default ProcessCard