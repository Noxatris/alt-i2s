'use client'

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowBigDownDash } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Handicap() {
    const handicapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.defaults({ ease: "power3.out" });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: handicapRef.current,
                    start: "top 70%",
                    end: "top 30%",
                    scrub: 1.5,
                },
            });

            tl.from(".handicap-chevrons polyline", {
                x: -100,
                opacity: 0,
                stagger: 0.2,
            }, 0);

            tl.from(".handicap-title", {
                y: 80,
                opacity: 0,
            }, "<0.1");

            tl.from(".handicap-subtext", {
                y: 40,
                opacity: 0,
                stagger: 0.1,
            }, "<0.1");

            tl.from(".handicap-arrow", {
                opacity: 0,
                scale: 0.6,
            }, "<0.1");

            tl.from(".handicap-button", {
                y: 80,
                opacity: 0,
            }, "<0.1");

            tl.from(".handicap-image-container", {
                x: 200,
                scale: 1.2,
                opacity: 0,
            }, "<0.1");
        }, handicapRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={handicapRef}
            className="text-black flex flex-col items-center pt-16 md:pt-24 min-h-[80vh] relative overflow-hidden px-6 md:px-20"
        >
            {/* SVG des chevrons masqué sur les mobiles et affiché sur les résolutions moyennes et plus */}
            <svg
                className="handicap-chevrons absolute inset-y-0 left-0 h-full w-20 md:w-32 lg:w-48 pointer-events-none opacity-50 hidden md:block"
                viewBox="0 0 50 100"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <defs>
                    <linearGradient id="chevStroke" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.3" />
                    </linearGradient>
                </defs>
                <polyline
                    points="0,0 20,50 0,100"
                    fill="none"
                    stroke="url(#chevStroke)"
                    strokeWidth="12"
                />
                <polyline
                    points="20,0 40,50 20,100"
                    fill="none"
                    stroke="url(#chevStroke)"
                    strokeWidth="12"
                />
            </svg>

            <div className="flex flex-col md:flex-row w-full justify-between items-center max-w-7xl">
                {/* Contenu textuel */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 p-4 md:p-0 order-2 md:order-1">
                    <h1
                        className="handicap-title relative bg-gradient-to-r from-cyan-500 to-blue-700
            bg-[length:200%_200%] bg-clip-text text-transparent 
            animate-gradient font-bold 
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
            [text-shadow:_2px_2px_4px_rgba(0,0,0,0.25)] uppercase"
                    >
                        Situation de handicap
                    </h1>

                    <span className="handicap-subtext font-montserrat text-lg md:text-[2em] my-4 md:my-8">
                        I2S Formation s'engage à vous accueillir
                    </span>
                    <span className="handicap-subtext font-montserrat text-lg md:text-[2em] my-4 md:my-8">
                        Une question ou un besoin ?
                    </span>
                    <ArrowBigDownDash
                        className="handicap-arrow mb-2 text-cyan-400 animate-bounce-smooth"
                        size={50}
                    />

                    <button className="handicap-button button-29 w-full sm:w-2/3 md:w-1/2 mt-4 md:mt-8" role="button">
                        Contactez le référent handicap
                    </button>
                </div>

                {/* Image en arc */}
                <div className="handicap-image-container w-full md:w-1/2 h-[40vh] md:h-full relative overflow-hidden order-1 md:order-2">
                    <Image
                        src="/Alt_handicap.jpg"
                        alt="Une personne en situation de handicap dans un fauteuil roulant participe à une formation."
                        fill
                        style={{
                            objectFit: "cover",
                            clipPath: "ellipse(80% 100% at 100% 50%)",
                        }}
                        className="handicap-image"
                    />
                </div>
            </div>
        </section>
    );
}