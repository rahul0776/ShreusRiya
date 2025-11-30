import React from 'react';

const BeachUmbrella = ({ side = 'left', className = '' }) => {
    const isLeft = side === 'left';
    return (
        <svg
            viewBox="0 0 200 300"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Umbrella Pole */}
            <line
                x1="100"
                y1="120"
                x2="100"
                y2="300"
                stroke="#C19A6B"
                strokeWidth="4"
                strokeLinecap="round"
            />

            {/* Umbrella Canopy */}
            <g>
                {/* Stripes */}
                {[0, 1, 2, 3, 4, 5].map((i) => {
                    const angle = (i * 60) - 90;
                    const isColored = i % 2 === 0;
                    const color = isColored ? '#FFB3D6' : '#A0C4FF';

                    return (
                        <path
                            key={i}
                            d={`M100 50 Q${100 + Math.cos(angle * Math.PI / 180) * 60} ${50 + Math.sin(angle * Math.PI / 180) * 60}, ${100 + Math.cos(angle * Math.PI / 180) * 80} ${50 + Math.sin(angle * Math.PI / 180) * 80} L${100 + Math.cos((angle + 60) * Math.PI / 180) * 80} ${50 + Math.sin((angle + 60) * Math.PI / 180) * 80} Q${100 + Math.cos((angle + 60) * Math.PI / 180) * 60} ${50 + Math.sin((angle + 60) * Math.PI / 180) * 60}, 100 50 Z`}
                            fill={color}
                            opacity="0.8"
                        />
                    );
                })}

                {/* Umbrella outline/shadow */}
                <ellipse
                    cx="100"
                    cy="50"
                    rx="85"
                    ry="40"
                    fill="none"
                    stroke="rgba(0,0,0,0.1)"
                    strokeWidth="2"
                />

                {/* Center top */}
                <circle cx="100" cy="50" r="8" fill="#D4AF37" />
            </g>
        </svg>
    );
};

export default BeachUmbrella;
