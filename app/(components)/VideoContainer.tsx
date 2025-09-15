'use client';

import React, { useState, useEffect } from 'react';
import BackgroundVideo from './BackgroundVideo';

export default function VideoContainer() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="relative w-full h-[95vh] flex items-center justify-center text-white text-center overflow-hidden">
            <img
                src="/bgThumbnail.png"
                alt="Image de prévisualisation"
                className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000"
            />

            {isClient && <BackgroundVideo />}

            {/* Le SVG de transition ondulé en bas */}
            <svg
                className="absolute bottom-0 w-full z-20 text-gray-100"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    fill="currentColor"
                    fillOpacity="1"
                    d="M0,192L48,176C96,160,192,128,288,149.3C384,171,480,245,576,266.7C672,288,768,256,864,224C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
        </div>
    );
};
