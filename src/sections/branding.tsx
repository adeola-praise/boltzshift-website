import React from 'react';
import Marquee from 'react-fast-marquee';
import { brandProcess } from '../constants/data';

const Branding: React.FC = () => {
  return (
    <div className="branding-marquee text-white mb-8">
      <Marquee
        gradient={false} // Disable gradient effect
        speed={50} // Adjust speed
        pauseOnHover={true} // Pause the marquee on hover
        direction="left" // Set marquee direction
      >
        {brandProcess.map((process, index) => (
          <div key={index} className="flex items-end mx-6">
            <span className='font-thin text-[14px]'>{process.index}</span> <span className="heading_4">{process.text}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Branding;
