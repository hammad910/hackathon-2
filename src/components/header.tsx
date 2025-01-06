'use client'
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Link from "next/link";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-white relative">
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
          <button className="hidden md:flex text-gray-600 hover:text-gray-900">
            <IoCartOutline size={25} />
          </button>
          <button className="hidden md:flex text-gray-600 hover:text-gray-900">
            <FaRegUserCircle size={20} />
          </button>
          <button
            onClick={toggleSidebar}
            className="flex md:hidden text-gray-600 hover:text-gray-900"
          >
            <RxHamburgerMenu size={20} />
          </button>
        </div>
      </div>

      {/* Bottom Menu Section */}
      <nav className="hidden sm:flex justify-center space-x-6 py-6 bg-[#F9F9F9]">
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          Plant pots
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          Ceramics
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          Tables
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          Chairs
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          Crockery
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          Tableware
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          Cutlery
        </Link>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 z-50`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <RxCross2 size={30} />
        </button>
        <div className="flex flex-col space-y-4 p-6 mt-12 sm:mt-0">
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Plant pots
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Ceramics
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Tables
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Chairs
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Crockery
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Tableware
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Cutlery
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </header>
  );
};

export default Header;
