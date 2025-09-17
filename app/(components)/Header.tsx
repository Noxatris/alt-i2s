'use client';

import useScrollPosition from '../hooks/useScrollPosition';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const scrollPosition = useScrollPosition();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour gérer l'ouverture du menu modal

  useEffect(() => {
    setIsScrolled(scrollPosition > 300);
  }, [scrollPosition]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 w-full h-[10%] flex justify-between px-16 items-center z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-100 text-gray-900 shadow-md' : 'bg-transparent text-white'}`}>
      {/* Logo */}
      <Link href="/" className={`relative w-[10%] h-[98%] ml-4 transition-all duration-600' ${isScrolled ? 'translate-y-0' : '-translate-y-50'}`}>
        <Image src="/logo/logo.png" fill alt="" />
      </Link>

      {/* Menu pour Desktop (caché sur mobile) */}
      <nav className={`text-2xl divide-x-2 divide-cyan-400 font-semibold transition-all duration-600 hidden md:flex ${isScrolled ? 'py-0' : 'bg-black/30 backdrop-blur-sm rounded-2xl py-3'}`}>
        <Link href="/" className="px-6">Accueil</Link>
        <Link href="/formation" className="px-6">Formation</Link>
        <Link href="/tatoueurs" className="px-6">Tatoueurs</Link>
        <Link href="/contact" className="px-6">Contact</Link>
      </nav>

      {/* Bouton Hamburger pour Mobile (visible uniquement sur mobile) */}
      <button onClick={toggleMenu} className="md:hidden text-2xl">
        {/* Vous pouvez utiliser une icône ou une simple balise SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Menu Modal pour Mobile */}
      <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8 z-40 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Bouton de fermeture */}
        <button onClick={toggleMenu} className="absolute top-8 right-8 text-white text-4xl">&times;</button>
        <Link href="/" onClick={toggleMenu} className="text-white text-3xl">Accueil</Link>
        <Link href="/formation" onClick={toggleMenu} className="text-white text-3xl">Formation</Link>
        <Link href="/tatoueurs" onClick={toggleMenu} className="text-white text-3xl">Tatoueurs</Link>
        <Link href="/contact" onClick={toggleMenu} className="text-white text-3xl">Contact</Link>
      </div>
    </header>
  );
};