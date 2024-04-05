import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container flex justify-around items-center p-4 mx-auto">
        <h1 className="text-blue-700 text-lg font-bold">Software</h1>
        <div className="flex items-center">
          <ul className={`hidden md:flex`}>
            <li className="mr-4"><a href="#" className="text-blue-700">Software</a></li>
            <li className="mr-4"><a href="#" className="text-blue-700">Pricing</a></li>
            <li className="mr-4"><a href="#" className="text-blue-700">Resources</a></li>
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4 hidden md:block">Get Demo</button>
          <button className=" bg-orange-500 text-white px-4 py-2 rounded-md hidden md:block">Get Started Free</button>
          <button className="md:hidden" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      <ul className={`bg-white p-4 ${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <li className="mb-2"><a href="#" className="text-blue-700">Software</a></li>
        <li className="mb-2"><a href="#" className="text-blue-700">Pricing</a></li>
        <li className="mb-2"><a href="#" className="text-blue-700">Resources</a></li>
        <li><button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full mt-4">Get Demo</button></li>
        <li><button className="bg-green-500 text-white px-4 py-2 rounded-md w-full mt-2">Get Started Free</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
 