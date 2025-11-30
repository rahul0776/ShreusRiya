import React from 'react';

const BeachDecor = () => {
    return (
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Seashell */}
            <g transform="translate(30, 30)">
                <path
                    d="M50 10 Q60 30, 50 50 Q40 30, 50 10"
                    fill="#FFC8DD"
                    opacity="0.6"
                />
                <path
                    d="M45 10 Q50 30, 45 50"
                    stroke="#FFB3D9"
                    strokeWidth="1"
                />
                <path
                    d="M55 10 Q50 30, 55 50"
                    stroke="#FFB3D9"
                    strokeWidth="1"
                />
            </g>

            {/* Starfish */}
            <g transform="translate(120, 40)">
                {[0, 72, 144, 216, 288].map((angle, i) => (
                    <ellipse
                        key={i}
                        cx="30"
                        cy="30"
                        rx="8"
                        ry="18"
                        fill="#FFD3B6"
                        opacity="0.7"
                        transform={`rotate(${angle} 30 30)`}
                    />
                ))}
                <circle cx="30" cy="30" r="6" fill="#FFC8A0" />
            </g>

            {/* Tropical Flower */}
            <g transform="translate(60, 120)">
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <ellipse
                        key={i}
                        cx="25"
                        cy="25"
                        rx="10"
                        ry="15"
                        fill="#FFC8DD"
                        opacity="0.8"
                        transform={`rotate(${angle} 25 25)`}
                    />
                ))}
                <circle cx="25" cy="25" r="5" fill="#D4AF37" />
            </g>

            {/* Small shells scattered */}
            <ellipse cx="150" cy="140" rx="8" ry="6" fill="#A0C4FF" opacity="0.5" transform="rotate(30 150 140)" />
            <ellipse cx="40" cy="160" rx="6" ry="8" fill="#FFC8DD" opacity="0.5" transform="rotate(-20 40 160)" />
        </svg>
    );
};

export default BeachDecor;
