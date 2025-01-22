'use client';
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { sanityDataFetch } from "@/sanity/lib/fetchData";
import { Categories } from "@/sanity/lib/queries";

// Define the type for categories
type Category = {
  name: string;
};

const Header: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]); // Specify the type for categories

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data: Category[] = await sanityDataFetch({ query: Categories });
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

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
        <Link href="/" className="flex-1 text-center">
          <h1 className="text-xl font-semibold">Avion</h1>
        </Link>

        {/* Right Icons */}
        <div className="flex-1 flex gap-2 justify-end">
          <Link href="/shopping">
            <button className="hidden md:flex text-gray-600 hover:text-gray-900">
              <IoCartOutline size={25} />
            </button>
          </Link>
          <button className="hidden md:flex text-gray-600 hover:text-gray-900">
            <FaRegUserCircle size={22} />
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
        {categories.map((cat) => (
          <Link
            href="#"
            key={cat.name}
            className="text-gray-600 hover:text-gray-900"
          >
            {cat.name}
          </Link>
        ))}
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
          {categories.map((cat) => (
            <Link
              href="#"
              key={cat.name}
              className="text-gray-600 hover:text-gray-900"
            >
              {cat.name}
            </Link>
          ))}
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
