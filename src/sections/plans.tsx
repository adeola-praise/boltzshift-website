import React from 'react'
import { pricingPlan } from '../constants/data'
import PlanCard from '../components/plan-card'

const Plans: React.FC = () => {
  return (
    <div className='text-white text-center mt-16'>
      <h4 className='heading_4'>CHOOSE YOUR PLAN</h4>
      <p>Consign offers a number of pricing plans to help you find one that fits your business needs best</p>

      <div className='flex justify-center flex-wrap lg:flex-nowrap gap-6 p-16'>
        {pricingPlan.map((data, index) => (
          <PlanCard 
            key={index}
            plan={data.plan}
            price={data.price}
            bgColor={data.bgColor}
            buttonBg={data.buttonBg}
            buttonText={data.buttonText}
            buttonHover={data.buttonHover}
            features={data.features}
          />
        ))}
      </div>
    </div>
  )
}

export default Plans