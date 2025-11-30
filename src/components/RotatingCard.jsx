import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const RotatingCard = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
    };

    const prevCard = () => {
        setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    };

    useEffect(() => {
        const timer = setInterval(nextCard, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full max-w-md mx-auto aspect-[3/4] perspective-1000">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -90, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-royal-gold/20"
                >
                    {/* Flashlight Effect */}
                    <div className="absolute inset-0 bg-royal-sand/10 pointer-events-none group hover:bg-transparent transition-colors" />

                    <img
                        src={cards[currentIndex].image}
                        alt={cards[currentIndex].title}
                        className="w-full h-2/3 object-cover"
                    />
                    <div className="p-6 text-center">
                        <h3 className="text-2xl font-serif text-royal-slate mb-2">{cards[currentIndex].title}</h3>
                        <p className="text-gray-600 font-sans">{cards[currentIndex].description}</p>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <button
                onClick={prevCard}
                className="absolute top-1/2 -left-12 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-royal-slate shadow-lg transition-all"
            >
                <ChevronLeft />
            </button>
            <button
                onClick={nextCard}
                className="absolute top-1/2 -right-12 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-royal-slate shadow-lg transition-all"
            >
                <ChevronRight />
            </button>
        </div>
    );
};

export default RotatingCard;
