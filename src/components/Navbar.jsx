import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-16 bg-gradient-to-r from-red-500 to-orange-500 px-4 shadow-md">
      <img src="" alt="Logo" className="h-8 w-auto"/>
      <ul className="flex space-x-4 text-white font-medium">
        <li>Home</li>
        <li>Explore</li>
        <li>About Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;