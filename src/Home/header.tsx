import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaMapMarkerAlt, FaGlobe, FaSearch } from "react-icons/fa";
import logo2 from "../assets/logo.png"; // Citi logo image

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b shadow-sm fixed top-0 z-50">
      {/* Top Section */}
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left: Logo + FDIC */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src={logo2} alt="Logo" width="80" />
          </Link>
          {/* <div className="hidden md:block text-xs text-gray-700 leading-tight max-w-[250px]">
            <span className="font-bold">FDIC</span> Insured – Backed by the full
            faith and credit of the U.S. Government
            <br />
            <span className="text-gray-500">Citibank, N.A.</span>
          </div> */}
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
          <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
            <FaMapMarkerAlt size={14} />
            <span>ATM / BRANCH</span>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
            <FaGlobe size={14} />
            {/* <span>Arabic (العربية)</span> */}
          </div>
          <Link to="/login">
            <button className="border-2 text-xs border-blue-900 text-blue-900 px-4 py-1 rounded-full hover:bg-blue-50">
              LOG-IN
            </button>
          </Link>
        </div>

        {/* Mobile Right Side */}
        <div className="flex items-center space-x-4 md:hidden">
         
         <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
            <FaGlobe size={14} />
            {/* <span>(العربية)</span> */}
          </div>
          
           <Link to="/login">
            <button className="border-2 text-sm border-blue-900 text-blue-900 px-3 py-1 rounded-full hover:bg-blue-50">
              LOG-IN
            </button>
          </Link>
          <button
            className="text-gray-700 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Desktop Bottom Nav */}
      <nav className="hidden md:flex items-center justify-between bg-gray-50 px-6 py-2 text-sm font-semibold">
        <div className="flex space-x-6">
          {[
            "Credit Cards",
            "Banking",
            "Lending",
            "Investing",
            "Wealth Management",
            "Open an Account →",
          ].map((item) => (
            <Link
              key={item}
              to="/"
              className="text-blue-900 hover:text-blue-600"
            >
              {item}
            </Link>
          ))}
        </div>

        <Link
          to="/help"
          className="flex items-center space-x-1 text-blue-700 hover:text-blue-500"
        >
          <FaSearch size={14} />
          <span>How can we help?</span>
        </Link>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 shadow-md py-4 px-6">
          <nav className="flex flex-col space-y-4 text-sm font-semibold">
            {[
              "Credit Cards",
              "Banking",
              "Lending",
              "Investing",
              "Wealth Management",
              "Open an Account →",
            ].map((item) => (
              <Link
                key={item}
                to="/"
                className="text-blue-900 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              to="/help"
              className="flex items-center space-x-1 text-blue-700 hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              <FaSearch size={14} />
              <span>How can we help?</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
