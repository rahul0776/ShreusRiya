import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../media/logo.png';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Start exit animation after 2.5 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center">
                    {/* Left Curtain */}
                    <motion.div
                        initial={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                        className="absolute left-0 top-0 w-1/2 h-full bg-[#f3eee6] border-r border-royal-gold/20"
                    />
                    {/* Right Curtain */}
                    <motion.div
                        initial={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                        className="absolute right-0 top-0 w-1/2 h-full bg-[#f3eee6] border-l border-royal-gold/20"
                    />

                    {/* Logo Container */}
                    <motion.div
                        className="relative z-10 flex flex-col items-center justify-center"
                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.5 } }}
                    >
                        <motion.img
                            src={logoImg}
                            alt="S&R Logo"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="w-48 md:w-64 h-auto"
                        />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
