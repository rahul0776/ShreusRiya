import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Wardrobe = () => {
    const events = [
        {
            name: 'Devkarya',
            date: 'February 7, 2026',
            theme: 'Traditional Yellow',
            colors: ['#FFEAA7', '#FDD835', '#F9CA24'],
            description: 'A traditional ceremony welcoming new beginnings. Dress in vibrant yellows and golds.',
            suggestions: 'Sarees, Kurtas, Lehengas in yellow hues with gold embellishments'
        },
        {
            name: 'Sangeet',
            date: 'February 7, 2026 (Evening)',
            theme: 'Royal Purple & Gold',
            colors: ['#9B59B6', '#8E44AD', '#D4AF37'],
            description: 'An evening of music, dance, and celebration. Dress in regal purples with gold accents.',
            suggestions: 'Indo-Western outfits, Anarkalis, Sherwanis in purple and gold'
        },
        {
            name: 'Mehendi',
            date: 'February 8, 2026',
            theme: 'Fresh Greens & Florals',
            colors: ['#A8E6CF', '#56C596', '#FFD3B6'],
            description: 'A daytime celebration of henna art. Opt for comfortable, floral, and pastel green attire.',
            suggestions: 'Light cotton sarees, Palazzo suits, Floral prints'
        },
        {
            name: 'Marriage Day',
            date: 'February 8, 2026 (Evening)',
            theme: 'Elegant Pastels',
            colors: ['#FFC8DD', '#A0C4FF', '#FDFCF0'],
            description: 'The main ceremony. Dress in soft pastels - pinks, blues, creams. Formal and elegant.',
            suggestions: 'Designer sarees, Lehengas, Formal suits in pastel shades'
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
                            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-royal-gold/20 hover:shadow-2xl transition-shadow"
                        >
                            <div className="flex flex-col md:flex-row">
                                {/* Color Palette */}
                                <div className="md:w-1/3 p-8 bg-gradient-to-br from-royal-sand to-white flex flex-col justify-center">
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
                                    <p className="text-lg font-medium text-royal-gold mb-2">{event.theme}</p>
                                </div>

                                {/* Details */}
                                <div className="md:w-2/3 p-8 flex flex-col justify-center">
                                    <p className="text-lg text-gray-700 mb-4">{event.description}</p>
                                    <div className="bg-royal-blue/5 rounded-xl p-4 border-l-4 border-royal-gold">
                                        <p className="text-sm font-medium text-royal-slate mb-1">Outfit Suggestions:</p>
                                        <p className="text-gray-600">{event.suggestions}</p>
                                    </div>
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
