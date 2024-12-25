import React from 'react'
import { process } from '../constants/data'
import ProcessCard from '../components/process-card'

const Processes: React.FC = () => {
  return (
    <div className='w-full text-white p-8 mt-16'>
      <p className='text-center heading_4'>OUR PROCESS</p>

      <div className='flex-wrap gap-4 lg:flex-nowrap justify-center flex lg:justify-between mt-16'>
        {process.map((data) => (
          <ProcessCard 
            key={data.index}
            index={data.index}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Processes