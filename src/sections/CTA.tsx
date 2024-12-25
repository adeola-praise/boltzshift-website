import React from 'react';
import { RightCircle } from '../assets';

const CTA: React.FC = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-8">
      <div className="bg-primary text-black text-center flex flex-col items-center justify-center p-6 sm:p-12 space-y-6 shadow-lg">
        {/* Heading */}
        <h4 className="heading_4 max-w-full sm:max-w-[400px] text-lg sm:text-xl lg:text-2xl">
          Innovative Web, Mobile & Product Solutions
        </h4>

        {/* Subtext */}
        <p className="max-w-full sm:max-w-[700px] text-sm sm:text-base lg:text-lg leading-relaxed">
          Join today and experience the difference. Don't miss out on the opportunity to transform your business. Let's grow together.
        </p>

        {/* Call-to-Action Button */}
        <button className="h-[48px] sm:h-[56px] w-[160px] sm:w-[190px] bg-black text-white hover:bg-[#141414] transition rounded-md text-sm sm:text-base font-semibold">
          Get a free quotation
        </button>

        {/* Additional Features */}
        <div className="flex flex-wrap justify-center gap-4">
          <p className="flex items-center text-sm sm:text-base">
            <img
              src={RightCircle}
              alt="right circle"
              className="mr-2 w-4 h-4 sm:w-6 sm:h-6"
            />
            Affordable Plans for All
          </p>
          <p className="flex items-center text-sm sm:text-base">
            <img
              src={RightCircle}
              alt="right circle"
              className="mr-2 w-4 h-4 sm:w-6 sm:h-6"
            />
            Secure and Reliable
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
