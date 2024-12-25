import React, { useState, useEffect } from 'react';
import { brand, service } from '../constants/data';
import ServiceCard from '../components/service-card';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [duplicates, setDuplicates] = useState(3);

  useEffect(() => {
    const updateDuplicates = () => {
      const width = window.innerWidth;
      if (width >= 1536) setDuplicates(5); // 2xl screens
      else if (width >= 1280) setDuplicates(4); // xl screens
      else if (width >= 1024) setDuplicates(3); // lg screens
      else if (width >= 768) setDuplicates(2); // md screens
      else setDuplicates(1); // sm and smaller
    };

    updateDuplicates(); // Set duplicates on mount
    window.addEventListener('resize', updateDuplicates); // Update duplicates on resize
    return () => window.removeEventListener('resize', updateDuplicates); // Cleanup
  }, []);

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
        <div className="w-full overflow-hidden">
      <motion.div
        className="flex justify-between space-x-10 sm:space-x-16 md:space-x-20 lg:space-x-24"
        initial={{ x: '100%' }} // Start off-screen to the right
        animate={{ x: '-100%' }} // Move off-screen to the left
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 5, // Adjust for scroll speed
          ease: 'linear',
        }}
      >
        {/* Dynamically set duplicates */}
        {Array.from({ length: duplicates }, () => brand).flat().map((data, index) => (
          <img
            key={index}
            src={data.logo}
            alt={data.alt}
            className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] xl:w-[180px] h-auto"
          />
        ))}
      </motion.div>
    </div>

      </div>
    </div>
  );
};

export default Services;
