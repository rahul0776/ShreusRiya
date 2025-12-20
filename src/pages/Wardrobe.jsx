import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import haldiImg from '../media/haldi.png';
import sangeetImg from '../media/sangeet.png';
import weddingImg from '../media/wedding.png';

const Wardrobe = () => {
    const events = [
        {
            name: 'Haldi',
            date: 'February 8, 2026',
            theme: 'Vibrant Hues in Semi-Traditional',
            colors: ['#C2185B', '#FF6F00', '#FFC107', '#F48FB1'],
            description: 'A vibrant celebration. Women: Palazzo, Lehenga, Sharara | Men: Kurta Pajamas, Nehru Jacket',
            suggestions: 'Vibrant Hues in Semi-Traditional',
            image: haldiImg
        },
        {
            name: 'Sangeet',
            date: 'February 7, 2026 (Evening)',
            theme: 'Elegant Midnight Blue',
            colors: ['#003F87', '#000000', '#D4AF37', '#9E9E9E'],
            description: 'An evening of music, dance, and celebration. Dress in elegant navy, black, and gold tones.',
            suggestions: 'Indo-Western outfits, Anarkalis, Sherwanis in navy, black and gold',
            image: sangeetImg
        },
        {
            name: 'Wedding',
            date: 'February 8, 2026',
            theme: 'Elegant Pastels',
            colors: ['#FFC8DD', '#A0C4FF', '#FDFCF0'],
            description: 'The main ceremony. Dress in soft pastels - pinks, blues, creams. Formal and elegant.',
            suggestions: 'Designer sarees, Lehengas, Formal suits in pastel shades',
            image: weddingImg
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-16 bg-royal-sand">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-serif text-royal-slate mb-4">
                        Wardrobe Guide
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Dress codes and color themes for each celebration. Let's make every moment picture-perfect!
                    </p>
                </motion.div>

                {/* Events */}
                <div className="space-y-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.name}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="bg-white rounded-3xl shadow-xl border border-royal-gold/20 hover:shadow-2xl transition-shadow overflow-hidden"
                        >
                            {/* Image Section - Full Width at Top */}
                            <div className="w-full">
                                <img
                                    src={event.image}
                                    alt={event.name}
                                    className="w-full h-auto"
                                />
                            </div>

                            {/* Details Section */}
                            <div className="p-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <Sparkles className="w-6 h-6 text-royal-gold" />
                                    <h3 className="text-3xl font-serif text-royal-slate">{event.name}</h3>
                                </div>
                                <p className="text-sm text-gray-600 mb-4">{event.date}</p>
                                <div className="flex gap-3 mb-6">
                                    {event.colors.map((color, i) => (
                                        <div
                                            key={i}
                                            className="w-16 h-16 rounded-full shadow-md border-2 border-white"
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </div>
                                <p className="text-lg font-medium text-royal-gold mb-4">{event.theme}</p>
                                <p className="text-lg text-gray-700 mb-4">{event.description}</p>
                                <div className="bg-royal-blue/5 rounded-xl p-4 border-l-4 border-royal-gold">
                                    <p className="text-sm font-medium text-royal-slate mb-1">Outfit Suggestions:</p>
                                    <p className="text-gray-600">{event.suggestions}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* General Guidelines */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-12 bg-gradient-to-br from-royal-gold/10 to-royal-rose/10 rounded-3xl p-8 md:p-12 border border-royal-gold/30"
                >
                    <h3 className="text-2xl font-serif text-royal-slate mb-6 flex items-center gap-3">
                        <Sparkles className="w-7 h-7 text-royal-gold" />
                        General Guidelines
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                            <span className="text-royal-gold mr-3">•</span>
                            <span>The venue is beachside, so consider comfortable footwear for outdoor events.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-royal-gold mr-3">•</span>
                            <span>Goa weather in February is warm and pleasant. Light, breathable fabrics are recommended.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-royal-gold mr-3">•</span>
                            <span>Accessories: Feel free to add your personal touch while staying within the color themes.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-royal-gold mr-3">•</span>
                            <span>For any questions, reach out to us at <span className="font-medium text-royal-gold">wedding@riyaShreus.com</span></span>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default Wardrobe;
