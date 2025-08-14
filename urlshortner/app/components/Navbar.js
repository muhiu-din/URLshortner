'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-500 px-6 text-white h-14 flex items-center justify-between">
      {/* Logo */}
      <div>
       <Link href="/"><h1 className="font-bold text-2xl">ZapLink</h1></Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden  md:flex flex-row items-center gap-4 font-semibold">
        <Link href="/"><li>Home</li></Link>
        <Link href="/About"><li>About</li></Link>
        <Link href="/Shorten"><li>Shorten</li></Link>
        <Link href="/Contact"><li>Contact us</li></Link>
        <li className="flex gap-2">
          <Link href="/Shorten">
            <button className="bg-purple-400 hover:bg-purple-600 p-3 py-1 rounded-lg">
              Try Now
            </button>
          </Link>
          <Link target="_blank" href="https://github.com/muhiu-din">
            <button className="bg-purple-400 hover:bg-purple-600 p-3 py-1 rounded-lg">
              Github
            </button>
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-purple-500 flex flex-col items-center gap-4 py-4 font-semibold md:hidden z-50">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/About" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/Shorten" onClick={() => setIsOpen(false)}>Shorten</Link>
          <Link href="/Contact" onClick={() => setIsOpen(false)}>Contact us</Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
