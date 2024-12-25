import React from 'react';
import { AboutImage, Star } from '../assets';
import { achievement } from '../constants/data';

const About: React.FC = () => {
  return (
    <div className="text-white w-full lg:mt-16 px-4 sm:px-8 lg:px-12">
      <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
        {/* Left Section */}
        <div className="lg:max-w-[500px] space-y-6">
          <h3 className="heading_4 md:heading_3 text-left lg:text-left">ABOUT THE BOLTZSHIFT AGENCY</h3>
          <div className="flex justify-start">
            <img src={Star} alt="start" />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:max-w-[450px] text-[18px] sm:text-[20px] lg:text-[18px] text-gray-300 leading-[30px] sm:leading-[36px] lg:leading-relaxed space-y-6 lg:space-y-10">
          <p>
            Boltzshift is a distinguished design and development agency based in the United Kingdom, known for our commitment to crafting exceptional digital experiences.
          </p>
          <p>
            Since 2018 Boltzshift has been reshaping the web & mobile apps with top-notch design and the power of no code.
          </p>
        </div>
      </div>

      {/* About Image */}
      <img src={AboutImage} alt="about us" className="w-full h-auto mt-8 sm:mt-12 lg:mt-16" />

      {/* Key Facts Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0 px-4 sm:px-8 lg:px-6 mt-10">
        {/* Title */}
        <h3 className="heading_4 md:heading_4 text-left lg:w-[400px]">
          GET ACQUAINTED WITH OUR KEY FACTS
        </h3>

        {/* Achievements */}
        <div className="flex justify-center lg:justify-between lg:w-[50%] gap-6">
          {achievement.map((data, index) => (
            <div key={index} className="text-center">
              <h4 className="heading_5 md:heading_4 text-[20px] sm:text-[24px]">
                {data.stat}
                <span className="text-primary">{data.measure}</span>
              </h4>
              <p className="text-gray-400 text-[14px] sm:text-[16px] lg:text-[18px]">
                {data.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
