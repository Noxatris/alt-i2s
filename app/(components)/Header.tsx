'use client'; // Indique que ce composant est un Client Component

import useScrollPosition from '../hooks/useScrollPosition';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const scrollPosition = useScrollPosition();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollPosition > 300); // Mettre à jour l'état basé sur la position de défilement
  }, [scrollPosition]);

  return (
    <header className={`fixed top-0 w-full h-[10%] flex justify-between px-16 items-center z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-100 text-gray-900 shadow-md' : 'bg-transparent text-white'}`}>
      {/* Votre contenu de navigation ici */}
      <Link href="/" className={`relative w-[10%] h-[98%] ml-4 transition-all duration-600' ${isScrolled ? 'translate-y-0' : '-translate-y-50'}`}>
        <Image src="/logo/logo.png" fill alt="" />
      </Link>
      <nav className={`text-2xl divide-x-2 divide-cyan-400 font-semibold transition-all duration-600  ${isScrolled ? 'py-0' : 'bg-black/30 backdrop-blur-sm rounded-2xl py-3'} `}>
        <Link href="/" className="px-6">Accueil</Link>
        <Link href="/formation" className="px-6">Formation</Link>
        <Link href="/tatoueurs" className="px-6">Tatoueurs</Link>
        <Link href="/contact" className="px-6">Contact</Link>
      </nav>
    </header>
  );
};
