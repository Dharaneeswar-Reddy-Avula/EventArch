// src/components/Navbar.jsx
import React, { useState } from "react";
import logo from "../assets/logoe.png";
import { FaCircleUser } from "react-icons/fa6";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice"; // Adjust the import path

const backendUrl = import.meta.env.VITE_API_BASE_URL;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fix useSelector syntax
  const { isLoggedIn, user } = useSelector((state) => state.auth || { isLoggedIn: false, user: null });
  console.log("auth state:", useSelector((state) => state.auth));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      // Call backend logout endpoint
      await axios.post(
        `${backendUrl}/auth/logout`,
        {},
        { withCredentials: true }
      );
      dispatch(logout()); // Clear auth state in Redux
      toast.success("Logged out successfully");
      navigate("/signIn");
    } catch (error) {
      toast.error(
        error.response?.data?.message || error.message || "Something went wrong"
      );
    }
  };

  const sendVerificationOtp = async () => {
    try {
      const res = await axios.post(`${backendUrl}/auth/sendVerifyOtp`, {}, { withCredentials: true });
      if (res.data.success) {
        navigate("/verifyEmail");
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message || "Failed to send OTP");
    }
  };

  return (
    <nav className="text-white p-2 backdrop-blur-lg bg-white/10 rounded-lg shadow-lg saturate-200 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} className="h-16 w-15" loading="lazy" alt="Event Architects Logo" />
          <h3 className="text-3xl font-semibold hidden md:block">
            Event <span className="text-pink-600">Architects</span>
          </h3>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-purple-400 font-semibold">
            Home
          </Link>
          <Link to="/about" className="hover:text-purple-400 font-semibold">
            About Us
          </Link>
          <Link to="/events" className="hover:text-purple-400 font-semibold">
            Events
          </Link>
          <Link to="/workshops" className="hover:text-purple-400 font-semibold">
            Workshops
          </Link>
          <Link to="/sponsors" className="hover:text-purple-400 font-semibold">
            Sponsors
          </Link>
          <Link to="/contact" className="hover:text-purple-400 font-semibold">
            Contact Us
          </Link>
        </div>

        <div className="flex gap-[30px]">
          {isLoggedIn && user ? (
            <div className="w-8 h-8 flex justify-center items-center rounded-full bg-black text-white relative group">
              <span>{user.name ? user.name[0].toUpperCase() : <FaCircleUser className="text-2xl" />}</span>
              <div className="absolute w-[150px] hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10">
                <ul className="bg-white p-3">
                  {!user.isVerified && (
                    <li
                      className="cursor-pointer border-b-2 border-b-black py-1"
                      onClick={sendVerificationOtp}
                    >
                      Verify Email
                    </li>
                  )}
                  <li
                    className="cursor-pointer border-b-2 border-b-black py-1"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link
              to="/signIn"
              className="px-4 py-2 rounded-lg cursor-pointer text-white backdrop-blur-xl bg-opacity-30 saturate-200 md:flex items-center text-md font-semibold hidden"
            >
              Login
            </Link>
          )}
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
            <Link to="/" className="hover:text-purple-400 border-b-[1px]">
              Home
            </Link>
            <Link to="/about" className="hover:text-purple-400">
              About Us
            </Link>
            <Link to="/events" className="hover:text-purple-400">
              Events
            </Link>
            <Link to="/workshops" className="hover:text-purple-400">
              Workshops
            </Link>
            <Link to="/sponsors" className="hover:text-purple-400">
              Sponsors
            </Link>
            <Link to="/contact" className="hover:text-purple-400">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;