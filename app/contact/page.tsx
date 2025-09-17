'use client'

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from "lucide-react";

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    // Créer les références pour les sections
    const heroRef = useRef<HTMLDivElement>(null);
    const mainContentRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);
    const illustrationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // --- Animations de la section "Hero" ---
            gsap.from(".hero-title", {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: "power2.out",
            });
            gsap.from(".hero-subtitle", {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: "power2.out",
                delay: 0.2, // Apparaît après le titre
            });

            // --- Animations des cartes d'informations de contact ---
            gsap.from(".contact-card", {
                opacity: 0,
                y: 100,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: mainContentRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            });

            // --- Animations du formulaire ---
            gsap.from(".form-card", {
                opacity: 0,
                x: 100,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: mainContentRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            });

            // Stagger pour les champs de formulaire
            gsap.from(".form-input-group", {
                opacity: 0,
                y: 50,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".form-card",
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            });
            gsap.from(".submit-btn", {
                opacity: 0,
                scale: 0.8,
                duration: 0.6,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: ".submit-btn",
                    start: "top 90%",
                    toggleActions: "play none none none",
                }
            });


            // --- Animations de la carte et de l'illustration ---
            gsap.from(".map-card", {
                opacity: 0,
                y: 100,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: mapRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            });

            gsap.from(".illustration-image", {
                opacity: 0,
                scale: 0.9,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: illustrationRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            });

            // --- Animation des icônes de réseaux sociaux ---
            gsap.from(".social-icon", {
                opacity: 0,
                y: 20,
                duration: 0.5,
                stagger: 0.1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: ".social-icons-container",
                    start: "top 90%",
                    toggleActions: "play none none none",
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="bg-white text-gray-900 overflow-hidden">
            {/* Hero Section */}
            <div ref={heroRef} className="bg-gray-50 py-24 px-6 text-center">
                <h1 className="hero-title text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    Une question ? Contactez-nous
                </h1>
                <p className="hero-subtitle text-lg text-gray-600 max-w-2xl mx-auto">
                    Nous sommes à votre disposition pour répondre à toutes vos interrogations. Remplissez le formulaire ou utilisez les coordonnées ci-dessous pour nous contacter.
                </p>
            </div>

            {/* Infos et Formulaire */}
            <div ref={mainContentRef} className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

                {/* Infos contact */}
                <div className="space-y-8 md:sticky md:top-24">
                    <div className="contact-card bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
                        <h2 className="text-2xl font-bold mb-6">Nos coordonnées</h2>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-cyan-100 rounded-full">
                                    <Phone size={24} className="text-cyan-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Téléphone</h3>
                                    <a href="tel:+590690409127" className="text-gray-600 hover:text-blue-600 transition-colors">
                                        +590 690 40 91 27
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-blue-100 rounded-full">
                                    <Mail size={24} className="text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">E-mail</h3>
                                    <a href="mailto:contacti2sformation@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                                        contacti2sformation@gmail.com
                                    </a>
                                    <a href="mailto:i2sformation@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors block">
                                        i2sformation@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-card bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
                        <h2 className="text-2xl font-bold mb-6">Localisation & réseaux</h2>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-teal-100 rounded-full">
                                    <MapPin size={24} className="text-teal-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Adresse</h3>
                                    <address className="not-italic text-gray-600">
                                        21 rue des Girofliers
                                        <br />
                                        97121 Anse Bertrand, Guadeloupe
                                    </address>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-gray-200 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 16H8V10h2v8zm4 0h-2V10h2v8zm4 0h-2V10h2v8z" />
                                    </svg>
                                </div>
                                <div className="flex gap-4 social-icons-container">
                                    <Link href="#" aria-label="Facebook">
                                        <Facebook size={28} className="social-icon text-blue-600 hover:text-blue-700 transition-colors" />
                                    </Link>
                                    <Link href="#" aria-label="Instagram">
                                        <Instagram size={28} className="social-icon text-blue-600 hover:text-blue-700 transition-colors" />
                                    </Link>
                                    <Link href="#" aria-label="LinkedIn">
                                        <Linkedin size={28} className="social-icon text-blue-600 hover:text-blue-700 transition-colors" />
                                    </Link>
                                    <Link href="#" aria-label="Twitter">
                                        <Twitter size={28} className="social-icon text-blue-600 hover:text-blue-700 transition-colors" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Formulaire */}
                <form className="form-card bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Envoyer un message</h2>
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex flex-col form-input-group">
                                <label htmlFor="prenom" className="mb-2 font-medium text-gray-700">Prénom</label>
                                <input type="text" id="prenom" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
                            </div>
                            <div className="flex flex-col form-input-group">
                                <label htmlFor="nom" className="mb-2 font-medium text-gray-700">Nom</label>
                                <input type="text" id="nom" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
                            </div>
                        </div>
                        <div className="flex flex-col form-input-group">
                            <label htmlFor="email" className="mb-2 font-medium text-gray-700">E-mail</label>
                            <input type="email" id="email" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
                        </div>
                        <div className="flex flex-col form-input-group">
                            <label htmlFor="message" className="mb-2 font-medium text-gray-700">Message</label>
                            <textarea id="message" rows={5} className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="submit-btn bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-colors"
                            >
                                Envoyer le message
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* Map Section */}
            <div ref={mapRef} className="max-w-7xl mx-auto px-6 mb-20">
                <h2 className="map-card text-3xl font-bold mb-6 text-gray-900">Retrouvez-nous sur la carte</h2>
                <div className="map-card w-full h-96 border border-gray-200 rounded-2xl overflow-hidden shadow-xl">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.887221297801!2d-61.503487825000004!3d16.326233284568636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c7929a568285949%3A0x8cf6b4122d9c1598!2s21%20Rue%20des%20Girofliers%2C%20Anse-Bertrand%2097121%2C%20Guadeloupe!5e0!3m2!1sfr!2sfr!4v1718818228399!5m2!1sfr!2sfr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>

            {/* Illustration Section */}
            <div ref={illustrationRef} className="relative w-full h-[30rem] max-w-7xl mx-auto px-6 mb-20">
                <Image
                    src="/contact.avif"
                    alt="Illustration de contact"
                    fill
                    className="illustration-image object-cover rounded-3xl shadow-xl"
                />
            </div>
        </section>
    );
}