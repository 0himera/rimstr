import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <button
            className={`xl:hidden text-2xl ${isScrolled ? 'text-black' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img
              src={isScrolled ? 'logo-b.png' : 'logo-w.png'}
              alt="Apartment Hotel"
              className="h-16"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-8">
            <a href="#about" className={`hover:text-gray-600 ${isScrolled ? 'text-black' : 'text-white'}`}>О Нас</a>
            <a href="#advantages" className={`hover:text-gray-600 ${isScrolled ? 'text-black' : 'text-white'}`}>Приемущества</a>
            <a href="#architecture" className={`hover:text-gray-600 ${isScrolled ? 'text-black' : 'text-white'}`}>Архитектура</a>
            <a href="#living-areas" className={`hover:text-gray-600 ${isScrolled ? 'text-black' : 'text-white'}`}>Жилые зоны</a>
            <a href="#floor-plans" className={`hover:text-gray-600 ${isScrolled ? 'text-black' : 'text-white'}`}>Планировки</a>
          </nav>

          {/* Phone Number */}
          <a
            href="tel:+78722622230"
            className={`hidden md:block hover:text-gray-600 ${isScrolled ? 'text-black' : 'text-white'}`}
          >
            +7 (872) 262-22-30
          </a>
        </div>

        {/* Mobile Navigation */}
        <nav className={`md:hidden fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center transition-transform duration-300 ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
          <a href="#about" className="text-gray-800 hover:text-gray-600 text-2xl mb-4" onClick={() => setIsOpen(false)}>О Нас</a>
          <a href="#advantages" className="text-gray-800 hover:text-gray-600 text-2xl mb-4" onClick={() => setIsOpen(false)}>Приемущества</a>
          <a href="#architecture" className="text-gray-800 hover:text-gray-600 text-2xl mb-4" onClick={() => setIsOpen(false)}>Архитектура</a>
          <a href="#living-areas" className="text-gray-800 hover:text-gray-600 text-2xl mb-4" onClick={() => setIsOpen(false)}>Жилые зоны</a>
          <a href="#floor-plans" className="text-gray-800 hover:text-gray-600 text-2xl mb-4" onClick={() => setIsOpen(false)}>Планировки</a>
          <a href="tel:+1234567890" className="text-gray-800 hover:text-gray-600 text-2xl mb-4">+7 (872) 262-22-30</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;