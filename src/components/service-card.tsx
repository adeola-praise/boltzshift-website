import React from 'react';
import { DirectionArrow } from '../assets';

type ServiceCardProps = {
  icon: string;
  iconBlack: string;
  title: string;
  description: string;
  isActive: boolean; // Prop to determine if the card is active
  onMouseEnter: () => void; // Function to handle hover
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  iconBlack,
  title,
  description,
  isActive,
  onMouseEnter,
}) => {
  return (
    <div
      className={`group w-full sm:w-[300px] md:w-[320px] lg:w-[392px] h-auto p-6 space-y-16 transition-all duration-300 ${
        isActive ? 'bg-primary text-black' : 'bg-[#39393b] text-white hover:bg-primary hover:text-black'
      }`}
      onMouseEnter={onMouseEnter} // Trigger the hover state
    >
      {/* Top Section */}
      <div className="flex justify-between">
        {/* Design Icon */}
        <img
          src={isActive ? iconBlack : icon}
          alt="design"
          className="w-[48px] sm:w-[64px] h-[48px] sm:h-[64px]"
        />
        {/* Direction Arrow */}
        <img
          src={DirectionArrow}
          alt="direction arrow"
          className={`w-[16px] sm:w-[24px] h-[16px] sm:h-[24px] ${
            isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          } transition-opacity duration-300`}
        />
      </div>

      {/* Content Section */}
      <div className="max-w-[340px]">
        <h5
          className={`heading_4 text-[18px] sm:text-[20px] transition-all duration-300 ${
            isActive ? 'text-black' : 'group-hover:text-black'
          }`}
        >
          {title}
        </h5>
        <p
          className={`mt-4 text-[14px] sm:text-[16px] transition-all duration-300 ${
            isActive ? 'text-black' : 'text-gray-400 group-hover:text-black'
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
