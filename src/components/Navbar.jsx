import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const navItmes = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Company", href: "#company" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <nav className="fixed w-full bg-gray top-0 left-0 right-0 z-50">
      <div className="mx-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-3 md:py-4 flex items-center justify-between">
        {/* { logo */}
        <div className="flex items-center font-bold text-xl sm:text-2xl text-gray-900">
          <div className="w-8 h-8 sm:h-10 sm:w-10 flex justify-center items-center rounded-full border-3 sm:border-4 border-pink-600 text-pink-600 mr-1">
            P
          </div>
          <span>
            ro <span className="text-yellow-500">Services</span>
          </span>
        </div>
        {/* {item} */}
        <ul className="hidden md:flex item center gap-6 lg:gap-8 text-gray-700 font-medium">
          {navItmes.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className="hover:text-green-500 cursor-pointer transition-colors"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
        {/* {button} */}
        <div className="hidden md:block">
          <button className="px-4 py-2 sm:px-5 sm:py-2 rounded-lg sm:rounde-xl font-medium text-white bg-pink-500 hover:bg-pink-600 transition-colors">
            Get Started
          </button>
        </div>
        {/* {Menu} */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white text-gray-600 shadow-lg border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            {navItmes.map(({ name, href }) => (
              <a
                key={name}
                herf={href}
                className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg hover:text-green-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </a>
            ))}
            <div>
              <button className="w-full px-4 py-2 rounded-lg font-medium text-white bg-pink-500 hover:bg-pink-600 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
