'use client'

import { useEffect, useRef } from "react";
import { CircleChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {

    const servicesRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.defaults({ ease: "power3.out" });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: servicesRef.current,
                    start: "top center", // Démarre lorsque la section atteint le milieu de l'écran
                    end: "bottom 90%", // Se termine lorsque le bas de la section atteint le milieu de l'écran
                    scrub: 1.5, // Augmenter la valeur de scrub pour que l'animation soit plus lente
                },
            });

            tl.from(".chevron polyline", {
                x: -80,
                opacity: 0,
                stagger: 0.2
            }, 0);

            tl.from(".service-title", {
                opacity: 0,
                y: 50
            }, "<0.1");

            tl.from(".service-item", {
                opacity: 0,
                y: 80,
                stagger: 0.2
            }, "<0.1");

            tl.from(".service-item ul li", {
                x: -80,
                opacity: 0,
                stagger: 0.1
            }, "<0.1");
        }, servicesRef);

        return () => ctx.revert();
    }, []);


    return (
        <section ref={servicesRef} className="services-section text-white flex flex-col items-center bg-[#04245c] px-6 md:px-20 py-16 relative overflow-hidden">
            {/* Le reste du code JSX reste identique */}
            <svg
                className="chevron absolute inset-y-0 left-0 h-full w-120 pointer-events-none opacity-20"
                viewBox="0 0 50 100"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <defs>
                    <linearGradient id="chevStrokeServices" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.3" />
                    </linearGradient>
                </defs>
                <polyline points="0,0 20,50 0,100" fill="none" stroke="url(#chevStrokeServices)" strokeWidth="12" />
                <polyline points="20,0 40,50 20,100" fill="none" stroke="url(#chevStrokeServices)" strokeWidth="12" />
            </svg>

            <div className="relative z-10 w-full max-w-5xl flex flex-col">
                {/* Texte d’intro */}
                <h1 className="service-title text-2xl md:text-3xl font-semibold leading-snug text-center max-w-4xl mx-auto">
                    I2S Formation propose des <span className="text-cyan-400">formations</span>,
                    des <span className="text-cyan-400">audits & conseils</span>,
                    et l’accompagnement vers votre prochaine <span className="text-cyan-400">évaluation HAS</span>.
                </h1>

                {/* Conteneur principal de la liste */}
                <div className="flex flex-col md:flex-row md:space-x-12 mt-16">
                    {/* Section gauche : la liste des services */}
                    <div className="flex-1 space-y-12">
                        {/* Item 1 : Formations */}
                        <div className="service-item flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                            <div className="w-16 h-16 flex items-center justify-center bg-cyan-400 rounded-lg shrink-0 shadow-lg">
                                {/* Remplacez par une icône pertinente (ex: graduation cap) */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l10 5-10 5-10-5zm0 10l10 5-10 5-10-5zm0 10v-5m0-10l-10-5m20 5v5" /></svg>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">Formations</h2>
                                <p className="text-lg text-gray-200">
                                    Notre équipe pédagogique construit, sur mesure, le programme de formation dont vous avez besoin.
                                </p>
                                <ul className="mt-4 space-y-2 text-gray-300">
                                    <li className="flex items-start">
                                        <CircleChevronRight className="h-5 w-5 mr-2 mt-1 text-cyan-400 shrink-0" />
                                        <span>Secteurs d&apos;intervention : sanitaire, médico-social, entreprises, etc.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CircleChevronRight className="h-5 w-5 mr-2 mt-1 text-cyan-400 shrink-0" />
                                        <span>Programmes sur mesure, adaptés à vos besoins spécifiques.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Item 2 : Accompagnement HAS */}
                        <div className="service-item flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                            <div className="w-16 h-16 flex items-center justify-center bg-cyan-400 rounded-lg shrink-0 shadow-lg">
                                {/* Remplacez par une icône pertinente (ex: certificate) */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79l-4.5 4.5-2.9-2.9-1.4 1.4L16.6 19l4.4-4.4zM22 6L16 0 2 14v8h8z" /></svg>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">Accompagnement évaluation HAS</h2>
                                <p className="text-lg text-gray-200">
                                    Un évaluateur certifié AFNOR vous accompagne vers votre prochaine évaluation HAS.
                                </p>
                                <ul className="mt-4 space-y-2 text-gray-300">
                                    <li className="flex items-start">
                                        <CircleChevronRight className="h-5 w-5 mr-2 mt-1 text-cyan-400 shrink-0" />
                                        <span>Préparation et audits blancs.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CircleChevronRight className="h-5 w-5 mr-2 mt-1 text-cyan-400 shrink-0" />
                                        <span>Mise en conformité avec le référentiel.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Item 3 : Audits & Conseils */}
                        <div className="service-item flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                            <div className="w-16 h-16 flex items-center justify-center bg-cyan-400 rounded-lg shrink-0 shadow-lg">
                                {/* Remplacez par une icône pertinente (ex: magnifying glass) */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold mb-2">Audits et Conseils</h2>
                                <p className="text-lg text-gray-200">
                                    Des audits ou des conseils adaptés à vos besoins.
                                </p>
                                <ul className="mt-4 space-y-2 text-gray-300">
                                    <li className="flex items-start">
                                        <CircleChevronRight className="h-5 w-5 mr-2 mt-1 text-cyan-400 shrink-0" />
                                        <span>Audits hygiène, management, gestion des risques.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CircleChevronRight className="h-5 w-5 mr-2 mt-1 text-cyan-400 shrink-0" />
                                        <span>Conseils pour l&apos;optimisation des processus.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}