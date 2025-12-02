import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
    const weddingDate = new Date('2026-02-08T11:00:00+05:30'); // Feb 8, 2026, 11 AM IST

    const calculateTimeLeft = () => {
        const difference = weddingDate - new Date();

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timeUnits = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-royal-blue/10 via-royal-sand to-royal-rose/10 relative overflow-hidden">
            {/* Beach Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 0 Q 25 50, 50 0 T 100 0 L 100 100 L 0 100 Z" fill="currentColor" className="text-royal-blue" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-royal-slate mb-4">
                        Counting Down to Forever
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mt-12">
                        {timeUnits.map((unit, index) => (
                            <motion.div
                                key={unit.label}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-royal-gold/20 hover:shadow-2xl transition-shadow"
                            >
                                <div className="text-4xl md:text-6xl font-serif text-royal-slate mb-2">
                                    {String(unit.value).padStart(2, '0')}
                                </div>
                                <div className="text-sm md:text-base text-gray-600 uppercase tracking-wider">
                                    {unit.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Countdown;
