'use client'

import { useEffect, useRef } from "react";
import Image from "next/image";
import { CircleChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Equipe() {
    const equipeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.defaults({ ease: "power3.out" });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: equipeRef.current,
                    start: "top center",
                    end: "top 20%",
                    scrub: 1.5,
                },
            });

            tl.from(".equipe-title", {
                y: 80,
                opacity: 0,
            }, 0);

            tl.from(".equipe-subtitle", {
                y: 40,
                opacity: 0,
            }, "<0.1");

            tl.from(".equipe-text", {
                y: 40,
                opacity: 0,
                stagger: 0.15,
            }, "<0.1");

            tl.from(".equipe-card", {
                opacity: 0,
                y: 100,
                stagger: 0.2,
            }, "<0.2");

            tl.from(".equipe-button", {
                y: 20,
                opacity: 0,
            }, "<0.1");
        }, equipeRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={equipeRef} className="text-black flex flex-col items-center py-16 px-6 md:px-20 relative overflow-hidden">
            <svg className="absolute inset-0 w-full h-full opacity-10 text-gray-400 -z-50">
                <defs>
                    <pattern id="a" width="69.283" height="40" patternTransform="scale(4)" patternUnits="userSpaceOnUse">
                        <rect width="100%" height="100%" fill="#2c904e" fillOpacity="0" />
                        <path
                            fill="none"
                            stroke="#4bbcec"
                            strokeWidth=".5"
                            d="M46.189-20 57.736 0M46.189 20l11.547 20m-46.189 0 11.547 20M11.547 0l11.547 20m40.415 30H40.415M28.868 30H5.774m23.094-40H5.774m57.735 20H40.415m0 20L28.868 50m11.547-60L28.868 10m46.188 0L63.509 30M5.774 10-5.773 30m75.056 10H46.189L34.64 20 46.19 0h23.094q5.77 10 11.546 20zM57.736 60H34.64L23.094 40l11.547-20h23.095l11.547 20zm0-40H34.64L23.094 0l11.547-20h23.095L69.283 0c-3.87 6.7-8.118 14.06-11.547 20zM34.64 60H11.547L0 40l11.547-20h23.094L46.19 40zm0-40H11.547L0 0l11.547-20h23.094L46.19 0zM23.094 40H0l-5.773-10-5.774-10L0 0h23.094l11.547 20z"
                        />
                    </pattern>
                </defs>
                <rect width="800%" height="800%" fill="url(#a)" />
            </svg>

            <div className="w-full max-w-5xl flex flex-col items-center text-center">
                <h1 className="equipe-title relative bg-gradient-to-r from-cyan-500 to-blue-700
      bg-[length:200%_200%] bg-clip-text text-transparent 
      animate-gradient font-bold 
      text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
      [text-shadow:_2px_2px_4px_rgba(0,0,0,0.25)] uppercase">
                    Notre équipe dirigeante
                </h1>

                <span className="equipe-subtitle text-lg md:text-[2.2em] my-6 md:my-12 italic text-cyan-500">
                    Guider, inspirer et soutenir
                </span>

                <p className="equipe-text text-base md:text-[1.7em] mb-4 md:mb-2 font-montserrat">
                    Implantés en Guadeloupe, nous assurons nos formations dans les Caraibes ainsi qu&apos;en métropole.
                </p>
                <p className="equipe-text text-base md:text-[1.7em] font-montserrat">
                    Dirigé par des membres fondateurs experts, I2S est spécialisé dans le secteur médico-social et sanitaire.
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center md:justify-between my-12 md:my-24 w-full max-w-5xl space-y-8 md:space-y-0 md:space-x-8">
                <div className="equipe-card flex flex-col justify-center items-center gap-2 bg-gray-100 px-6 py-8 rounded-2xl shadow-xl -z-50">
                    <div className="w-40 h-40 md:w-48 md:h-48 relative rounded-full overflow-hidden shadow-inset">
                        <Image fill src="/equipe/profile_1.avif" className="-z-100" alt="Photo de D.Trouillefou, Président" />
                    </div>
                    <p className="font-bold mt-4">D.Trouillefou</p>
                    <p>Président</p>
                </div>

                <div className="equipe-card flex flex-col justify-center items-center gap-2 bg-gray-100 px-6 py-8 rounded-2xl shadow-xl -z-50">
                    <div className="w-40 h-40 md:w-48 md:h-48 relative rounded-full overflow-hidden shadow-inset">
                        <Image fill src="/equipe/profile_2.avif" alt="Photo de I.Gominbaulx, Directrice générale" className="-z-100" />
                    </div>
                    <p className="font-bold mt-4">I.Gominbaulx</p>
                    <p>Directrice générale</p>
                </div>

                <div className="equipe-card flex flex-col justify-center items-center gap-2 bg-gray-100 px-6 py-8 rounded-2xl shadow-xl -z-50">
                    <div className="w-40 h-40 md:w-48 md:h-48 relative rounded-full overflow-hidden shadow-inset">
                        <Image fill src="/equipe/profile_3.avif" className="-z-10" alt="Photo du Dr. R. Etonno, Directrice pédagogique" />
                    </div>
                    <p className="font-bold mt-4">Dr. R. Etonno</p>
                    <p>Directrice pédagogique</p>
                    <p>Référent handicap</p>
                </div>
            </div>

            <button className="equipe-button w-full sm:w-1/2 md:w-1/4 button-29 md:text-[18px] mb-16" role="button">
                <span>Organigramme</span> <CircleChevronRight />
            </button>
        </section>
    );
}