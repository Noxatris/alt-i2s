'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Users, Timer, CheckCircle, Smile, Quote, CircleChevronRight, ArrowUpRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Formation() {
    const heroRef = useRef<HTMLDivElement>(null)
    const formationsRef = useRef<HTMLDivElement>(null)
    const temoignagesRef = useRef<HTMLDivElement>(null)
    const statsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Hero
            gsap.from(".hero-text", {
                opacity: 0,
                y: 100,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top bottom",   // section entre dans l'écran
                    end: "bottom top",     // section sort de l'écran
                    scrub: 0.5,
                },
            })

            gsap.from(".hero-img", {
                opacity: 0,
                x: 200,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5,
                },
            })

            // Formations
            gsap.from(".formation-card", {
                opacity: 0,
                y: 150,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: formationsRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5,
                },
            })

            // Témoignages
            gsap.from(".testimonial-card", {
                opacity: 0,
                y: 120,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: temoignagesRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5,
                },
            })

            gsap.from(".quote-icon", {
                opacity: 0,
                rotate: -45,
                scale: 0.5,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: temoignagesRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5,
                },
            })

            // Stats
            gsap.from(".circle", {
                opacity: 0,
                scale: 0.3,
                scrollTrigger: {
                    trigger: statsRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5,
                },
            })

            gsap.from(".keyword", {
                opacity: 0,
                y: 50,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: statsRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: .5,
                },
            })

            gsap.from(".stat-card", {
                opacity: 0,
                x: -100,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: statsRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: .5,
                },
            })
        })

        return () => ctx.revert()
    }, [])
    // ----- DATA -----
    const formationsData = [
        { nom: "Utilisation du défibrillateur semi-automatique", description: "Animée par des formateurs expérimentés, infirmiers anesthésistes.", ficheTechnique: "/", dossierPresentation: "/", icon: "⚡" },
        { nom: "Urgence en structure", description: "Animée par des formateurs expérimentés, infirmiers anesthésistes.", ficheTechnique: "/", dossierPresentation: "/", icon: "⚕️" },
        { nom: "Troubles du comportement chez la personne âgée", description: "Animée par des formateurs expérimentés, psychologue, cadre de santé, directeur d'ESSMS.", ficheTechnique: "/", dossierPresentation: "/", icon: "🧠" },
        { nom: "Les actes de la fonction aide-soignante", description: "Animée par des formateurs expérimentés, cadre de santé, hygiéniste, directeur d'ESSMS.", ficheTechnique: "/", dossierPresentation: "/", icon: "🧑" },
        { nom: "Prévenir les chutes et la régression chez la personne âgée", description: "Animée par des formateurs expérimentés, cadre de santé, infirmiers, directeur d'ESSMS.", ficheTechnique: "/", dossierPresentation: "/", icon: "🚶" },
    ]

    const testimonials = [
        { nom: "Hélène", avis: "Formation enrichissante. Les formateurs sont compétents, pédagogues et très formateurs.", color: "bg-blue-500" },
        { nom: "Pascal", avis: "Bonne formation, intervenant très compétent, explications top!", color: "bg-cyan-500" },
        { nom: "Stéphanie", avis: "Très satisfaite de cette formation, très enrichissante.", color: "bg-teal-500" },
    ]

    return (
        <div className="min-h-[80vh] text-gray-900">
            {/* Hero */}
            <section ref={heroRef} className="relative">
                <div className="pt-[15vh] w-full flex flex-col md:flex-row justify-around items-center gap-10 mb-20">
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="hero-text text-[2.8em] md:text-[3.5em] text-black font-montserrat font-bold leading-tight">
                            Catalogue de <span className="text-cyan-500">formation</span> 2025
                        </h1>
                        <p className="hero-text text-lg text-gray-600 mb-6">Découvrez nos formations professionnelles adaptées à vos besoins.</p>
                        <Link href="/" className="hero-text button-29 w-[40%] flex justify-center items-center gap-2">
                            Nos formations <CircleChevronRight className="ml-2" />
                        </Link>
                    </div>
                    <div className="hero-img relative w-[25%] h-160 rounded-xl overflow-hidden shadow-lg">
                        <Image fill src="/catalogueFormation.avif" alt="Couverture du catalogue de formation" className="object-cover" />
                    </div>
                </div>
            </section>

            {/* Formations */}
            <section ref={formationsRef} className="max-w-7xl mx-auto px-6 py-20">
                <h2 className="font-bold text-[3em] text-center mb-16 text-cyan-600">Nos formations</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {formationsData.map((data, i) => (
                        <div key={i} className="formation-card group relative flex flex-col justify-between overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="p-8 bg-white h-full">
                                <div className="w-12 h-12 flex items-center justify-center bg-cyan-500 rounded-lg mb-6 text-white text-3xl">{data.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">{data.nom}</h3>
                                <p className="text-gray-600">{data.description}</p>
                            </div>
                            <div className="flex w-full text-white font-semibold text-lg">
                                <a href={data.ficheTechnique} className="w-1/2 py-4 text-center bg-blue-600 hover:bg-blue-700 flex justify-center items-center gap-2">
                                    Fiche technique <ArrowUpRight size={20} />
                                </a>
                                <a href={data.dossierPresentation} className="w-1/2 py-4 text-center bg-cyan-500 hover:bg-cyan-600 flex justify-center items-center gap-2">
                                    Présentation <ArrowUpRight size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Témoignages */}
            <section ref={temoignagesRef} className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="font-bold text-[3em] text-center mb-16 text-cyan-600">Témoignages</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, i) => (
                            <div key={i} className="testimonial-card relative bg-gray-50 p-6 border rounded-3xl shadow-lg">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${testimonial.color} text-white font-bold text-xl`}>
                                        {testimonial.nom.charAt(0)}
                                    </div>
                                    <p className="font-semibold text-gray-900">{testimonial.nom}</p>
                                </div>
                                <blockquote className="relative italic text-gray-700">
                                    <Quote size={28} className="quote-icon absolute -top-4 -left-4 text-gray-300 opacity-70 transform -scale-x-100" />
                                    <p className="relative z-10">"{testimonial.avis}"</p>
                                </blockquote>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section ref={statsRef} className="max-w-7xl mx-auto px-6 py-20 bg-gray-50">
                <h2 className="font-bold text-[3em] text-center mb-16 text-cyan-600">Nos statistiques</h2>
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col items-center space-y-8">
                        <div className="circle relative w-64 h-64 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                            <div className="absolute w-56 h-56 rounded-full bg-white flex flex-col items-center justify-center border-4 border-blue-500">
                                <span className="text-4xl font-bold text-blue-600">93%</span>
                                <span className="text-lg text-gray-600 mt-1">Très satisfait</span>
                            </div>
                        </div>
                        <div className="w-full text-center">
                            <p className="font-semibold text-lg mb-4">Quelques mots :</p>
                            <div className="flex flex-wrap justify-center gap-3">
                                {["Dynamique", "Interactive", "Qualité"].map((m, i) => (
                                    <span key={i} className="keyword px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium shadow-sm">
                                        {m}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="stat-card bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
                                <Users className="text-cyan-600" size={24} />
                                <div>
                                    <h3 className="text-3xl font-bold">340</h3>
                                    <p className="text-gray-600">Stagiaires</p>
                                </div>
                            </div>
                            <div className="stat-card bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
                                <Timer className="text-cyan-600" size={24} />
                                <div>
                                    <h3 className="text-3xl font-bold">3 268</h3>
                                    <p className="text-gray-600">Heures</p>
                                </div>
                            </div>
                        </div>
                        <div className="stat-card bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold mb-2">Satisfaction</h3>
                            <p className="flex items-center text-gray-700">
                                <CheckCircle className="text-green-500 mr-2" size={20} /> Globale : <span className="ml-2 font-bold text-blue-600">97%</span>
                            </p>
                            <p className="flex items-center text-gray-700">
                                <Smile className="text-yellow-500 mr-2" size={20} /> Formateurs : <span className="ml-2 font-bold text-blue-600">100%</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
