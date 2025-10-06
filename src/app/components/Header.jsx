'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setTimeout(() => setIsMenuVisible(false), 300); // Wait for animation to complete
    } else {
      setIsMenuVisible(true);
      setTimeout(() => setIsMenuOpen(true), 10); // Small delay to ensure CSS transition works
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setTimeout(() => setIsMenuVisible(false), 300);
  };

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        setIsMenuVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
  { name: 'Become a Partner', href: '/partner' }
];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 md:py-0">
        {/* Mobile layout */}
        <div className="md:hidden flex items-center justify-between">
          {/* Logo */}
           
            
  <Image
    src="/images/logo.png"       // Path to your logo in the public folder
    alt="SpiceMarket Logo"
    width={40}            // Width in pixels
    height={40}           // Height in pixels
    className="rounded-md object-cover"
  />
  <span className="ml-2 font-bold text-gray-800">Spic</span>
 
          
          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Cart icon with badge */}
            <div className="relative">
              <FiShoppingCart className="text-gray-700 text-xl" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                4
              </span>
            </div>
            
           
            
            {/* Mobile menu button */}
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </div>
        
        
        
        {/* Mobile navigation menu with smooth transition */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuVisible ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`border-t border-gray-200 pt-3 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <nav>
             <ul className="flex flex-col space-y-3">
      {menuItems.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            className="text-gray-700 hover:text-green-600 font-medium block py-1 px-2 rounded-md hover:bg-gray-50 transition-colors duration-200"
            onClick={closeMenu}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
            </nav>
          </div>
        </div>
        
        {/* Desktop layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
  <Image
    src="/images/logo.png"       // Path to your logo in the public folder
    alt="SpiceMarket Logo"
    width={100}            // Width in pixels
    height={100}           // Height in pixels
    className="rounded-md object-cover"
  />
  <span className="ml-2 font-bold text-gray-800">Swastiks</span>
</div>
          
       
          
          {/* Navigation and actions */}
          <div className="flex items-center space-x-6">
            {/* Navigation links */}
            <nav>
              <ul className="flex space-x-6">
                 {menuItems.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            className="text-gray-700 hover:text-green-600 font-medium block py-1 px-2 rounded-md hover:bg-gray-50 transition-colors duration-200"
            onClick={closeMenu}
          >
            {item.name}
          </Link>
          
        </li>
      ))}
              </ul>
            </nav>
            
            {/* Cart icon with badge */}
            <div className="relative">
              <FiShoppingCart className="text-gray-700 text-xl" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                4
              </span>
            </div>
            
             
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;