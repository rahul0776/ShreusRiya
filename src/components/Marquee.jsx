import React from 'react';

const Marquee = ({ children, direction = 'left', speed = 'normal', className = '' }) => {
    const speedClass = {
        slow: 'duration-[40s]',
        normal: 'duration-[25s]',
        fast: 'duration-[15s]',
    }[speed];

    return (
        <div className={`relative flex overflow-hidden select-none ${className}`}>
            {/* Alpha Mask */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-royal-sand via-transparent to-royal-sand" />

            <div className={`flex min-w-full shrink-0 animate-marquee ${speedClass} items-center justify-around gap-8`}>
                {children}
            </div>
            <div className={`flex min-w-full shrink-0 animate-marquee ${speedClass} items-center justify-around gap-8 ml-8`}>
                {children}
            </div>
        </div>
    );
};

export default Marquee;
