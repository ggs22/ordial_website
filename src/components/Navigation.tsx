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
              <a href="/en" className={`px-2 py-1 text-sm ${locale === 'en' ? 'bg-[#0f1e32] text-white' : 'text-gray-600 hover:text-[#0f1e32]'} rounded flex items-center space-x-1`}>
                <svg width="16" height="12" viewBox="0 0 640 480" className="inline-block">
                  <path fill="#012169" d="M0 0h640v480H0z"/>
                  <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
                  <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
                  <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
                  <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
                </svg>
                <span>EN</span>
              </a>
              <a href="/fr" className={`px-2 py-1 text-sm ${locale === 'fr' ? 'bg-[#0f1e32] text-white' : 'text-gray-600 hover:text-[#0f1e32]'} rounded flex items-center space-x-1`}>
                <svg width="16" height="12" viewBox="0 0 640 480" className="inline-block">
                  <path fill="#ED2939" d="M426.7 0H640v480H426.7z"/>
                  <path fill="#FFF" d="M213.3 0H426.7v480H213.3z"/>
                  <path fill="#002395" d="M0 0H213.3v480H0z"/>
                </svg>
                <span>FR</span>
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <a href="/en" className={`px-2 py-1 text-sm ${locale === 'en' ? 'bg-[#0f1e32] text-white' : 'text-gray-600 hover:text-[#0f1e32]'} rounded flex items-center space-x-1`}>
                <svg width="16" height="12" viewBox="0 0 640 480" className="inline-block">
                  <path fill="#012169" d="M0 0h640v480H0z"/>
                  <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
                  <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
                  <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
                  <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
                </svg>
                <span>EN</span>
              </a>
              <a href="/fr" className={`px-2 py-1 text-sm ${locale === 'fr' ? 'bg-[#0f1e32] text-white' : 'text-gray-600 hover:text-[#0f1e32]'} rounded flex items-center space-x-1`}>
                <svg width="16" height="12" viewBox="0 0 640 480" className="inline-block">
                  <path fill="#ED2939" d="M426.7 0H640v480H426.7z"/>
                  <path fill="#FFF" d="M213.3 0H426.7v480H213.3z"/>
                  <path fill="#002395" d="M0 0H213.3v480H0z"/>
                </svg>
                <span>FR</span>
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