import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <a href="#hero" className="text-2xl font-bold text-blue-600">
          <div className="text-2xl font-bold text-blue-500">Mesele Solomon</div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-blue-700">
          <a href="#hero" className="hover:text-blue-600 transition">
            Home
          </a>
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="#projects" className="hover:text-blue-600 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a href="#hero" className="block px-4 py-2 hover:bg-gray-100">
            Home
          </a>
          <a href="#about" className="block px-4 py-2 hover:bg-gray-100">
            About
          </a>
          <a href="#projects" className="block px-4 py-2 hover:bg-gray-100">
            Projects
          </a>
          <a href="#contact" className="block px-4 py-2 hover:bg-gray-100">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
