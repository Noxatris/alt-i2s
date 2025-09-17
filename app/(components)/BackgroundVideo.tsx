'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function BackgroundVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false); // Nouvel état pour le survol

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const handleCanPlay = () => {
            setVideoLoaded(true);
        };

        videoElement.addEventListener('canplaythrough', handleCanPlay);

        // Pour les vidéos déjà en cache
        if (videoElement.readyState >= 4) {
            setVideoLoaded(true);
        }

        return () => {
            videoElement.removeEventListener('canplaythrough', handleCanPlay);
        };
    }, []);

    // Fonction pour basculer en mode plein écran
    const handleFullScreen = () => {
        if (videoRef.current && videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        }
    };

    return (
        <div
            className="absolute top-0 left-0 w-full h-full"
            onMouseEnter={() => videoLoaded && setIsHovered(true)} // Activer le survol si la vidéo est chargée
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleFullScreen} // Gérer le clic pour le plein écran
        >
            <video
                ref={videoRef}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                src="/file.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Superposition semi-transparente avec texte */}
            {videoLoaded && ( // Afficher la superposition uniquement si la vidéo est chargée
                <div
                    className={`absolute inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center text-white text-xl font-bold cursor-pointer transition-opacity duration-300 z-20
            ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                    Cliquez pour visionner en plein écran
                </div>
            )}
        </div>
    );
};
