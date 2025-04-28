import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#111111]/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-white text-xl font-bold">
            Marco Antônio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive("/")
                  ? "text-green-400"
                  : "text-gray-300 hover:text-green-400"
              }`}
            >
              Home
            </Link>
            <Link
              to="/works"
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive("/works")
                  ? "text-green-400"
                  : "text-gray-300 hover:text-green-400"
              }`}
            >
              Works
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-green-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive("/")
                    ? "text-green-400"
                    : "text-gray-300 hover:text-green-400"
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/works"
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive("/works")
                    ? "text-green-400"
                    : "text-gray-300 hover:text-green-400"
                }`}
                onClick={closeMenu}
              >
                Works
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
