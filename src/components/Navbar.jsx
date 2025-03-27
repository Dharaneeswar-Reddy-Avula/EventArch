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
          <img src={logo} className="h-16 w-15"/>
          <h3 className="text-3xl font-semibold">Event <span className="text-pink-600">Architects</span></h3>
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
            <Link to="/support" className="flex items-center space-x-1 hover:text-purple-400 font-semibold">
              <span>Support</span>
              
            </Link>
          </div>
          <Link to="/contact" className="hover:text-purple-400 font-semibold">
            Contact Us
          </Link>
          
        </div>
        <div className="flex gap-[30px]">
        <div className="px-4 py-2 rounded-lg  text-white backdrop-blur-xl bg-opacity-30 saturate-200 flex items-center text-md font-semibold">
  Login
</div>

<div className="px-4 py-2 rounded-lg text-white backdrop-blur-xl bg-opacity-30 saturate-200 flex items-center text-md font-semibold">
Register
                </div>
            <div className="user mt-2">
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
          <div className="flex flex-col space-y-4items-center">
            <a href="#" className="flex items-center space-x-1 hover:text-purple-400">
              <span>Home</span>
             
            </a>
            <a href="#" className="hover:text-purple-400">
              About Us
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-purple-400">
              <span>Features</span>
             
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-purple-400">
              <span>Projects</span>
             
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-purple-400">
              <span>Pages</span>
             
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-purple-400">
              <span>Blog</span>
             
            </a>
            <a href="#" className="hover:text-purple-400">
              Contact Us
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 text-center"
            >
              Apply For IDO
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;