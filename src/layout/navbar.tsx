import React from 'react';
import { Logo } from '../assets';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'antd';

const Navbar: React.FC = () => {
  const location = useLocation(); // Get the current route to handle active links

  return (
    <div className="w-full h-[70px] px-4 sm:px-6 md:px-10 flex justify-between items-center">
      {/* Logo and Brand Name */}
      <Link to="/" className="flex text-white space-x-3 items-center">
        <img src={Logo} alt="logo" className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]" />
        <span className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
          Boltzshift
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden sm:flex bg-white px-2 h-[40px] sm:h-[50px] items-center space-x-4 sm:space-x-6 lg:space-x-8">
        {[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
          { name: 'Works', path: '/works' },
          { name: 'Blog', path: '/blog' },
          { name: 'Contact', path: '/contact' },
        ].map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`px-2 sm:px-4 py-1 sm:py-2 font-semibold text-[14px] sm:text-[16px] transition ${
              location.pathname === link.path
                ? 'bg-primary text-black rounded-md'
                : 'text-black hover:bg-primary hover:text-black rounded-md'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Button */}
      <Button
        type="primary"
        className="hidden sm:block w-[120px] sm:w-[150px] h-[40px] sm:h-[50px] bg-primary text-black font-semibold rounded-none hover:bg-yellow-600 hover:text-black transition"
      >
        Get in touch
      </Button>

      {/* Mobile Menu Button */}
      <div className="sm:hidden flex items-center text-primary cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
