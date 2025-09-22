'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { GraduationCap, BookOpen, Clock, MapPin, DollarSign, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Tatoueurs() {
    const heroRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        const heroElements = heroRef.current
            ? heroRef.current.querySelectorAll("h1, p, .button-29, .image-animation-hero")
            : [];

        gsap.fromTo(
            heroElements,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",
                stagger: 0.2,
            }
        );

        // Animation de l'image de fond dans la section 'Infos pratiques'
        gsap.fromTo(
            ".tatouage-bg-image",
            { scale: 1.2, rotation: 10 },
            {
                scale: 1,
                rotation: 0,
                duration: 2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".infos-pratiques-section",
                    start: "top 80%",
                },
            }
        );

        // Animation des cartes dans la section 'Infos pratiques'
        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                    },
                    delay: index * 0.2, // Délai pour un effet de stagger
                }
            );
        });
    }, []);

    return (
        <div className="bg-white text-gray-900">
            {/* Hero Section - Elevated to match home page style */}
            <section ref={heroRef} className="relative overflow-hidden py-12 md:py-24 px-6 md:px-12">
                <div className="absolute inset-0 w-full h-full opacity-10 text-gray-400 -z-50">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <defs>
                            <pattern id="diagonal-hex-bg" width="69.283" height="40" patternTransform="scale(4)" patternUnits="userSpaceOnUse">
                                <rect width="100%" height="100%" fill="#2c904e" fillOpacity="0" />
                                <path fill="none" stroke="#4bbcec" strokeWidth=".5" d="M46.189-20 57.736 0M46.189 20l11.547 20m-46.189 0 11.547 20M11.547 0l11.547 20m40.415 30H40.415M28.868 30H5.774m23.094-40H5.774m57.735 20H40.415m0 20L28.868 50m11.547-60L28.868 10m46.188 0L63.509 30M5.774 10-5.773 30m75.056 10H46.189L34.64 20 46.19 0h23.094q5.77 10 11.546 20zM57.736 60H34.64L23.094 40l11.547-20h23.095l11.547 20zm0-40H34.64L23.094 0l11.547-20h23.095L69.283 0c-3.87 6.7-8.118 14.06-11.547 20zM34.64 60H11.547L0 40l11.547-20h23.094L46.19 40zm0-40H11.547L0 0l11.547-20h23.094L46.19 0zM23.094 40H0l-5.773-10-5.774-10L0 0h23.094l11.547 20z" />
                            </pattern>
                        </defs>
                        <rect width="800%" height="800%" fill="url(#diagonal-hex-bg)" />
                    </svg>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <p className="uppercase text-sm font-semibold text-cyan-600 mb-2">Habilitation ARS</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Formation <span className="text-cyan-500">Hygiène</span> et <span className="text-cyan-500">Salubrité</span>
                        </h1>
                        <p className="text-lg text-gray-700 mb-6">
                            Obligatoire pour la pratique du tatouage, du piercing et de la dermopigmentation.
                        </p>
                        <div className="text-gray-600 space-y-2 mb-8">
                            <p className="flex items-center gap-2">
                                <MapPin size={20} className="text-blue-600" />
                                <span>Disponible en Guadeloupe, Saint-Martin et Saint-Barthélémy</span>
                            </p>
                        </div>
                        <Link
                            href="/"
                            className="group button-29 w-[90%] md:w-[80%] xl:w-[50%]"
                        >
                            Découvrir la formation
                            <ChevronRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                    <div className="relative w-full h-56 md:h-72 lg:h-80 flex items-center justify-center image-animation-hero">
                        <Image src="/ARS_Logo.avif" fill alt="Logo ARS" className="object-contain" />
                    </div>
                </div>
            </section>

            {/* Description Section */}
            <section className="max-w-5xl mx-auto px-6 py-20">
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p>
                        La formation <strong className="text-cyan-500">Hygiène et Salubrité</strong> est composée de modules répartis sur <strong className="text-cyan-500">3 jours</strong>,
                        alliant théorie et pratique. Elle a pour but de sensibiliser aux gestes et comportements à adopter
                        dans le respect de l’hygiène.
                    </p>
                    <p>
                        Elle est animée par une <strong className="text-cyan-500">Cadre Hygiéniste</strong> et répond aux exigences du décret du 19 février 2008
                        et aux arrêtés les plus récents (05 mars 2024 et 11 octobre 2024).
                    </p>
                    <p>
                        Cette formation s’adresse aux professionnels du <strong className="text-cyan-500">tatouage</strong>, du <strong className="text-cyan-500">perçage</strong> et de la
                        <strong className="text-cyan-500"> dermopigmentation</strong>.
                    </p>
                </div>
            </section>

            {/* Infos pratiques Section - Refined with card design */}
            <section className="bg-gray-50 relative infos-pratiques-section max-w-screen overflow-hidden">
                <div className="absolute h-full aspect-square top-0 left-0 rounded-br-full rounded-tr-full ">
                    <div className="relative w-full h-full tatouage-bg-image">
                        <Image src="/tatouage.avif" fill alt="Illustration tatouage" className="object-cover" />
                    </div>
                </div>
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20">

                    {/* Documents Card */}
                    <div ref={(el) => { cardsRef.current[0] = el; }} className="flex flex-col justify-between border border-gray-200 rounded-3xl p-8 shadow-xl bg-white transition-shadow duration-300 hover:shadow-2xl z-10">
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                            <BookOpen size={24} className="text-blue-600" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Détails de la formation</h2>
                        <div className="flex flex-col gap-3 font-medium">
                            <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                                <span className="underline">Fiche Technique</span> <ChevronRight size={18} />
                            </Link>
                            <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                                <span className="underline">Dossier de présentation</span> <ChevronRight size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Next Session Card */}
                    <div ref={(el) => { cardsRef.current[1] = el; }} className="flex flex-col justify-between border border-gray-200 rounded-3xl p-8 shadow-xl bg-white transition-shadow duration-300 hover:shadow-2xl">
                        <div className="w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-full mb-4">
                            <Clock size={24} className="text-cyan-600" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Prochaine session</h2>
                        <div className="space-y-2">
                            <p className="flex items-center gap-2 text-lg font-medium text-gray-700">
                                <MapPin size={20} className="text-gray-600" />
                                Guadeloupe
                            </p>
                            <p className="font-semibold text-gray-800">Novembre 2025</p>
                            <p className="text-gray-600">3 jours • 21h • 400 €</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mt-6 mb-2 text-center">Hygiène et Salubrité</h2>
                            <p className="text-gray-600 text-center text-sm">
                                Formation prévue à l’article R. 1311-3 du code de la santé publique.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}