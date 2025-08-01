'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[80px]">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                // src="/images/ordial-logo.svg"
                src="/images/cropped_20250801-152229_first_letter_ordial_logo.svg"
                alt="Ordial Logo"
                width={120} 
                height={40}
                className="h-20 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-900 hover:text-[#0f1e32] transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-900 hover:text-[#0f1e32] transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-[#0f1e32] transition-colors">
              About
            </Link>
            <Link href="/contact" className="bg-[#0f1e32] text-white px-4 py-2 rounded-lg hover:bg-[#0a1524] transition-colors">
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-[#0f1e32] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link href="/" className="block px-3 py-2 text-gray-900 hover:text-[#0f1e32]">
              Home
            </Link>
            <Link href="/services" className="block px-3 py-2 text-gray-900 hover:text-[#0f1e32]">
              Services
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-900 hover:text-[#0f1e32]">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-900 hover:text-[#0f1e32]">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}