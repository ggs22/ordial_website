'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface NavigationProps {
  locale: string;
}

export default function Navigation({ locale }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const nav = {
    home: locale === 'fr' ? 'Accueil' : 'Home',
    services: locale === 'fr' ? 'Services' : 'Services', 
    about: locale === 'fr' ? 'À propos' : 'About',
    contact: locale === 'fr' ? 'Contact' : 'Contact'
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[90px]">
          <div className="flex items-center">
            <Link href={`/${locale}`} className="flex items-center">
              <Image 
                src="/images/ordial_first_letter_logo_white_bg.svg"
                alt="Ordial Logo"
                width={120} 
                height={40}
                className="h-20 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href={`/${locale}`} className="text-gray-900 hover:text-[#0f1e32] transition-colors">
              {nav.home}
            </Link>
            <Link href={`/${locale}/services`} className="text-gray-900 hover:text-[#0f1e32] transition-colors">
              {nav.services}
            </Link>
            <Link href={`/${locale}/about`} className="text-gray-900 hover:text-[#0f1e32] transition-colors">
              {nav.about}
            </Link>
            <Link href={`/${locale}/contact`} className="text-gray-900 hover:text-[#0f1e32] transition-colors">
              {nav.contact}
            </Link>
            <div className="flex items-center space-x-2">
              <a href="/en" className={`px-2 py-1 text-sm ${locale === 'en' ? 'bg-[#0f1e32] text-white' : 'text-gray-600 hover:text-[#0f1e32]'} rounded`}>
                🇬🇧 EN
              </a>
              <a href="/fr" className={`px-2 py-1 text-sm ${locale === 'fr' ? 'bg-[#0f1e32] text-white' : 'text-gray-600 hover:text-[#0f1e32]'} rounded`}>
                🇫🇷 FR
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <a href="/en" className={`px-2 py-1 text-sm ${locale === 'en' ? 'bg-[#0f1e32] text-white' : 'text-gray-600 hover:text-[#0f1e32]'} rounded`}>
                🇬🇧 EN
              </a>
              <a href="/fr" className={`px-2 py-1 text-sm ${locale === 'fr' ? 'bg-[#0f1e32] text-white' : 'text-gray-600 hover:text-[#0f1e32]'} rounded`}>
                🇫🇷 FR
              </a>
            </div>
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
            <Link href={`/${locale}`} className="block px-3 py-2 text-gray-900 hover:text-[#0f1e32]">
              {nav.home}
            </Link>
            <Link href={`/${locale}/services`} className="block px-3 py-2 text-gray-900 hover:text-[#0f1e32]">
              {nav.services}
            </Link>
            <Link href={`/${locale}/about`} className="block px-3 py-2 text-gray-900 hover:text-[#0f1e32]">
              {nav.about}
            </Link>
            <Link href={`/${locale}/contact`} className="block px-3 py-2 text-gray-900 hover:text-[#0f1e32]">
              {nav.contact}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}