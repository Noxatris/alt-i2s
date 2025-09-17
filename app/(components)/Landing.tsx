'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const cardsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animation du titre principal
            if (titleRef.current) {
                gsap.from(titleRef.current, {
                    opacity: 0,
                    y: 50,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 80%",
                        end: "bottom 60%",
                        scrub: 0.5,
                    },
                });
            }

            // Animation des cartes
            if (cardsRef.current) {
                gsap.from(cardsRef.current.children, {
                    opacity: 0,
                    y: 100,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 85%",
                        end: "bottom 70%",
                        scrub: 0.5,
                    },
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="flex flex-col items-center mb-24 px-6">
            {/* Bloc titres */}
            <div className="text-center max-w-5xl">
                <h1
                    ref={titleRef}
                    className="text-[2.8em] md:text-[3.5em] text-black font-montserrat font-bold leading-tight"
                >
                    Des formations adaptées au secteur
                    <span className="text-cyan-500"> sanitaire</span> et
                    <span className="text-cyan-500"> médico-social</span>
                </h1>
                <p className="mt-6 text-xl text-gray-600">
                    Accompagnement à l’évaluation HAS • Audits & conseils
                </p>
            </div>

            {/* Grille de cartes */}
            <div
                ref={cardsRef}
                className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl"
            >
                {/* Carte 1 */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                    <div className="w-12 h-12 flex items-center justify-center bg-cyan-400 rounded-lg mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 2l10 5-10 5-10-5zm0 10l10 5-10 5-10-5zm0 10v-5m0-10l-10-5m20 5v5" />
                        </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-cyan-400">
                        Développer les compétences
                    </h3>
                    <p className="text-gray-700">
                        Vous cherchez à faire évoluer vos collaborateurs et à développer
                        leurs compétences.
                    </p>
                </div>

                {/* Carte 2 */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                    <div className="w-12 h-12 flex items-center justify-center bg-cyan-400 rounded-lg mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 12.79l-4.5 4.5-2.9-2.9-1.4 1.4L16.6 19l4.4-4.4zM22 6L16 0 2 14v8h8z" />
                        </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-cyan-400">
                        Accompagnement HAS
                    </h3>
                    <p className="text-gray-700">
                        Vous voulez être accompagné vers votre prochaine évaluation HAS.
                    </p>
                </div>

                {/* Carte 3 */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                    <div className="w-12 h-12 flex items-center justify-center bg-cyan-400 rounded-lg mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-cyan-400">
                        Audits et Conseils
                    </h3>
                    <p className="text-gray-700">
                        Vous souhaitez des audits ou des conseils adaptés à vos besoins.
                    </p>
                </div>
            </div>

            {/* CTA */}
            <div className="mt-16 flex flex-col items-center">
                <p className="italic text-gray-700 mb-6">
                    "I2S Formation" vous accompagne au quotidien dans les Caraïbes
                </p>
                <button className="button-29 text-xs w-[95%] md:text-[18px]" role="button">
                    Une demande de devis ? Contactez-nous !
                </button>
            </div>
        </section>
    );
}
