import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Hansanand ji Maharaj', path: '/hansanand' },
    { name: 'Teachings', path: '/teachings' },
    { name: 'Books', path: '/books' },
    { name: 'Audio Books', path: '/audio-books' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Logo Section */}
        <div className="flex justify-center items-center py-4">
          <NavLink to="/" className="flex items-center cursor-pointer">
            {/* <img 
              src="/lovable-uploads/3a9be7c0-f13c-40cc-b97d-8b2cda3bc3d3.png" 
              alt="Brand Logo" 
              className="h-12 w-12 rounded-full"
            /> */}
            <span className="ml-3 text-2xl font-semibold text-gray-900">सत्य की ओर</span>
          </NavLink>
        </div>
        
        {/* Navigation Items */}
        <div className="border-t border-gray-100">
          <div className="flex justify-center">
            <div className="flex items-center space-x-8 py-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
