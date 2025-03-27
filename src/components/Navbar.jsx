"use client";
import { useState } from "react";
import { FaBars, FaSearch, FaTimes, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);

  const menuItems = [
    "Home", "News", "Sport", "Business", "Innovation", "Culture", "Arts",
    "Travel", "Earth", "Audio", "Video", "Live"
  ];

  return (
    <>
      {/* Sticky Navbar */}
      <nav className="w-full sticky p-[30px] top-0 left-0 bg-white shadow-md border-b border-gray-300 z-50">
        <div className=" mx-auto flex items-center justify-between py-4 px-4 md:px-6">
          {/* Left - Logo & Hamburger Menu (Mobile) */}
          <div className="flex items-center gap-4">
            <button onClick={() => setIsOpen(true)} className="text-gray-700 hover:text-black md:hidden">
              <FaBars className="w-6 h-6" />
            </button>
            <h1 className="lg:text-xl text-[20px] font-bold">NEWS DIGEST</h1>
          </div>

          {/* Right - Search & Logout */}
          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-black">
              <FaSearch className="lg:w-5 lg:h-5 w-[0] " />
            </button>
            <button className="bg-black text-white font-semibold px-4 py-2 t-[10px] lg:text-[20px] rounded-md">Logout</button>
          </div>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:block max-w-7xl mx-auto px-6">
          <ul className="flex flex-wrap gap-4 text-gray-900 font-semibold text-sm py-2 border-t border-gray-300">
            {menuItems.map((item) => (
              <li key={item} className="cursor-pointer hover:text-red-500 transition-all">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Sidebar Menu (Mobile) */}
      <div className={`fixed top-0 left-0 h-screen w-80 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-50 md:hidden`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-black">
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="p-4 space-y-3">
          {menuItems.map((item, index) => (
            <li key={item} className="border-b pb-2">
              <button 
                className="w-full flex justify-between items-center text-left font-semibold text-gray-700 hover:text-black transition-all"
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                {item}
                <FaChevronDown className={`transition-transform ${expanded === index ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Content */}
              {expanded === index && (
                <div className="mt-2 pl-4 text-sm text-gray-600">
                  <p>More about {item}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Background Overlay when Sidebar is Open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
