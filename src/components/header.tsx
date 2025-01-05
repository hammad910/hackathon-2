import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white">
      {/* Top Section */}
      <div className="flex items-center justify-between border-b py-4 px-4 md:px-10">
        {/* Left Icon */}
        <div className="flex-1 flex justify-start">
          <button className="text-gray-600 hover:text-gray-900">
            <CiSearch size={25} />
          </button>
        </div>

        {/* Logo */}
        <div className="flex-1 text-center">
          <h1 className="text-xl font-semibold">Avion</h1>
        </div>

        {/* Right Icon */}
        <div className="flex-1 flex gap-2 justify-end">
          <button className="text-gray-600 hover:text-gray-900">
            <IoCartOutline size={25} />
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <FaRegUserCircle size={20} />
          </button>
        </div>
      </div>

      {/* Bottom Menu Section */}
      <nav className="flex justify-center space-x-6 py-6">
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Plant pots
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Ceramics
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Tables
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Chairs
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Crockery
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Tableware
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Cutlery
        </a>
      </nav>
    </header>
  );
};

export default Header;
