import React from 'react';
import { Creative, DirectionArrow, Videoreel } from '../assets';

const Hero: React.FC = () => {
  return (
    <div className="text-white text-center flex flex-col items-center justify-center min-h-screen">
      {/* Main Heading */}
      <div className='lg:flex items-center max-w-[1200px]'>
        <div className='flex items-center'>
          <h2 className='heading_3 md:heading_1 leading-relaxed'>WE ARE</h2>
          <img src={Creative} alt="creative" className="w-[116px] h-[58px] md:w-[150px] md:h-[70px] mx-4" />
        </div>
        <h2 className='heading_3 md:mt-[-30px] lg:mt-0 md:heading_1 leading-relaxed'>CREATIVE</h2>
      </div>
      {/* <h2 className="heading_3 md:heading_1 flex items-center leading-relaxed">
        WE ARE{' '}
        <span className=" ">
          <img src={Creative} alt="creative" className="w-[116px] h-[58px] md:w-[150px] md:h-[70px] mx-4" />
        </span>{' '} <br className='md:hidden'/>
        CREATIVE
      </h2> */}

      {/* Sub-heading with Video Reel */}
      <div className="lg:flex items-center justify-center space-x-8 space-y-2 md:mt-[-50px]">
        <h3 className="text-[48px] md:text-[96px] md:mt-4 lg:mt-0 font-thin">AGENCIES</h3>
        <div>
        <img
          src={Videoreel}
          alt="video reel"
          className="w-[140px] h-[58px] lg:w-[170px] md:h-[70px] cursor-pointer md:w-[200px] "
        />
        </div>
        <div className="text-left text-gray-400 space-y-2 leading-tight hidden lg:block">
          <p className="text-[20px] font-medium">Award-winning studio</p>
          <p className="text-[20px] font-medium">Based in San Francisco</p>
        </div>
      </div>

      {/* Subtext */}
      <p className="mt-8 md:mt-10 sm:px-8 lg:px-0 lg:mt-2 heading_6 max-w-[900px]">
        Boltzshift Studio is a design & develop agency of the future with 120+ successful projects in their portfolio.
      </p>

      {/* Call-to-Action Button */}
      <button className="mt-10 bg-primary hover:bg-yellow-600 text-black font-semibold text-[18px] w-[180px] h-[56px] flex justify-center items-center space-x-2">
        <span>Book a demo</span>
        <img src={DirectionArrow} alt='direction arrow' className='w-[18px] h-[18px]'/>
      </button>
    </div>
  );
};

export default Hero;
