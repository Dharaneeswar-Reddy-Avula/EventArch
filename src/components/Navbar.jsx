import React, { useState } from "react";
import logo from "../assets/logoe.png"
import { FaCircleUser } from "react-icons/fa6";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
<nav className="text-white p-2 backdrop-blur-lg bg-white/10 rounded-lg shadow-lg saturate-200 fixed w-full z-50">
<div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* Placeholder for the logo icon (you can replace with an actual image) */}
          <img src={logo} className="h-16 w-15" loading="lazy"/>
          <h3 className="text-3xl font-semibold hidden md:block">Event <span className="text-pink-600">Architects</span></h3>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative group">
            <Link to='/' className="flex items-center space-x-1 hover:text-purple-400 font-semibold">
              <span>Home</span>
             
            </Link>
          </div>
          <Link to="/about" className="hover:text-purple-400 font-semibold">
            About Us
          </Link>
          <div className="relative group">
            <Link to="/events" className="flex items-center space-x-1 hover:text-purple-400 font-semibold">
              <span>Events</span>
            </Link>
          </div>
          <div className="relative group">
            <Link to='/workshops' className="flex items-center space-x-1 hover:text-purple-400 font-semibold">
              <span>Workshops</span>
             
            </Link>
          </div>
       
          <div className="relative group">
            <Link to="/sponsors" className="flex items-center space-x-1 hover:text-purple-400 font-semibold">
              <span>Sponsors</span>
              
            </Link>
          </div>
          <Link to="/contact" className="hover:text-purple-400 font-semibold">
            Contact Us
          </Link>
          
        </div>
        <div className="flex gap-[30px]">
        <div className="px-4 py-2 rounded-lg hidden  text-white backdrop-blur-xl bg-opacity-30 saturate-200 md:flex items-center text-md font-semibold">
  Login
</div>

<div className="px-4 py-2 rounded-lg text-white backdrop-blur-xl bg-opacity-30 saturate-200 hidden md:flex items-center text-md font-semibold">
Register
                </div>
            <div className="user mt-2 hidden md:block">
            <FaCircleUser className="text-2xl"/>
            </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-4 items-center">
            <Link to="/" className="flex items-center space-x-1 hover:text-purple-400 border-b-[1px]">
              <span>Home</span>
           
            </Link>
            <Link to="/about" className="hover:text-purple-400">
              About Us
            </Link>
            <Link to="/events" className="flex items-center space-x-1 hover:text-purple-400">
              <span>Events</span>
            
            </Link>
            <Link to="/workshops" className="flex items-center space-x-1 hover:text-purple-400">
              <span>Workshops</span>
             
            </Link>
            <Link to="/sponsors" className="flex items-center space-x-1 hover:text-purple-400">
              <span>Sponsors</span>
             
            </Link>
            
            <Link to='/contact' className="hover:text-purple-400">
              Contact Us
            </Link>
           
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;