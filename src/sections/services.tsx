import React, { useState } from 'react';
import { brand, service } from '../constants/data';
import ServiceCard from '../components/service-card';
import Marquee from 'react-fast-marquee';

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-10">
      <div className="w-full flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-16">
        {/* Text Section */}
        <div className="text-white lg:w-[40%] space-y-4">
          <h4 className="heading_4 text-center lg:text-left">KNOW OUR SERVICES</h4>
          <p className="text-gray-400 text-center lg:text-left">
            Our exceptional design services
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-6">
          {service.map((data, index) => (
            <ServiceCard
              key={index}
              icon={data.icon}
              iconBlack={data.iconBlack}
              title={data.title}
              description={data.description}
              isActive={activeIndex === index} // Check if the card is active
              onMouseEnter={() => setActiveIndex(index)} // Set active card on hover
            />
          ))}
        </div>
      </div>

      <div className='text-white mt-16 text-center space-y-8'>
        <p>Proudly serving some of the top global companies</p>
        
        <div className="text-white mb-8">
          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={true}
            direction="left" 
          >
            {brand.map((company, index) => (
              <img 
                key={index}
                src={company.logo}
                alt={company.alt}
                className='mx-6'
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Services;
