import { Link } from 'react-router-dom'
import logo from "../assets/travelvibesonly.jpg";
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full object-cover" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-bold">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/tours" className="hover:text-blue-600">Tours</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <Link to="/blog" className="hover:text-blue-600">Travel Blog</Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {/* Hamburger icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round" strokeLinejoin="round"
                d={isOpen
                  ? "M6 18L18 6M6 6l12 12" // X icon
                  : "M4 6h16M4 12h16M4 18h16"} // Hamburger icon
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 font-bold text-gray-700">
          <Link to="/" className="block px-2 hover:text-blue-600">Home</Link>
          <Link to="/tours" className="block px-2 hover:text-blue-600">Tours</Link>
          <Link to="/contact" className="block px-2 hover:text-blue-600">Contact</Link>
          <Link to="/blog" className="block px-2 hover:text-blue-600">Travel Blog</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;