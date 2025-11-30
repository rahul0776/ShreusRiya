import React from 'react';

const PalmTree = ({ side = 'left', className = '' }) => {
    return (
        <svg
            viewBox="0 0 200 400"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Trunk */}
            <path
                d="M95 400 Q90 300, 95 200 Q100 100, 95 50"
                stroke="#8B6F47"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
            />
            <ellipse cx="95" cy="60" rx="8" ry="6" fill="#8B6F47" />
            <ellipse cx="95" cy="80" rx="8" ry="6" fill="#8B6F47" />
            <ellipse cx="92" cy="100" rx="8" ry="6" fill="#8B6F47" />

            {/* Palm Fronds - multiple layers for depth */}
            {/* Frond 1 - Center back */}
            <path
                d="M95 50 Q95 -20, 100 -50"
                stroke="#4A7C59"
                strokeWidth="4"
                fill="none"
            />
            <ellipse cx="100" cy="-30" rx="35" ry="80" fill="#56C596" opacity="0.8" transform="rotate(-10 100 -30)" />

            {/* Frond 2 - Left */}
            <path
                d="M95 50 Q40 20, 0 30"
                stroke="#4A7C59"
                strokeWidth="4"
                fill="none"
            />
            <ellipse cx="40" cy="35" rx="50" ry="25" fill="#56C596" opacity="0.9" transform="rotate(-30 40 35)" />

            {/* Frond 3 - Right */}
            <path
                d="M95 50 Q150 20, 190 30"
                stroke="#4A7C59"
                strokeWidth="4"
                fill="none"
            />
            <ellipse cx="150" cy="35" rx="50" ry="25" fill="#56C596" opacity="0.9" transform="rotate(30 150 35)" />

            {/* Frond 4 - Left forward */}
            <path
                d="M95 50 Q50 10, 20 0"
                stroke="#4A7C59"
                strokeWidth="4"
                fill="none"
            />
            <ellipse cx="50" cy="15" rx="45" ry="30" fill="#A8E6CF" transform="rotate(-40 50 15)" />

            {/* Frond 5 - Right forward */}
            <path
                d="M95 50 Q140 10, 170 0"
                stroke="#4A7C59"
                strokeWidth="4"
                fill="none"
            />
            <ellipse cx="140" cy="15" rx="45" ry="30" fill="#A8E6CF" transform="rotate(40 140 15)" />

            {/* Coconuts */}
            <circle cx="85" cy="60" r="8" fill="#8B6F47" />
            <circle cx="100" cy="65" r="8" fill="#8B6F47" />
            <circle cx="90" cy="70" r="8" fill="#8B6F47" />
        </svg>
    );
};

export default PalmTree;
