'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-light tracking-[0.2em] text-primary-dark hover:text-primary transition-colors">
            THE GARDEN
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link href="/hair" className="text-sm tracking-wider uppercase text-gray-600 hover:text-primary-dark transition-colors font-medium">
              Hair
            </Link>
            <Link href="/beauty" className="text-sm tracking-wider uppercase text-gray-600 hover:text-primary-dark transition-colors font-medium">
              Beauty
            </Link>
            <Link href="/academy" className="text-sm tracking-wider uppercase text-gray-600 hover:text-primary-dark transition-colors font-medium">
              Academy
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-primary-dark transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-primary-dark transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-primary-dark transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-6 space-y-3">
            <Link
              href="/hair"
              className="block py-2 text-sm tracking-wider uppercase text-gray-600 hover:text-primary-dark transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Hair
            </Link>
            <Link
              href="/beauty"
              className="block py-2 text-sm tracking-wider uppercase text-gray-600 hover:text-primary-dark transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Beauty
            </Link>
            <Link
              href="/academy"
              className="block py-2 text-sm tracking-wider uppercase text-gray-600 hover:text-primary-dark transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Academy
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
