import React from 'react'
import { RightCircle } from '../assets';

type PricingPlanProps = {
  plan: string;
  price: string;
  bgColor: string;
  buttonBg: string;
  buttonText: string;
  buttonHover: string;
  features: string[];
}

const PlanCard: React.FC<PricingPlanProps> = ({plan, price, bgColor, buttonBg, buttonText, buttonHover, features}) => {
  return (
    <div className={`${"w-[390px] md:w-[300px] lg:w-[400px] h-[590px] text-black text-left px-6 py-10 space-y-6"} ${bgColor}`}>
          <p className='heading_6'>{plan}</p>
          <p className='heading_4'>{price}</p>
          <button className={`${"rounded-none border-none w-full h-[50px] font-semibold"} ${buttonHover} ${buttonBg} ${buttonText}`}>Get Started</button>
          <div className='space-y-6'>
            {features.map((data, index) => (
              <p key={index} className='flex'><img src={RightCircle} alt='right check' className='mr-2'/> {data}</p>
            ))}
          </div>
    </div>
  )
}

export default PlanCard