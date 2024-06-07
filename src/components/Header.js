import React, { useState } from 'react';
import { FaStar, FaRocket } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FiCode } from 'react-icons/fi';

const Header = () => {
  const [activeNav, setActiveNav] = useState(null);
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleNavClick = (navItem) => {
    if (activeNav === navItem) {
      setIsCardOpen(!isCardOpen);
    } else {
      setActiveNav(navItem);
      setIsCardOpen(true);
    }
  };

  return (
    <div className="relative flex justify-between items-center p-5 bg-blue-600 text-white">
      <div className="flex items-center ml-8">
        <FaStar className="w-6 h-6 mr-2" />
        <div className="text-2xl font-bold">ARAGON</div>
      </div>
      <nav className="flex items-center space-x-6 ml-8 mr-auto">
        {['Products', 'Project', 'Resources', 'Ecosystem'].map((item) => (
          <div
            key={item}
            className={`relative cursor-pointer ${activeNav === item ? 'border-b-2 border-white' : ''}`}
            onClick={() => handleNavClick(item)}
          >
            <div className="flex items-center">
              <span className="hover:border-b-2 hover:border-white">{item}</span>
              <MdKeyboardArrowDown className="w-4 h-4 ml-1" />
            </div>
            {activeNav === item && isCardOpen && (
              <div className="absolute top-8 left-0 bg-white text-black p-5 rounded shadow-lg z-10 w-80">
                <p>{item} content goes here.</p>
                {/* Add specific content for each nav item */}
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="flex">
        <button className="flex items-center px-6 py-3 ml-2 bg-white text-blue-600 rounded-lg hover:bg-gray-200">
          <FaRocket className="mr-2" />
          Launch your DAO
        </button>
        <button className="flex items-center px-6 py-3 ml-2 bg-blue-600 text-white border border-white  rounded-lg hover:bg-blue-700">
          <FiCode className="mr-2" />
          Developers
        </button>
      </div>
    </div>
  );
};

export default Header;
