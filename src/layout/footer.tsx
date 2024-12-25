import React from 'react';
import { Facebook, Instagram, Logo2, Twitter, YouTube } from '../assets';
import { Link } from 'react-router';

const Footer: React.FC = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16">
      <div className="bg-white h-auto xl:h-[350px] text-black text-center flex flex-col xl:flex-row justify-between p-6 sm:p-12 shadow-lg">
        {/* Logo and Socials Section */}
        <div className="flex flex-col justify-between space-y-10 w-full xl:w-[40%] text-center xl:text-left mb-6 xl:mb-0">
          <img src={Logo2} alt="logo" className="w-28 sm:w-36 mx-auto xl:mx-0" />
          <div className="flex flex-col items-center xl:items-start space-y-2">
            <p className="font-semibold">Follow us</p>
            <div className="flex space-x-3">
              <img src={Twitter} alt="Twitter" className="w-6 h-6" />
              <img src={Instagram} alt="Instagram" className="w-6 h-6" />
              <img src={YouTube} alt="YouTube" className="w-6 h-6" />
              <img src={Facebook} alt="Facebook" className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap xl:flex-nowrap justify-between w-full xl:w-[60%] gap-6 xl:gap-12 text-sm sm:text-base">
          {/* Column 1 */}
          <div className="flex flex-col space-y-2 text-left">
            <Link to="/">About us</Link>
            <Link to="/">Features</Link>
            <Link to="/">Services</Link>
            <Link to="/">Blogs</Link>
            <Link to="/">Contact us</Link>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-2 text-left">
            <p>Integrations</p>
            <p>Careers</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Cookie Policy</p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col space-y-6 text-left">
            <div className="space-y-2">
              <p>+1 (0) 911 18 27 16</p>
              <p>INFO@BOLTZSHIFT.COM</p>
            </div>
            <div className="space-y-2">
              <p>Based in San Francisco</p>
              <p>United Kingdom</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <p className="mt-6 text-sm">©2024 All Rights Reserved</p>
    </div>
  );
};

export default Footer;
